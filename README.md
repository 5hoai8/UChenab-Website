# University of Chenab — independent website concept

A complete responsive university website concept built from official University of Chenab information. This is an independent design implementation, with no claim of university endorsement. It does not replace the official website or accept applications.

## Both design versions

- Original design (`main`): https://5hoai8.github.io/UChenab-Website/
- Academy-inspired alternative (`design/academy-style`): https://5hoai8.github.io/UChenab-Website/academy-style/

The original design source remains on main. The Pages workflow builds and publishes both versions together. See `docs/DESIGN-VERSIONS.md` for editing and deployment instructions.

## Live preview

GitHub Pages destination: https://5hoai8.github.io/UChenab-Website/

The `Deploy GitHub Pages` workflow builds and publishes the public website from this repository after Pages is enabled with **GitHub Actions** as its source. A private source repository requires a GitHub plan that supports Pages for private repositories.

## Stack and requirements

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Phosphor React filled icons and shared CSS design tokens. Node.js 20.9 or newer. The lockfile records exact dependencies. No database, CMS, API credentials or environment variables are required.

## Run and verify

```sh
npm ci
npm run dev
npm run typecheck
npm run lint
npm run build
npm test
```

Open http://localhost:3000 during development. The production build writes a portable static site to `out/`. The build uses webpack for compatibility with restricted execution environments. For production, serve `out/` with a static host. Browser inspection should cover 390px, 768px and 1440px widths, keyboard navigation, dropdowns, mobile menu, filters, accordions, contrast and reduced motion before public release.

## Structure

- `src/app/`: homepage, generated internal routes, loading and error states, metadata.
- `src/components/layout/`: shared responsive navigation and footer.
- `src/components/ui/`: design primitives.
- `src/components/ProgramFinder.tsx`: search, filters, live result count and empty state.
- `src/data/`: content, program snapshot and source registry.
- `src/lib/`: program filtering helper.
- `src/styles/`: responsive design system and accessibility styles.
- `public/images/`: optimized university-origin images.
- `scripts/`: data and static-export checks.
- `docs/`: research, design, maintenance, deployment and QA notes.

## Pages and functionality

Home, About, Leadership, Faculties & Departments, Academic Programs, Degree Finder, Admissions, Scholarships, Campus Life, Research, News & Events, Academic Calendar, University Offices, Contact and Content Sources. The program finder supports combined text, level and department filtering. Program detail actions lead to the verified official degree finder rather than fabricating requirements. Applications link through the official application page. Contact actions use real telephone and email links. No visitor data is stored and no mock submission forms are used.

## Official sources and content management

The main source is https://uchenab.edu.pk/. `src/data/sources.json` records URLs, retrieval dates and verification status. The user-facing `/sources/` page exposes this registry. See `docs/RESEARCH.md` and `docs/CONTENT-MAINTENANCE.md`. Content was checked on 6 November 2026; it is a snapshot, not a live integration. Recheck time-sensitive information before release.

## GitHub workflow

This project has its own GitHub repository: https://github.com/5hoai8/UChenab-Website. The user selected this destination after repository creation through the integration was blocked. The supplied repository was verified private and empty before the initial push.

```sh
git clone https://github.com/5hoai8/UChenab-Website.git
cd UChenab-Website
npm ci
```

Use branches, review source changes and run the checks before each deployment. Never commit secrets, `.env`, caches or `node_modules`. Keep the repository private unless the owner explicitly authorizes a visibility change.

## Deployment

Vercel is suitable for this standard Next.js static export. Netlify and Cloudflare Pages can serve the same `out/` directory. A `vercel.json` is supplied. No hosting account or official domain was modified. See `docs/DEPLOYMENT.md`; public deployment requires explicit authorization. A portable static build archive is provided separately from the source archive.

## Known limitations

- GitHub Pages publishing is authorized. Repository Pages settings must be enabled before the deployment workflow can publish.
- Browser infrastructure was unavailable, so no browser screenshots, interactive browser tests or audited WCAG conformance are claimed.
- The official degree page contains both an updated finder and a legacy table with differences. Only the updated finder is indexed. Intake availability, accreditation, fees, durations and eligibility are not inferred.
- No current admissions deadline or open-intake claim is made.
- News contains one verified homepage-linked story; campus images are contextual, not asserted to depict that event.
- University images remain university-owned. Obtain permission before public reuse. The university logo was added at the user’s request using the matching official-site asset; its source is recorded in docs/assets.json.
- Source access does not establish university endorsement. Human content and accessibility review remain necessary before a public release.
