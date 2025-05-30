# Netlify Deployment Guide

This guide explains how to deploy your Next.js portfolio to Netlify.

## Prerequisites

- A GitHub account
- A Netlify account (free tier is sufficient)
- Your project pushed to a GitHub repository

## Deployment Steps

### Method 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18` (will be set automatically from netlify.toml)

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - You'll get a random subdomain like `amazing-pastry-123456.netlify.app`

### Method 2: Manual Deploy

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Manual upload**
   - Go to netlify.com and sign in
   - Drag and drop the `out` folder to the deploy area
   - Your site will be deployed instantly

## Custom Domain Setup

1. **In your Netlify dashboard**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `amitdubey.dev`)

2. **Configure DNS**
   - Add CNAME record pointing to your Netlify subdomain
   - Or use Netlify's nameservers for full DNS management

## Environment Variables (if needed)

If you add any environment variables later:
1. Go to Site settings → Environment variables
2. Add your variables there

## Automatic Deployments

With GitHub integration:
- Every push to `main` branch triggers a new deployment
- Pull request previews are automatically generated
- Branch deployments can be configured

## Performance Optimizations

Your site is already optimized with:
- ✅ Static site generation (SSG)
- ✅ Image optimization
- ✅ Code splitting
- ✅ Minification
- ✅ CDN distribution via Netlify

## Site Features Post-Deployment

Your deployed site will have:
- ✅ Fast loading times
- ✅ SEO optimization
- ✅ Mobile responsiveness
- ✅ Social media previews
- ✅ All blog posts statically generated
- ✅ Proper image handling for external sources

## Troubleshooting

### Build Errors
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Images Not Loading
- External images should work with the configured `remotePatterns`
- Local images should be in the `public` folder

### 404 Errors
- The `netlify.toml` file handles client-side routing
- All routes redirect to index.html for SPA behavior

## Monitoring

After deployment:
- Monitor site performance in Netlify Analytics
- Check Core Web Vitals
- Set up uptime monitoring if needed

## Future Updates

To update your site:
1. Make changes locally
2. Test with `npm run build`
3. Push to GitHub
4. Netlify automatically deploys the changes

---

Your portfolio will be live and accessible worldwide with Netlify's global CDN! 🚀 