# WINFO Business Solutions

WINFO's multilingual Hong Kong business solutions website. The site provides a complete framework for services, pricing, cases, approach, company information, contact, privacy and 404 pages.

## Local setup

Requirements: Node.js 20 LTS or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Available commands

```bash
npm run build    # Production build and GitHub Pages fallback check
npm run dev      # Local development server
npm run preview  # Preview the production build
```

## Project notes

- Default language is English. Traditional Chinese and Simplified Chinese are available in the header.
- Desktop Services navigation opens on hover and remains open while the pointer moves into the mega menu.
- Mobile navigation uses an independently scrollable menu with a fixed consultation action.
- The contact form currently demonstrates the success state locally. Connect it to the approved enquiry endpoint before launch.
- Privacy copy is a structured Hong Kong PDPO-oriented starting point and should be reviewed by the company's legal adviser before publication.

## Delivery foundations

The repository includes a GitHub Actions workflow at `.github/workflows/build-and-deploy.yml`. It installs from the lockfile, runs the production build and publishes the `dist` artifact to GitHub Pages. Git history should be kept on the remote with reviewed commits so the previous stable deployment can be restored when needed.
