# Kazi Samin Nawal — Portfolio

Personal portfolio built with **Next.js (App Router)**, **Tailwind CSS v4** and **Motion**. Fully static — no backend or database.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content

Everything (bio, experience, projects, skills, publications, links) lives in
[`src/data/portfolio.ts`](src/data/portfolio.ts). Replace `public/resume.pdf` to update the CV.

Colors are defined once in [`src/app/globals.css`](src/app/globals.css) under `@theme`.

## Deploy

**Vercel:** import the repo at vercel.com/new — no settings needed.

**GitHub Pages:** push to `main`, then in the repo go to *Settings → Pages → Source → GitHub Actions*.
The workflow in `.github/workflows/deploy.yml` builds and publishes the `out/` folder automatically.
