# Setting Up GitHub Pages Hosting

Follow these steps to switch from Firebase Hosting to GitHub Pages.

## Step 1: Clear Old Projects from Firestore

**Important:** The projects you see are stored in Firebase Firestore, not in your files. You need to delete them from Firestore:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **nick-s-crm-tool**
3. Click **Firestore Database** (left sidebar)
4. Click on the **projects** collection
5. **Delete all duplicate sample projects** (you'll see multiple "Mining Equipment Upgrade", etc.)
6. Keep only your real projects

## Step 2: Initialize Git Repository

Open **GitHub Desktop**:

1. Click **File** → **Add Local Repository**
2. Click **Choose...** and navigate to your project folder:
   `/Users/nicolas/Library/Mobile Documents/com~apple~CloudDocs/Desktop/Desktop - Nick's MacBook Air/Cursor Projects/Work/CRM Rev 2`
3. If it says "This directory does not appear to be a Git repository":
   - Click **"Create a repository"** button
   - Repository name: `crm-rev-2` (or your preferred name)
   - Description: "Mechanical Products CRM"
   - **Keep this code private**: (your choice)
   - Click **Create Repository**

## Step 3: Make Initial Commit

1. In GitHub Desktop, you'll see all your files listed as changes
2. At the bottom, write a commit message: "Initial commit"
3. Click **Commit to main**
4. Click **Publish repository** (top right)
   - Choose whether to keep it private or make it public
   - Click **Publish repository**

## Step 4: Enable GitHub Pages

1. Go to your repository on **GitHub.com** (it should open automatically after publishing)
2. Click **Settings** (top right of the repository page)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
6. Click **Save**

## Step 5: Your Site URL

Your site will be live at:
```
https://YOUR_USERNAME.github.io/crm-rev-2/
```

Or if you kept the default name:
```
https://YOUR_USERNAME.github.io/CRM-Rev-2/
```

**Note:** It may take a few minutes for the site to be available after enabling Pages.

## Step 6: Update File Paths (If Needed)

GitHub Pages serves from a subdirectory (`/crm-rev-2/`), so you may need to update some paths in your HTML files. However, since your paths are relative (e.g., `href="index.html"`), they should work fine.

If you have any issues with CSS or JavaScript not loading:
- Check that paths are relative (start with `./` or just the filename)
- Not absolute (don't start with `/`)

## Step 7: Future Deployments

To update your live site:

1. Make changes to your files
2. Open **GitHub Desktop**
3. Write a commit message describing your changes
4. Click **Commit to main**
5. Click **Push origin** (or **Sync**)
6. Your site will automatically update within 1-2 minutes!

## Troubleshooting

### Site shows 404
- Wait a few minutes (GitHub Pages can take up to 10 minutes to deploy)
- Check Settings → Pages to ensure it's enabled
- Make sure `index.html` is in the root folder

### CSS/JavaScript not loading
- Check browser console for 404 errors
- Make sure file paths are relative, not absolute
- Verify files are in the repository

### Old data still showing
- Remember: Projects are stored in **Firebase Firestore**, not in your files
- You need to delete duplicates from Firebase Console → Firestore Database
- Your files don't contain the project data - it's in the cloud database

## Why GitHub Pages is Better

✅ **Version Control**: Every change is tracked in Git
✅ **Easy Deployments**: Just commit and push
✅ **File History**: See what changed when
✅ **Collaboration**: Easy to share and work with others
✅ **Free**: Completely free hosting

---

**Your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME/`**

Replace `YOUR_USERNAME` with your GitHub username and `REPO_NAME` with your repository name.

