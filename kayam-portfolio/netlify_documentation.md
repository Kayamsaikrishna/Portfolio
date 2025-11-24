Certainly! Here's a clear, step-by-step documentation of your portfolio deployment process from development to live deployment on Netlify:

---

# Portfolio Deployment Documentation

## Overview
This document outlines the steps taken to build and deploy a React/Vite portfolio project to Netlify, including setup, build, and deployment.

---

## 1. **Project Setup**

- Developed a React portfolio using Vite as the build tool.
- Used various assets including images, PDFs, and Lottie animations.
- Ensured the project runs locally with:
  ```bash
  npm install
  npm run dev
  ```

---

## 2. **Preparing for Production Build**

- Before deployment, create a production build of the project:
  ```bash
  npm run build
  ```
- This generates a `dist` folder containing optimized static files ready for deployment.
- Note: During build, warnings about large chunks and use of `eval` in `lottie-web` appeared, which can be optimized later.

---

## 3. **Installing Netlify CLI**

- To deploy from the command line, install Netlify CLI globally:
  ```bash
  npm install -g netlify-cli
  ```
- Log in to your Netlify account:
  ```bash
  netlify login
  ```
- This opens a browser window for authentication.

---

## 4. **Deploying to Netlify (Draft Deploy)**

- Run the deploy command to create a draft deploy:
  ```bash
  netlify deploy
  ```
- Follow the prompts:
  - Choose **Create & configure a new project**
  - Select your team/account
  - Enter a project name (e.g., `kayam-portfolio`)
  - Set the publish directory to `dist`
- Netlify uploads your build and provides a **draft URL** for preview.

---

## 5. **Deploying to Production**

- After verifying the draft deploy, push the site live with:
  ```bash
  netlify deploy --prod
  ```
- When prompted, again specify the publish directory as `dist`.
- Netlify builds and deploys the site to the production URL:
  ```
  https://your-project-name.netlify.app
  ```

---

## 6. **Post Deployment**

- Visit the production URL to verify the site is live and functioning.
- Optional:
  - Add a custom domain via Netlify dashboard → Domain settings.
  - Optimize large assets (e.g., compress large images like the logo).
  - Implement code splitting or chunking to reduce JS bundle size.

---

## 7. **Summary of Commands**

| Command                      | Purpose                          |
|------------------------------|---------------------------------|
| `npm install`                | Install dependencies            |
| `npm run dev`                | Run development server          |
| `npm run build`              | Create production build         |
| `npm install -g netlify-cli`| Install Netlify CLI globally    |
| `netlify login`              | Authenticate with Netlify       |
| `netlify deploy`             | Draft deploy for preview        |
| `netlify deploy --prod`      | Deploy to production            |

---

## 8. **Useful Links**

- [Netlify CLI Documentation](https://docs.netlify.com/cli/get-started/)
- [Netlify Dashboard](https://app.netlify.com/)
- [Vite Build Configuration](https://vitejs.dev/guide/build.html)
- [Image Compression Tool](https://tinypng.com/)

---

If you want, I can help you create a README file with this content or assist with further optimizations or domain setup!