# Updating content

1. Open the relevant official page and confirm its current content; do not rely on search snippets alone.
2. Update `src/data/content.ts` for page summaries and directories, or `src/data/programs.json` for programs. Preserve exact official program names, level and department. Include the evidence URL on each program.
3. Update `src/data/sources.json` with the checked URL, ISO retrieval date and status. Change the visible snapshot dates in `ProgramFinder.tsx`, the route template and calendar copy when refreshing content.
4. For news/events, add verified titles, original links and only supported summaries. Distinguish publication date from event date. Do not treat old news as upcoming events.
5. Recheck scholarship conditions; do not copy percentages or renewal criteria without recording the supporting policy.
6. For contact corrections, update both structured content and the shared footer. Verify `tel:` and `mailto:` destinations.
7. Replace images only with approved assets, resize and encode as WebP, set meaningful alt text, and update `docs/assets.json` with source and reuse rights. Keep news illustrations distinct from event photography.
8. Run type checking, lint, build and tests; review mobile/desktop layouts and keyboard access; commit the change before deploying.

No CMS is required. Content is versioned with the application. Keep future faculties distinct from active faculties. Flag conflicts between official pages rather than guessing. Review admissions, calendar and scholarship content before every intake and recheck application links before release.
