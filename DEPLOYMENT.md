# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Update Repository Name (if needed)

If your GitHub repository name is **not** `Protfolio`, you need to update the base path in `vite.config.ts`:

```typescript
base: process.env.GITHUB_PAGES === 'true' ? '/your-repo-name/' : '/',
```

Replace `your-repo-name` with your actual repository name.

### 3. Push to GitHub

The GitHub Actions workflow will automatically deploy your site when you push to the `main` branch:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 4. Monitor Deployment

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You should see a workflow run called "Deploy to GitHub Pages"
4. Wait for it to complete (usually takes 1-2 minutes)

### 5. Access Your Site

Once deployment is complete, your site will be available at:
```
https://your-username.github.io/Protfolio/
```

(Replace `your-username` with your GitHub username and `Protfolio` with your repository name if different)

## Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build:gh-pages
   ```

2. Copy the contents of the `dist` folder to the `gh-pages` branch

3. Push the `gh-pages` branch to GitHub

## Troubleshooting

### Routes not working

If direct links to routes (like `/experience`) show a 404:
- Make sure the `404.html` file is in the `public` folder (it should be copied automatically)
- Verify the base path in `vite.config.ts` matches your repository name

### Assets not loading

- Check that the base path in `vite.config.ts` is correct
- Ensure all assets use relative paths (Vite handles this automatically)

### Build fails

- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Try running `npm run build:gh-pages` locally to debug

## Custom Domain (Optional)

If you want to use a custom domain:

1. Update `vite.config.ts` to use `/` as the base path
2. Add a `CNAME` file in the `public` folder with your domain name
3. Configure DNS settings as per GitHub Pages documentation

