# Troubleshooting GitHub Pages 404 Error

## Common Causes:

1. **Files not pushed to GitHub yet**
2. **GitHub Pages still building** (can take 2-5 minutes)
3. **index.html not in the root folder**
4. **Wrong branch selected**

## Step-by-Step Fix:

### Step 1: Verify Files are Committed and Pushed

1. **Open GitHub Desktop**
2. **Check if there are any uncommitted changes:**
   - If you see files listed as "Changed files", you need to commit them
   - Click "Commit to main" with a message like "Initial commit"
   - Click "Push origin" (top right)

### Step 2: Verify Files are on GitHub.com

1. **Go to your repository on GitHub.com**
2. **Click the "Code" tab** (top navigation)
3. **Check that you can see these files:**
   - `index.html`
   - `costing-sheet.html`
   - `project-detail.html`
   - Other HTML files
   - `firebase-config.js`
   - CSS and JS files

**If you don't see these files → You need to commit and push them from GitHub Desktop**

### Step 3: Check GitHub Pages Settings

1. **Go to Settings → Pages**
2. **Verify:**
   - Source: "Deploy from a branch"
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
3. **Click Save** if anything changed

### Step 4: Wait for Build

1. **Go to the "Actions" tab** (top navigation)
2. **You should see a workflow called "pages build and deployment"**
3. **Wait for it to complete** (yellow = running, green checkmark = done, red X = error)
4. **Can take 2-5 minutes**

### Step 5: Clear Browser Cache

After the build completes:
- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Or try in an incognito/private window

---

## Quick Checklist:

✅ All files committed in GitHub Desktop?
✅ All files pushed to GitHub (check "Code" tab)?
✅ GitHub Pages enabled with correct branch?
✅ Wait 2-5 minutes after first enable?
✅ Check "Actions" tab for build status?

---

## If Still Not Working:

1. **Check the exact URL format:**
   - Should be: `https://boooooony.github.io/Nick-s-CRM-Project/`
   - Make sure repository name matches exactly (case-sensitive)

2. **Verify index.html exists:**
   - Go to: `https://github.com/boooooony/Nick-s-CRM-Project/blob/main/index.html`
   - If this works, the file exists
   - If 404, the file wasn't pushed

3. **Try accessing directly:**
   - `https://boooooony.github.io/Nick-s-CRM-Project/index.html`
   - If this works, there might be a redirect issue

