# Verification report

Date: 6 November 2026.

Passed:
- Production Next.js static export with webpack, including all 14 requested pages and the additional source registry.
- Strict TypeScript checking.
- ESLint: no errors or warnings after configuration cleanup.
- Program filter tests: case-insensitive/trimmed search, combined level/department/text selection, incompatible combination and reset; program uniqueness and evidence URLs.
- Source registry checks for retrieval date, verification status and official origin.
- Export checks for titles, main landmarks, independent-concept disclosure and no-index metadata on every route.
- Internal route, fragment and local image references resolved against the exported build.

Official images were resized to at most 1800px and encoded as WebP. No external fonts, trackers, fake forms or unsupported application submissions were introduced.

The default Turbopack build failed under sandbox process restrictions. The project uses webpack; a production build with authorized compiler-process permissions succeeded. This does not indicate a deployed site.

Not performed: browser-based visual/responsive/interaction testing, screenshots, automated axe/Lighthouse analysis, a screen-reader audit or live deployment checks. The supported CUA browser tool was unavailable. The responsive layouts and accessible controls are implemented but no WCAG certification is claimed. Review the homepage, program finder and admissions page at desktop and mobile widths before public release.

Git is available and GitHub authentication succeeds for `5hoai8`. Repository creation through the integration was blocked, after which the user supplied `5hoai8/UChenab-Website`. The repository was verified private and empty before the initial source push. No public deployment was authorized or attempted. The GitHub Actions workflow will perform the full verification sequence on pushes and pull requests.
