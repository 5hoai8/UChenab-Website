# Developer profile overlay

The same reusable `DeveloperProfileBadge` is mounted once in each branch's root layout, after the footer. Its fixed-position clipping wrapper sits outside normal page flow; it is neither a page section nor a header redesign. The badge is positioned below the current header and keeps the same viewport position while scrolling, with responsive adjustments for header resizing and mobile safe areas. It hides while the mobile menu or an accessible/native modal is open, or when the viewport has insufficient space below navigation.

## Configuration and provenance

`src/data/developer.ts` contains the exact user-provided credit, name and experience text: Developed by / Engr Shoaib Ahmad / Senior Developer · Since 2015. The GitHub profile link is https://github.com/5hoai8, matching the repository account. The avatar was retrieved from that verified profile's avatar URL on 6 November 2026, optimized to a local 96px WebP and displayed at 40–44px with SA initials on failure. No biography or repository-derived skill claims are shown.

The four small authentic Simple Icons assets identify the **Website stack** (TypeScript, React, Next.js and Tailwind CSS), all explicitly specified in the original website brief. They do not represent a claim about the developer's wider skill set. Original SVGs and the Simple Icons license are under public/developer/. No new package was added.

## Interaction and accessibility

- The first session visit introduces the card once, then returns to the collapsed edge tab. Session storage is optional and only tracks this UI preference.
- Desktop hover previews it; leaving collapses after a short delay unless pinned or keyboard focus remains inside.
- Clicking/tapping the tab pins the card. The close button, Escape or an outside pointer closes it. Closing suppresses hover reopening until a pointer leave, preventing jitter.
- Keyboard access uses a real button, expanded-state semantics, a named non-modal region, visible focus and secure GitHub link. Closed content is inert and hidden from assistive technology. No focus trap is introduced; closing explicitly returns focus when appropriate.
- CSS transitions handle the slide; reduced-motion preferences disable transitions and skip the automatic introduction. No continuous animation or repeated profile requests occurs.
- A ResizeObserver, a bounded mutation observer, requestAnimationFrame keep positioning synchronized. All listeners, observers, animation frames and timers are cleaned up.
- The overlay clips its translated card to prevent horizontal overflow. The card and collapsed tab always use opaque white backgrounds, including when the browser prefers dark mode. The viewport position does not follow scroll events.

## Verification

The state reducer tests cover hover/leave, tap pinning, timer-versus-user interaction and dismissal suppression. Export checks verify one instance per route, collapsed/inert state, secure profile links and local assets. Production build, TypeScript, lint and existing navigation/content tests run for both versions. The supported browser QA tool is unavailable, so actual pointer/touch/keyboard sequences, avatar failure rendering, viewport collisions, reduced motion and dark/light rendering have not been exercised in a browser; no screenshots or browser audit are claimed. The implemented initials fallback and positioning guards should be included in a future visual review.

Primary files: src/components/DeveloperProfileBadge.tsx, src/styles/developer-badge.css, src/data/developer.ts, src/lib/developerBadgeState.ts, src/app/layout.tsx, public/developer/ and scripts/developer-badge.test.mjs.
