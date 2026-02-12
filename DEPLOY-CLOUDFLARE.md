# Deploy to Cloudflare Pages

This project is configured for **static export** (`output: "export"` in `next.config.ts`). Each `npm run build` produces a static site in the `out/` folder, which you can deploy to Cloudflare Pages.

---

## Option 1: Connect GitHub (recommended)

1. **Push your code to GitHub** (you already have the repo connected).

2. **Log in to Cloudflare Dashboard**  
   Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.

3. **Select your repository**  
   Choose **bribelardo/briana-portfolio** (or your repo name). Authorize Cloudflare if prompted.

4. **Configure the build:**
   - **Framework preset:** None (or “Next.js (Static)” if listed)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** leave blank (project root)
   - **Environment variables:** none required

5. **Save and Deploy**  
   Cloudflare will run `npm run build`, then deploy the contents of `out/`. Your site will get a URL like `https://<project-name>.pages.dev`.

6. **Later updates**  
   Push to the `main` branch on GitHub; Cloudflare will automatically rebuild and redeploy.

---

## Option 2: Deploy with Wrangler (CLI)

1. **Install Wrangler** (one time):
   ```bash
   npm install -g wrangler
   ```

2. **Log in to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build the site:**
   ```bash
   npm run build
   ```

4. **Deploy the `out` folder:**
   ```bash
   wrangler pages deploy out --project-name=briana-portfolio
   ```
   Use any `--project-name` you prefer. Follow the prompts to create the project if it doesn’t exist.

---

## Build output

- **Build command:** `npm run build`  
- **Output directory:** `out`  
- The `out/` folder contains static HTML, CSS, and JS. No Node server is used in production.

---

## Custom domain (optional)

In the Cloudflare Pages project: **Custom domains** → **Set up a custom domain** and follow the steps to add your own domain.
