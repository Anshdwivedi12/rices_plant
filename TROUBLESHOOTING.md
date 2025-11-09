# Troubleshooting Guide

## Common Errors and Solutions

### Error 1: "Cannot find module" or "Module not found"

**Solution:**
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# On Windows PowerShell:
Remove-Item -Recurse -Force node_modules, package-lock.json

# Then reinstall
npm install
```

---

### Error 2: "Port 3000 is already in use"

**Solution:**
```bash
# Use a different port
npm run dev -- -p 3001

# Or kill the process using port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

---

### Error 3: TypeScript errors

**Solution:**
The warnings are usually fine. If you want to fix them:
```bash
# Check for errors
npm run lint

# If there are real errors, they'll be shown
```

---

### Error 4: "next: command not found"

**Solution:**
```bash
# Make sure dependencies are installed
npm install

# If that doesn't work, try:
npm install next@latest react@latest react-dom@latest
```

---

### Error 5: Build/Compilation errors

**Common causes:**
1. Missing imports
2. Syntax errors
3. Type errors

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# On Windows:
Remove-Item -Recurse -Force .next

# Then try again
npm run dev
```

---

### Error 6: "ExperimentalWarning" (CommonJS/ES Module)

**This is just a WARNING, not an error!**
- Your app will still work
- This is a Node.js warning about module types
- You can ignore it safely

---

### Error 7: Image loading errors

**Solution:**
- Make sure images are in the `public` folder
- Or update `next.config.js` to allow your image domains
- For now, placeholder images from Unsplash are used

---

## Step-by-Step Fix

If nothing works, try this complete reset:

```bash
# 1. Stop the server (Ctrl+C)

# 2. Delete everything
Remove-Item -Recurse -Force node_modules, .next, package-lock.json

# 3. Reinstall
npm install

# 4. Start fresh
npm run dev
```

---

## Still Having Issues?

**Please share:**
1. The exact error message
2. What command you ran
3. Your Node.js version (`node --version`)
4. Your npm version (`npm --version`)

---

## Quick Test

Run these commands to verify setup:

```bash
# Check Node.js
node --version
# Should show: v18.x.x or higher

# Check npm
npm --version
# Should show: 9.x.x or higher

# Check if dependencies are installed
npm list next
# Should show: next@14.2.0
```

