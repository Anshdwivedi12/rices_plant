# Quick Start Guide

## Prerequisites

Make sure you have **Node.js** installed (version 18 or higher).

Check if Node.js is installed:
```bash
node --version
```

If not installed, download from: https://nodejs.org/

---

## Step-by-Step Instructions

### Step 1: Install Dependencies

Open your terminal/command prompt in the project folder and run:

```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, etc.)

**Wait for installation to complete** (may take 2-5 minutes)

---

### Step 2: Run Development Server

Once installation is complete, run:

```bash
npm run dev
```

You should see output like:
```
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - ready started server on 0.0.0.0:3000
```

---

### Step 3: Open in Browser

Open your web browser and go to:

**http://localhost:3000**

The website should now be running! 🎉

---

## Troubleshooting

### If you get an error about Node.js:
- Install Node.js from https://nodejs.org/ (LTS version recommended)
- Restart your terminal after installation

### If npm install fails:
- Make sure you have internet connection
- Try deleting `node_modules` folder and `package-lock.json` (if exists), then run `npm install` again

### If port 3000 is already in use:
- Close other applications using port 3000
- Or run: `npm run dev -- -p 3001` (to use port 3001 instead)

### If you see TypeScript errors:
- This is normal during development
- The website will still work, these are just warnings

---

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server (after build)
- `npm run lint` - Check for code errors

---

## Next Steps

1. **Update WhatsApp Number**: Edit `components/WhatsAppButton.tsx` (line 7)
2. **Replace Images**: Add your real product/company images
3. **Update Contact Info**: Edit contact details in Footer and Contact page
4. **Customize Content**: Update text, products, services as needed

---

## Need Help?

Check the `SETUP.md` file for more detailed information.

