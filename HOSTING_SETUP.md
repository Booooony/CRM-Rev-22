# Hosting Your CRM Application

You have two main options for hosting your site. Since you're already using Firebase, **Firebase Hosting** is recommended.

## Option 1: Firebase Hosting (Recommended)

Firebase Hosting is free, fast, and integrates seamlessly with your existing Firebase setup.

### Step 1: Install Firebase CLI

1. **Install Node.js** (if you don't have it):
   - Download from https://nodejs.org/
   - Install the LTS version

2. **Install Firebase CLI**:
   - Open Terminal (Mac) or Command Prompt (Windows)
   - Run: `npm install -g firebase-tools`

### Step 2: Login to Firebase

In Terminal/Command Prompt, run:
```
firebase login
```
This will open your browser to authenticate.

### Step 3: Initialize Firebase Hosting

1. Navigate to your project folder in Terminal:
   ```
   cd "/Users/nicolas/Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop - Nick's MacBook Air/Cursor Projects/Work/CRM Rev 2"
   ```

2. Initialize Firebase in your project:
   ```
   firebase init hosting
   ```

3. Follow the prompts:
   - **What do you want to use as your public directory?** → Type: `.` (current directory)
   - **Configure as a single-page app?** → Type: `N` (No)
   - **Set up automatic builds and deploys with GitHub?** → Type: `N` (No, for now)
   - **File index.html already exists. Overwrite?** → Type: `N` (No)

### Step 4: Deploy Your Site

Run this command:
```
firebase deploy --only hosting
```

Your site will be live at: `https://nick-s-crm-tool.web.app` or `https://nick-s-crm-tool.firebaseapp.com`

### Step 5: Update Firebase Config (if needed)

If Firebase Hosting gives you a different domain, you may need to update your `authDomain` in `firebase-config.js`. But usually it works with the existing config.

### Future Deployments

Every time you make changes, just run:
```
firebase deploy --only hosting
```

---

## Option 2: GitHub Pages

If you prefer using GitHub, here's how to set it up:

### Step 1: Create a GitHub Repository

1. Open **GitHub Desktop**
2. Click **File** → **Add Local Repository**
3. Click **Choose...** and select your project folder
4. Click **Create a New Repository** (if it's not already a git repo)
5. Fill in:
   - **Name**: `crm-rev-2` (or your preferred name)
   - **Description**: (optional)
   - **Keep this code private**: (your choice)
6. Click **Create Repository**

### Step 2: Push to GitHub

1. In GitHub Desktop, write a commit message like "Initial commit"
2. Click **Commit to main**
3. Click **Publish repository** (or **Push origin** if already published)

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Click **Settings** (top right)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/crm-rev-2/`

### Important Notes for GitHub Pages

- **Update file paths**: Since GitHub Pages serves from a subdirectory, you may need to update relative paths in your HTML files
- **HTTPS only**: GitHub Pages uses HTTPS, which is good for security
- **Public repository**: If you want free hosting, the repo must be public (or use GitHub Pro)

---

## Option 3: Netlify (Alternative)

Netlify is another great free hosting option:

1. Go to https://www.netlify.com/
2. Sign up with GitHub
3. Click **Add new site** → **Deploy manually**
4. Drag and drop your project folder
5. Your site will be live instantly!

---

## Recommendation

**Use Firebase Hosting** because:
- ✅ Already using Firebase (integrated)
- ✅ Free SSL certificate
- ✅ Fast CDN
- ✅ Easy deployment
- ✅ Custom domain support (free)

---

## Troubleshooting

### Firebase Hosting Issues

**Error: "firebase: command not found"**
- Make sure Node.js is installed
- Try: `npm install -g firebase-tools` again

**Error: "Permission denied"**
- Make sure you ran `firebase login` first

**Site not updating after deploy**
- Clear browser cache
- Wait a few minutes for CDN to update

### GitHub Pages Issues

**404 Error**
- Make sure you selected the correct branch and folder in Settings
- Check that `index.html` is in the root folder

**Styles not loading**
- Update CSS file paths to be relative (e.g., `./dashboard-styles.css` instead of `/dashboard-styles.css`)

---

## Next Steps After Hosting

1. **Share your URL** with your team
2. **Set up a custom domain** (optional, Firebase Hosting supports this)
3. **Enable automatic deployments** (Firebase can deploy on git push)

