# Developer profile overlay

The same reusable `DeveloperProfileBadge` is mounted once in each branch's root layout, after the footer. Its fixed-position clipping wrapper sits outside normal page flow; it is neither a page section nor a header redesign. The badge is positioned below the current header and keeps the same viewport position while scrolling, with responsive adjustments for header resizing and mobile safe areas. It hides while the mobile menu or an accessible/native modal is open.

## Configuration and provenance

`src/data/developer.ts` contains the exact user-provided credit, name and experience text: Developed by / Engr Shoaib Ahmad / Senior Developer · Since 2015. The GitHub profile link is https://github.com/5hoai8, matching the repository account. The avatar was retrieved from that verified profile's avatar URL on 6 November 2026, optimized to a local 96px WebP and displayed at 40–44px with SA initials on failure. No biography or repository-derived skill claims are shown.

The four small authentic Simple Icons assets identify the **Website stack** (TypeScript, React, Next.js and Tailwind CSS), all explicitly specified in the original website brief. They do not represent a claim about the developer's wider skill set. Original SVGs and the Simple Icons license are under public/developer/. No new package was added.

## Persistent behavior

The user subsequently requested a permanently expanded badge. The card is always rendered in full, including before client hydration, and remains fixed at the same viewport position while scrolling. All collapse/expand state, timers, session storage, hover handlers, outside-tap dismissal, Escape dismissal, trigger tabs and close buttons have been removed. The obsolete state helper was deleted. The badge remains white in every browser color preference. It is only temporarily obscured while the university navigation menu or a modal is open, so it cannot cover those controls; it automatically reappears in full when they close.

The overlay remains outside page flow, with a secure GitHub action, keyboard focus styling, local avatar fallback and a clear non-modal region label. Resize and mutation observers maintain safe placement; no scroll listener is used, and observers/listeners are cleaned up on unmount.

## Verification

Export checks verify one permanently visible overlay per route, exact user identity, secure GitHub link, and local avatar/technology assets. Both versions run production build, TypeScript, lint and navigation/content checks. Browser interaction and visual QA remain unavailable; no screenshots or browser accessibility audit are claimed.

Files: src/components/DeveloperProfileBadge.tsx, src/styles/developer-badge.css, src/data/developer.ts, src/app/layout.tsx, public/developer/ and scripts/developer-badge.test.mjs.
