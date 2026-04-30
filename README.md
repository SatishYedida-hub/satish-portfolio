# Satish Yedida — DevOps Portfolio

A modern, production-ready portfolio for **Satish Yedida**, a DevOps Engineer with 3.7+ years of experience in AWS, Kubernetes, CI/CD, and DevSecOps.

Built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Clean, modern dark theme with glassmorphism cards and gradient accents
- Smooth scroll-based animations powered by Framer Motion
- Fully responsive layout with a mobile hamburger menu
- Animated hero terminal showcasing real DevOps commands
- Sections: Hero, About, Skills, Experience, Projects, Contact, Footer
- Loading animation, scroll-spy navigation, and a Back-to-Top button
- Component-based architecture, ready for production

## Tech Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) with a custom DevOps-themed palette
- [Framer Motion](https://www.framer.com/motion/) for entrance and hover animations
- [react-icons](https://react-icons.github.io/react-icons/) for tech logos

## Getting Started

```bash
# install dependencies
npm install

# start dev server (http://localhost:5173)
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

## Project Structure

```
satish-portfolio/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ BackToTop.jsx
│  │  ├─ Footer.jsx
│  │  ├─ GlowOrb.jsx
│  │  ├─ Loader.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ ProjectCard.jsx
│  │  └─ SectionHeading.jsx
│  ├─ sections/
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Experience.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Projects.jsx
│  │  └─ Skills.jsx
│  ├─ data/
│  │  └─ portfolio.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ package.json
```

## Customization

All copy, projects, skills, and contact info live in a single file:

```
src/data/portfolio.js
```

Update that file to personalize the site without touching components.

## Deploy to GitHub Pages

This repo ships with two ready-to-use deployment paths. Pick one.

### Option A — Automatic via GitHub Actions (recommended)

A workflow at `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to `main`.

1. **Create the GitHub repo** named `satish-portfolio` (the same name `vite.config.js` expects). If you use a different name, update `REPO_NAME` in `vite.config.js`.

2. **Push the code:**

   ```bash
   git init
   git add .
   git commit -m "feat: portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/satish-portfolio.git
   git push -u origin main
   ```

3. **Enable Pages:** on GitHub go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

4. The workflow runs automatically. When it finishes, your site is live at:

   ```
   https://<your-username>.github.io/satish-portfolio/
   ```

The workflow also injects the correct `base_path` at build time (via the `BASE_PATH` env var), creates a `404.html` SPA fallback, and adds a `.nojekyll` file so Vite's `_assets` folder is served correctly.

### Option B — Manual deploy with `gh-pages`

If you'd rather not use Actions:

```bash
npm install
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. Then in **Settings → Pages → Source**, choose **Deploy from a branch**, pick `gh-pages` / `/ (root)`.

### Using a custom domain or user site

- **User site** (`<username>.github.io` repo): set `REPO_NAME = ''` and `base = '/'` in `vite.config.js`.
- **Custom domain**: add a `public/CNAME` file containing your domain (e.g. `satish.dev`), then in Settings → Pages → Custom domain enter the same value. With a custom domain you can also set `base = '/'`.

## Deploy elsewhere

The site builds to a static `dist/` folder and can be deployed anywhere — **Vercel**, **Netlify**, **AWS S3 + CloudFront**, **Cloudflare Pages**, etc.

```bash
npm run build
# upload the dist/ folder to your host
```

For non-GitHub-Pages hosts, set `base = '/'` in `vite.config.js` (or pass `BASE_PATH=/` at build time).
