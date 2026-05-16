# Cloudflare Pages Deployment Guide

## Issue: Node.js Compatibility Error

The error `no nodejs_compat compatibility flag set` occurs when deploying to Cloudflare Pages. This is because Cloudflare Pages needs explicit permission to use Node.js APIs.

## Solution

### Option 1: Manual Dashboard Configuration (Recommended)

1. Go to your Cloudflare Pages project dashboard
2. Navigate to **Settings** → **Functions** → **Compatibility Flags**
3. Add `nodejs_compat` flag to **both** environments:
   - ✅ Production
   - ✅ Preview

### Option 2: Automatic via wrangler.toml

The `wrangler.toml` file in this project includes the necessary configuration:

```toml
compatibility_date = "2024-12-05"
compatibility_flags = ["nodejs_compat"]
```

This will automatically set the flag when deploying via Wrangler CLI.

## Files Added/Updated

- ✅ **wrangler.toml** - Cloudflare Pages configuration with nodejs_compat flag
- ✅ **next.config.ts** - Updated for Cloudflare Pages compatibility
- ✅ **package.json** - Standard Next.js build scripts

## Deployment Steps

### Using Cloudflare Dashboard

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Configure compatibility flags (see Option 1 above)
5. Deploy

### Using Wrangler CLI

```bash
# Install wrangler globally
npm install -g wrangler

# Authenticate with Cloudflare
wrangler login

# Deploy to Pages
wrangler pages deploy .next
```

### Using Git Push (Recommended)

1. Push changes to your GitHub repository
2. Cloudflare Pages will automatically build and deploy
3. Ensure compatibility flags are set in dashboard

## Environment Variables

If you need environment variables in production:

1. Go to **Settings** → **Environment variables**
2. Add any required variables for:
   - Production
   - Preview

## Troubleshooting

### Still getting nodejs_compat error?

1. **Clear cache**: Go to Settings → Purge Cache → Purge Everything
2. **Redeploy**: Trigger a new deployment
3. **Verify flags**: Double-check that `nodejs_compat` is set in BOTH production and preview environments

### Build fails?

Check the build logs in the Cloudflare Dashboard:

- Navigate to your Pages project
- Click on the failed deployment
- Review the build output

### Page loads but features don't work?

Ensure all API routes and dynamic features use Node.js-compatible code. Cloudflare Pages runs on Cloudflare Workers runtime which has some limitations.

## Local Testing

To test locally before deploying:

```bash
npm run dev
```

Visit `http://localhost:3000`

## Production URL

Your site will be accessible at:

- `https://<project-name>.pages.dev` (automatic)
- `https://your-custom-domain.com` (after custom domain setup)

## Support

For Cloudflare Pages documentation:

- https://developers.cloudflare.com/pages/
- https://developers.cloudflare.com/workers/runtime-apis/nodejs/

For Next.js on Cloudflare:

- https://developers.cloudflare.com/pages/framework-guides/nextjs/
