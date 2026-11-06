# Academy-inspired design alternative

Branch: `design/academy-style`. The original design remains on `main`.

The supplied reference guides the visual structure: a pale split hero with university photography, organic image framing and floating campus-life card; a white four-item benefit strip; five photo cards for verified study areas; a navy pathway strip; an overlapping photo collage and about section; a pale blue support section; four campus story/resource cards; and a compact navy footer.

Official blue #222362, yellow #f0b23a and light gray backgrounds remain the institutional palette. The original university logo is reused. Real photographs are from the official university website and are recorded in assets.json. Program artwork is credited as artwork rather than passed off as event photography.

The reference's invented academy testimonials, enrolment totals, success rates and faculty statistics are not reproduced. In their place, verified study pathways and official student-support resources serve the same visual composition. Program category cards pass department selections into the existing functional degree finder. All original internal pages are retained with the lighter shared styling.

Responsive rules adapt the hero, cards, pathway strip and navigation for mobile. Browser visual QA remains unavailable; production build, TypeScript, lint and static navigation/asset checks are used for verification.


## Aligned shared updates bar

The original bar sizing and full support wording are restored. A full-width gradient surrounds a centered inner wrapper whose width and gutters exactly match the adjacent navigation header. Main uses the 1160px header content measure with 32px minimum gutters; the academy design uses its existing 1240px header measure with 5vw gutters. Both use 6vw mobile gutters. The same updates, selectors, support link, quick links and Login component now appear on both branches. Only the bar content alignment changes; header sizing and page content are preserved.


All interface icons now use a shared Phosphor icon layer with fill weight enforced, covering navigation, controls, cards and degree discovery in both designs. Gradients use a single branding hue family at a time: blue shades with white/gray, or yellow shades with white. Blue and yellow are never blended together within a gradient.
