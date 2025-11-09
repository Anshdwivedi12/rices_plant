# How to Run the Website

## Quick Steps

### 1. Open Terminal/Command Prompt
- Press `Windows Key + R`
- Type `cmd` or `powershell` and press Enter
- Navigate to your project folder:
  ```bash
  cd C:\Users\HP\Desktop\rices_plant
  ```

### 2. Install Dependencies (First Time Only)
```bash
npm install
```
**Wait for this to complete** (2-5 minutes)

### 3. Start the Development Server
```bash
npm run dev
```

### 4. Open in Browser
Once you see:
```
✓ Ready in 2.5s
○ Local: http://localhost:3000
```

Open your browser and go to: **http://localhost:3000**

---

## What You Should See

✅ The website homepage with:
- Hero section
- Navigation menu
- Product sections
- Contact form
- WhatsApp button (bottom right)

---

## Common Errors & Fixes

### ❌ Error: "npm is not recognized"
**Fix:** Install Node.js from https://nodejs.org/

### ❌ Error: "Port 3000 is already in use"
**Fix:** 
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### ❌ Error: "Cannot find module"
**Fix:**
```bash
# Delete and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

### ⚠️ Warning: "ExperimentalWarning"
**This is OK!** It's just a warning, not an error. Your website will work fine.

---

## Stop the Server

Press `Ctrl + C` in the terminal to stop the server.

---

## Need More Help?

Check `TROUBLESHOOTING.md` for detailed solutions.

