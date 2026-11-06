# Deployment plan

The user selected the existing private GitHub repository https://github.com/5hoai8/UChenab-Website. It was verified empty before the source push. No hosted deployment was authorized or attempted. Public publishing remains unauthorized.

## Vercel (preferred)

After confirming the private GitHub repository and Vercel destination:

1. Import that repository in Vercel.
2. Select Next.js; install with `npm ci`, build with `npm run build`, output `out`.
3. Enable appropriate deployment access protection in the hosting account before sharing a preview. A private GitHub repository alone does not make its hosted site private.
4. Deploy only after the user authorizes the intended audience. Do not add a university domain.
5. Verify all routes, program filters, mobile menu and official outbound links on the deployment.

No environment variables are needed. `vercel.json` records the static build settings. `robots` metadata requests no indexing but is not access control.

## Other hosts

Netlify: build `npm run build`, publish `out`. Cloudflare Pages: the same build and output; no Worker or server adapter is required. GitHub Pages is technically compatible with this static output, but a project-path deployment requires matching `basePath` and a rebuild. Vercel is the preferred workflow.

The separate static archive contains deployable `out/` contents. Serve at a domain root. Do not use a catch-all redirect to index.html: every route has its own exported HTML. Preserve `_next/` asset paths. Rebuild after source changes.

## Local inspection

Use `npm run dev` in a normal local environment. For the exported build, run `python -m http.server 8000 --directory out` and open http://localhost:8000. Public release requires content, image-rights, accessibility and responsive review.
