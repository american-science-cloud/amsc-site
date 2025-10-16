# American Science Cloud — Documentation Site

This repository hosts the **American Science Cloud** documentation site built with **Docusaurus 3** and the **U.S. Web Design System (USWDS)** framework.  
It includes a local development environment and an automated deployment pipeline to **GitHub Pages**.

---

## Live Site

🔗 https://american-science-cloud.github.io/amsc-site/

---

## About USWDS Integration

This site uses the **U.S. Web Design System (USWDS)** — https://designsystem.digital.gov/ — for its design foundation and component styling.  
USWDS provides standardized, accessible front-end patterns used across U.S. government websites.

Key benefits:
- Consistent, accessible design language compliant with federal standards  
- Built-in typography, grid, spacing, and color utilities  
- Responsive, mobile-first design system that integrates cleanly with Docusaurus themes

The theme and component styles have been customized to align with the American Science Cloud’s branding while maintaining USWDS accessibility and usability standards.

---

## Local Setup (First-Time Install)

If you're setting up this project for the first time:

1. Clone the repository  
 git clone https://github.com/american-science-cloud/amsc-site.git  
 cd amsc-site  

2. Install dependencies  
 npm install  

3. Run the development server  
 npm run start  

4. Visit your site locally at:  
 http://localhost:3000  

---

## Local Development

Run the development server:  
 npm run start  

Your site will be available at http://localhost:3000  

Edits to Markdown and React files in `/docs` or `/src` reload automatically.

---

## Test the Production Build Locally

Before deploying, verify the production build using the same settings as GitHub Pages.

1. Build your site:  npm run build  
2. Serve the build locally:  npm run serve  
3. Open your browser to:  http://localhost:3000/amsc-site/  

This tests your site exactly as it will appear on GitHub Pages, including the correct `baseUrl` (`/amsc-site/`).

---

## Configuration Highlights

- **Base URL:**  baseUrl: '/amsc-site/'   
 Ensures all assets and routes work correctly on GitHub Pages.  

- **Organization / Project Names:**    
 organizationName: 'american-science-cloud'  
 projectName: 'amsc-site'  

- **Deployment branch:**  gh-pages  

---

## Deployment Workflow

### Automatic Deployment via GitHub Actions

When you push changes to the **main** branch:

1. GitHub Actions runs the workflow defined in `.github/workflows/deploy.yml`  
2. It installs dependencies, builds the site, and deploys it to the **gh-pages** branch.  
3. GitHub Pages serves the latest build automatically at https://american-science-cloud.github.io/amsc-site/  

No manual steps required  

---

### Manual Deployment (optional)

You can also deploy manually if needed:  
 npm run deploy  

This runs the Docusaurus deployment command locally, building the site and pushing the `build/` directory to the `gh-pages` branch.
