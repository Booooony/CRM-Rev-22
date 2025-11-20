# Fixing Firebase Tools Installation Permission Error

You're getting a permission error. Here are two ways to fix it:

## Option 1: Use sudo (Quick Fix)

Run the install command with `sudo` to give it administrator permissions:

```bash
sudo npm install -g firebase-tools
```

You'll be prompted for your Mac password (it won't show as you type - that's normal).

Then continue with:
```bash
firebase login
```

## Option 2: Install Locally (Better Practice)

If you prefer not to use `sudo`, install it locally in your project:

```bash
npm install firebase-tools
```

Then use it with:
```bash
npx firebase login
npx firebase init hosting
npx firebase deploy --only hosting
```

## Option 3: Fix npm Permissions Properly (Recommended Long-term)

This fixes the underlying permissions issue:

1. Create a directory for global packages:
```bash
mkdir ~/.npm-global
```

2. Configure npm to use this directory:
```bash
npm config set prefix '~/.npm-global'
```

3. Add to your shell profile (zsh):
```bash
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

4. Now install Firebase tools (without sudo):
```bash
npm install -g firebase-tools
```

---

**For now, just use Option 1 (sudo) to get started quickly!**

