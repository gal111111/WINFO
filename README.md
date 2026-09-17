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
- WhatsApp is available as an immediate contact channel. Website forms send to WINFO only after the Cloudflare Pages enquiry function and its email-delivery secrets are configured; until then the UI shows a truthful fallback rather than a false success state.
- Privacy copy is a structured Hong Kong PDPO-oriented starting point and should be reviewed by the company's legal adviser before publication.

## Delivery foundations

The repository includes a GitHub Actions workflow at `.github/workflows/build-and-deploy.yml`. It installs from the lockfile, runs the production build and publishes the `dist` artifact to GitHub Pages. Git history should be kept on the remote with reviewed commits so the previous stable deployment can be restored when needed.

For the Cloudflare Pages setup, custom-domain handover, DNS protection and rollback steps, see [docs/08-上線準備與域名接管.md](docs/08-上線準備與域名接管.md).

## Enquiry delivery for Cloudflare Pages

The form endpoint is implemented at `functions/api/enquiry.js`. Before public launch, configure these Cloudflare Pages environment variables or secrets:

```text
VITE_ENQUIRY_ENDPOINT=/api/enquiry
RESEND_API_KEY=...                 # secret
ENQUIRY_RECIPIENT=jeccw@email.com
ENQUIRY_FROM_EMAIL=WINFO Website <enquiries@winfo.hk>
```

Verify the sender domain with the email provider, add the provider's DNS records, submit a real test enquiry, and confirm that it arrives at `ENQUIRY_RECIPIENT`. Never place the email API key in `VITE_*` variables or Git.
