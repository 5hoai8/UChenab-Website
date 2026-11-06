# Two preserved designs

- Original source: `main`; live at https://5hoai8.github.io/UChenab-Website/
- Reference-inspired source: `design/academy-style`; live at https://5hoai8.github.io/UChenab-Website/academy-style/

Both versions retain all internal pages and verified content. Their compiled assets use distinct base paths, so navigation and asset requests stay within the chosen version.

The Pages workflow on `main` checks out and verifies both branches, builds the original at `/UChenab-Website` and the alternative at `/UChenab-Website/academy-style`, and deploys a combined export. The original homepage/component/style source has not been overwritten.

For later edits, work on the intended branch. Pushes to main automatically republish both designs. After changing only the alternative branch, run `Deploy GitHub Pages` from the main branch using GitHub Actions → Run workflow (or `gh workflow run pages.yml --ref main --repo 5hoai8/UChenab-Website`). Avoid dispatching the old single-export workflow from outdated commits.

For local alternative builds use `NEXT_PUBLIC_BASE_PATH=/UChenab-Website/academy-style npm run build`, followed by the same variable with `npm test`. For a root-hosted development server omit the variable.
