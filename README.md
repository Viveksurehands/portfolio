# Vivek Binkam — Portfolio

A dark, minimalist resume-style portfolio built with Next.js, TypeScript,
Tailwind CSS, and GSAP scroll animations. Visual language borrows from film
photography (frame numbers, contact sheets, split-flap headline) to tie
together development and photography/design work.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Edit your content

All copy lives directly in the section components — no CMS, just edit and save:

- `src/components/Hero.tsx` — name, role, tagline
- `src/components/About.tsx` — bio
- `src/components/Skills.tsx` — the `GROUPS` array
- `src/components/Experience.tsx` — the `ITEMS` array (swap in your university name)
- `src/components/Projects.tsx` — the `PROJECTS` array (swap in your real project links)
- `src/components/Contact.tsx` — the `LINKS` array

## Deploy

See `DEPLOY.md` for step-by-step GitHub + Vercel instructions.
