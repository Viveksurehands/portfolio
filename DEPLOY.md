# Deploying: GitHub → Vercel

## 1. Create the GitHub repo

Go to https://github.com/new and create a new **empty** repository
(don't add a README, .gitignore, or license — this project already has them).
Name it whatever you like, e.g. `portfolio`.

## 2. Push this project to GitHub

Open a terminal in this project folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/binkamvivek/portfolio.git
git push -u origin main
```

Replace the URL with the one GitHub shows you after creating the repo
(Settings will differ if you rename it from `portfolio`).

If you're prompted for a password, GitHub no longer accepts your account
password over HTTPS — use a Personal Access Token instead
(GitHub → Settings → Developer settings → Personal access tokens), or push
via SSH if you already have SSH keys set up.

## 3. Connect Vercel

1. Go to https://vercel.com/new
2. Click **Import Git Repository** and select the repo you just pushed.
3. Vercel auto-detects Next.js — leave the build settings as default
   (`next build`, output handled automatically).
4. Click **Deploy**.

Vercel builds and gives you a live `.vercel.app` URL in about a minute.
Every future `git push` to `main` auto-redeploys.

## 4. Optional: custom domain

In the Vercel project → **Settings → Domains**, add your own domain and
follow the DNS instructions Vercel gives you.
