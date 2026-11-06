# University of Chenab — independent website concept

A complete responsive university website concept built from official University of Chenab information. This is an independent design implementation, with no claim of university endorsement. It does not replace the official website or accept applications.

## Stack and requirements

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Lucide React and shared CSS design tokens. Node.js 20.9 or newer. The lockfile records exact dependencies. No database, CMS, API credentials or environment variables are required.

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

This project is isolated in its own local Git repository. No remote repository has been created or pushed. GitHub CLI was installed, but its supplied authentication was invalid. The connected GitHub integration identifies account `5hoai8`; a repository-name search returned no matches. This is a proposed destination only, pending user confirmation. The user must confirm the account and destination before remote creation or pushing, as required by the brief.

After confirming `OWNER` and private visibility, run:

```sh
gh auth login
gh auth status
gh api user --jq .login
gh repo view OWNER/university-of-chenab-website
```

If the repository exists, inspect it and choose a new name or explicitly approve its use; do not overwrite it. If it does not exist and the account is correct:

```sh
gh repo create OWNER/university-of-chenab-website --private --source=. --remote=origin --push
```

Use branches, review source changes and run the checks before each deployment. Never commit secrets, `.env`, caches or `node_modules`.

## Deployment

Vercel is suitable for this standard Next.js static export. Netlify and Cloudflare Pages can serve the same `out/` directory. A `vercel.json` is supplied. No hosting account or official domain was modified. See `docs/DEPLOYMENT.md`; public deployment requires explicit authorization. A portable static build archive is provided separately from the source archive.

## Known limitations

- No remote repository or deployment was created; destination confirmation remains pending.
- Browser infrastructure was unavailable, so no browser screenshots, interactive browser tests or audited WCAG conformance are claimed.
- The official degree page contains both an updated finder and a legacy table with differences. Only the updated finder is indexed. Intake availability, accreditation, fees, durations and eligibility are not inferred.
- No current admissions deadline or open-intake claim is made.
- News contains one verified homepage-linked story; campus images are contextual, not asserted to depict that event.
- University images remain university-owned. Obtain permission before public reuse. No official logo was reused; the design uses a text identity and generic architectural icon.
- Source access does not establish university endorsement. Human content and accessibility review remain necessary before a public release.
