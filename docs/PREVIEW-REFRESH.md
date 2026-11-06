# One refresh per new deployment

Both preview versions mount an invisible DeploymentRefresh client once in the root layout. There is no visible widget or layout change.

The build wrapper (scripts/build.mjs) records the checked-out Git commit and an ISO build timestamp in public/version.json and in the client build environment. The metadata file is generated, ignored by Git and included in the static export. A source archive without Git uses the hosting commit variable or a unique timestamp instead. Main and academy exports keep independent metadata at their own base paths.

Visible tabs check after 12 seconds, once every minute, and on returning to the tab or reconnecting. Checks are throttled, use a cache-busting metadata URL and no-store fetch, and are skipped while hidden or offline. Errors and invalid metadata are ignored. Requests, timeouts and listeners are cleaned up.

Only a different, newer build triggers navigation. The current route, query filters and hash are preserved. Session storage records the attempted release, and an internal URL marker also prevents a loop when storage is blocked or stale HTML is served after the reload. The marker is removed when the matching fresh build loads. No continuous refresh or forced refresh of the same version occurs. Existing unsaved client-only state may reset during a version change, as with a normal page reload.

This works only on pages that have loaded the new client code. Tabs opened before installation require one initial manual refresh. Static GitHub Pages cannot remotely inject code into an already-open old page; offline devices, sleeping browsers and external screenshot caches cannot be forced to update. A visible online tab normally detects a new deployment within a minute, subject to browser/CDN availability.

Verification covers newer/same/stale metadata, repeated release attempts, stale-HTML loop protection, invalid responses, preserved alternate routes/query/hash and matching exported metadata. Both versions run production build, TypeScript, lint and their normal tests. Browser-driven multi-tab rollout testing is unavailable in this environment.
