# Adriano García-Giralda — Portfolio

A responsive personal landing page for **https://adrianoggm.github.io/**, written in English with HTML, CSS and vanilla JavaScript. It presents Adriano's software engineering experience, research, a profile portrait, an Onion-FL architecture visual, a research figure and public work including [Onion-FL](https://github.com/adrianoggm/Onion-FL), [time-series image reconstruction](https://github.com/adrianoggm/time-series-image-reconstruction) and [FinGuard](https://github.com/adrianoggm/FinGuard). No Node.js or npm setup required.

## Local preview (Windows PowerShell)

Open PowerShell in the cloned `adrianoggm.github.io` folder:

```powershell
py -m http.server 8000
```

Open **http://localhost:8000**. To stop the preview, press `Ctrl+C`. You can also open `index.html` directly, though an HTTP server more closely resembles the hosted website.

## Publish from your local PC

You already have the public repository: **https://github.com/adrianoggm/adrianoggm.github.io**. Do **not** recreate it or rename your existing `adrianoggm/adrianoggm` profile README repository.

1. Review the changes and confirm the public contact details and professional claims are accurate.
2. Run:
   ```powershell
   git status
   git add .
   git commit -m "Publish portfolio website"
   git push -u origin main
   ```
3. In GitHub, open **Settings → Pages → Build and deployment** for the repo, then set **Source = GitHub Actions**. The workflow at `.github/workflows/deploy.yml` deploys automatically when changes reach `main`.
4. Track deployment in the repo's **Actions** tab. Then visit https://adrianoggm.github.io/ (first deployment can take a few minutes).

If `git push` asks you to log in, authenticate with Git Credential Manager or GitHub CLI (`gh auth login`). Never put a token inside code or commit it.

### Link the site from your separate GitHub profile README

Your personal README is at https://github.com/adrianoggm/adrianoggm/blob/main/README.md. Add this line near the top after the website is live:

```markdown
🌐 **My portfolio:** [adrianoggm.github.io](https://adrianoggm.github.io/)
```

This is optional and does not require changing your portfolio repository.

## Where to edit things

- `index.html`: headline, sections, projects, copy, metadata.
- `styles.css`: design, color palette, responsive layout and animations.
- `script.js`: project case studies, filters, mobile menu and interactive dialogs.
- `config.js`: verified public email, LinkedIn and GitHub links. Change or remove them as desired before publishing.
- `assets/`: favicon, social sharing card, profile portrait, research figures, and MoodPal logo and team photo.
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow.

**Before publishing:** review any public contact details and company-related metrics or claims. Professional projects do not include client names, private configuration, sensitive architecture or proprietary code. Research project descriptions do not imply acceptance/publication of manuscripts.

## Troubleshooting

- **404 at site URL:** Check Actions → latest `Deploy portfolio to GitHub Pages` job, and Settings → Pages → Source = GitHub Actions.
- **Workflow permission error:** Check repo Actions permissions and Pages publishing configuration.
- **Broken styles:** All CSS and JS paths are relative to repository root. Make sure `index.html`, `styles.css`, `script.js`, `config.js`, `assets/` and `.github/` are committed together.
- **No Git installed:** Install Git for Windows and re-open PowerShell.

This portfolio is separate from your GitHub profile README repository, so one won't override the other.
