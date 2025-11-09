# Deploy to Netlify - Step by Step Guide

## Method 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Prepare Your Code

1. **Make sure all changes are committed to Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ready for Netlify deployment"
   ```

2. **Push to GitHub/GitLab/Bitbucket:**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git remote add origin https://github.com/yourusername/your-repo-name.git
     git branch -M main
     git push -u origin main
     ```

### Step 2: Deploy on Netlify

1. **Go to Netlify:**
   - Visit: https://app.netlify.com
   - Sign up or log in (you can use GitHub to sign in)

2. **Add New Site:**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" (or your Git provider)
   - Authorize Netlify to access your repositories
   - Select your repository

3. **Configure Build Settings:**
   Netlify should auto-detect Next.js, but verify:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Base directory:** (leave empty)

4. **Deploy:**
   - Click "Deploy site"
   - Wait for build to complete (3-5 minutes)

5. **Your site is live!**
   - Netlify will give you a URL like: `https://your-site-name.netlify.app`

---

## Method 2: Deploy via Netlify CLI (Alternative)

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```
This will open your browser to authenticate.

### Step 3: Initialize Site

```bash
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name (or let Netlify generate one)
- Build command: `npm run build`
- Directory to deploy: `.next`

### Step 4: Deploy

```bash
netlify deploy --prod
```

This will build and deploy your site to production.

---

## Important Configuration

### Environment Variables (if needed)

If you need environment variables:

1. Go to Netlify Dashboard
2. Site settings → Environment variables
3. Add variables like:
   - `NODE_VERSION=18`
   - Any API keys or secrets

### Custom Domain

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow instructions to configure DNS

---

## Build Settings Summary

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18 (or higher)

---

## Troubleshooting

### Build Fails

1. Check build logs in Netlify dashboard
2. Common issues:
   - Missing dependencies → Make sure `package.json` has all dependencies
   - TypeScript errors → Fix any TS errors
   - Image optimization → Netlify handles this automatically

### Site Not Loading

1. Check if build succeeded
2. Verify publish directory is `.next`
3. Check browser console for errors

### Images Not Loading

- Make sure images are in `public` folder
- Use paths like `/image.jpg` (not `./public/image.jpg`)

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test contact forms (may need to configure)
- [ ] Test WhatsApp button
- [ ] Test video playback
- [ ] Check mobile responsiveness
- [ ] Update WhatsApp number if needed
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)

---

## Quick Deploy Button

You can also use this button to deploy directly:

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)

---

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Next.js on Netlify: https://docs.netlify.com/integrations/frameworks/nextjs/
- Support: https://www.netlify.com/support/

