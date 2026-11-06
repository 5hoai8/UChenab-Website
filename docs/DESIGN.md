# Visual system and representative mockups

The implemented browser pages are the high-fidelity responsive mockups: `/` for desktop/mobile homepage, `/programs/` for program discovery and `/admissions/` for the application journey. Figma was not used. Browser screenshots were not generated because the supported browser QA tool was unavailable.

Direction: an editorial academic design using the user-specified institutional blue (#222362), yellow (#f0b23a), and light gray accents (#f3f4f6 and #eef0f4). Deep blue (#171843) anchors the footer, utility bar and photographic overlays. Yellow highlights primary entry points, hero text and dark-surface focus indicators; body links use blue for readable contrast on light surfaces. Georgia serif headings provide an academic character without external font requests. Arial supports readable interface text. Shared CSS variables centralize colors and typography.

The homepage progresses from campus-led introduction to quick actions, university purpose, study pathways, campus life, research, news and the next step. Internal pages share breadcrumbs, an introductory panel, content cards, evidence links and a next-step call to action. The finder adds level and department selectors, live results and an explicit empty state.

Breakpoints at 760px and 1100px adapt navigation, grids and forms. Images reserve space and use optimized WebP assets. UI components include Button, SectionTitle, Header, Footer and ProgramFinder. Keyboard focus, skip navigation, semantic landmarks, labeled controls, native details/summary accordions, reduced-motion handling and a mobile menu with expanded state are implemented. Browser review is still required to assess the final rendered visual and interaction quality.


## Logo and visual refinement

The matching official university logo now replaces the generic text/icon identity in the header and footer. The header renders the original logo silhouette in #222362 using a CSS mask; the footer preserves the white asset. Intrinsic aspect ratio and responsive sizing prevent stretching. The visual refresh adds a sticky navigation bar, a study-pathway hero panel, overlapping quick links, more spacious rounded study cards, a contrasting research card, framed campus photography, refined internal content cards, and stronger yellow accents. Mobile layouts hide the auxiliary hero panel and retain full-width navigation and controls. No new institutional claims were added. Browser visual QA remains unavailable in this environment.


## Integrated updates top bar

The main design adds a blue-to-violet gradient updates strip above the retained utility navigation. The strip combines a pill-shaped Updates label, three manual selectors for verified application/scholarship/calendar resources, an Admissions Office contact link, and a Login link to the official admissions portal. The portal returned HTTP 200 when checked. Existing location, calendar, news and contact utility links and the full primary navigation remain available. The alternate design stays on its separate branch and preview path. There is no automatic scrolling or rotation, and updates are announced politely to assistive technology. Mobile layouts wrap rather than hide existing links.

The updates strip and former utility row are now merged into one gradient top bar. Academic calendar, news and contact links remain alongside updates, admissions support and Login. The location text was removed from this bar at the user’s request. Narrow screens wrap within the single shared bar.


## Compact branded typography and surfaces

The main layout now uses a centered 1160px content measure, tighter section spacing, a smaller header and hero, more compact cards, and reduced image heights. Section surfaces use subtle blue-tinted and yellow-tinted gradients derived from #222362 and #f0b23a, with white/light-gray reading areas. Dark gradients stay within the blue palette. Cinzel regular and bold are self-hosted with the SIL Open Font License, loaded through next/font/local. Helvetica is first in the body/UI font stack, with Helvetica Neue and Arial fallbacks when Helvetica is unavailable on the visitor’s device. No proprietary Helvetica font file is redistributed. The alternate design branch is preserved separately.
