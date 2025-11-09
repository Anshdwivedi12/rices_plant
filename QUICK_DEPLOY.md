# Quick Deploy to Netlify

## Fastest Way (5 minutes)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for Netlify deployment"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

1. **Go to:** https://app.netlify.com
2. **Click:** "Add new site" → "Import an existing project"
3. **Choose:** GitHub
4. **Select:** Your repository
5. **Build settings** (Netlify auto-detects, but verify):
   - Build command: `npm run build`
   - Publish directory: `.next`
6. **Click:** "Deploy site"

### Step 3: Wait & Done! 🎉

- Build takes 3-5 minutes
- Your site will be live at: `https://your-site-name.netlify.app`

---

## What I've Prepared

✅ `netlify.toml` - Configuration file  
✅ `.gitignore` - Updated for Netlify  
✅ Build settings configured  

---

## After Deployment

1. **Test your site** - Visit the Netlify URL
2. **Update WhatsApp number** - If needed, edit `components/WhatsAppButton.tsx` and redeploy
3. **Add custom domain** - In Netlify dashboard → Domain settings

---

## Need Help?

Check `DEPLOY_NETLIFY.md` for detailed instructions.

