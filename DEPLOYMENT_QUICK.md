# Deployment Guide - DLSS Corporate Website

## ⚠️ IMPORTANT: Cloudflare Pages nodejs_compat Error

**If you see:** "no nodejs_compat compatibility flag set"

→ **Read [CLOUDFLARE_FIX.md](./CLOUDFLARE_FIX.md) FIRST** (3 simple steps)

---

## Quick Deployment Comparison

| Platform             | Setup Time | Node.js Issues             | Recommendation |
| -------------------- | ---------- | -------------------------- | -------------- |
| **Vercel**           | 2 min      | ✅ None - automatic        | 🌟 **EASIEST** |
| **Cloudflare Pages** | 5 min      | ⚠️ Requires dashboard flag | More complex   |
| **Netlify**          | 3 min      | ✅ None - automatic        | ✅ Good option |

---

## OPTION 1: Deploy to Vercel (RECOMMENDED ⭐)

### Simplest - just 2 steps:

**Step 1: Connect Git**

```bash
npm install -g vercel
vercel
```

Then follow prompts:

- Connect GitHub repository
- Select "DLSS" or "dhaka-logistic"
- Click **Deploy**

**Step 2: Done!**

- Vercel auto-detects Next.js
- No compatibility flags needed
- Live at `https://<project>.vercel.app`

### Custom Domain (optional)

1. Vercel Dashboard → Settings → Domains
2. Add `www.dhakalogistic.com`
3. Follow DNS instructions

---

## OPTION 2: Deploy to Cloudflare Pages

### If you have Cloudflare account:

**Step 1: Enable nodejs_compat Flag** ⚠️ CRITICAL
→ See [CLOUDFLARE_FIX.md](./CLOUDFLARE_FIX.md) for detailed instructions

In short:

1. Dashboard → Pages → dhaka-logistic → Settings
2. Functions → Compatibility Flags
3. Add `nodejs_compat` to Production AND Preview
4. Save

**Step 2: Connect Git**

1. Cloudflare Pages
2. Connect GitHub
3. Select repository: `Stellar-Worm/dhaka-logistic`
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy

**Step 3: Redeploy**

- Push commit to GitHub, or
- Manual redeploy in dashboard
- Wait 2-3 minutes for build
- Check Deployments tab for status

---

## OPTION 3: Deploy to Netlify

**Step 1: Connect Git**

1. Go to https://netlify.com
2. Click **Add new site** → **Import an existing project**
3. Choose GitHub and select `Stellar-Worm/dhaka-logistic`

**Step 2: Configure**

- Build command: `npm run build`
- Publish directory: `.next`
- Click **Deploy**

**Step 3: Custom Domain**

- Netlify Dashboard → Domain settings
- Add `www.dhakalogistic.com`

---

## Local Testing

```bash
# Development
npm run dev

# Production build (test locally)
npm run build
npm start
```

Visit `http://localhost:3000`

---

## Git Deployment Flow

1. Make changes locally
2. Test with `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "description of changes"
   git push origin main
   ```
4. Deployment service auto-deploys
5. Check deployment logs

---

## Summary

| Platform       | Recommendation    | Reason                             |
| -------------- | ----------------- | ---------------------------------- |
| **Vercel**     | ⭐ **START HERE** | Easiest, fastest, no config needed |
| **Cloudflare** | ✅ If you prefer  | Requires manual nodejs_compat flag |
| **Netlify**    | ✅ Alternative    | Good for non-Next.js projects      |

---

**Choose Vercel if you're not sure - it just works! 🚀**
