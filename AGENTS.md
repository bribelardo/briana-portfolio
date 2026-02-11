## Bri Portfolio – Agent Guide

This document explains how this project is structured and how future AI coding agents should work inside it.

---

### Project Purpose

- **Owner**: Briana Mae Belardo  
- **Site type**: Minimal, bold personal portfolio + newsletter capture (no blog, no SaaS).  
- **Primary goals**:
  - Clearly explain who Briana is and what she does.
  - Convert visitors into subscribers for a weekly newsletter.

Tone and visual feel should remain: **confident, modern, sharp, high‑contrast, non‑corporate, non‑playful, non‑cluttered**.

---

### Tech Stack and Architecture

- **Framework**: Next.js, App Router (`app/`), TypeScript.
- **Rendering**: Static generation only (safe for Vercel static hosting).
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` and `app/globals.css`.
- **Tooling**: ESLint (`eslint.config.mjs`), TypeScript (`tsconfig.json`).
- **No backend**:
  - No API routes.
  - No databases.
  - No server actions or auth.
  - No CMS.

Agents must not introduce additional runtime services or server‑side APIs without an explicit request.

---

### Running the Project

From the project root (`bri`):

1. **Install dependencies** (required once, or when packages change):

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in a browser.

Optional production preview:

```bash
npm run build
npm start
```

#### Windows / PowerShell note

If `npm` scripts are blocked by PowerShell’s execution policy, either:

- Use **Command Prompt** instead, or  
- Run once in PowerShell:

  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```

Then re‑run `npm install` and `npm run dev`.

---

### Pages and Routing

The site must contain **exactly three pages**:

- `/` – **Home**
- `/about` – **About**
- `/projects` – **Projects**

Do not add additional pages (including blog or auth) unless explicitly requested.

#### Home (`app/page.tsx`)

- Hero section with:
  - Eyebrow positioning line.
  - Large placeholder headline.
  - Short positioning paragraph.
  - Strong red CTA button linking to the homepage newsletter section.
- About preview:
  - Short summary.
  - Link to `/about`.
- Selected projects preview:
  - 2–3 project preview cards.
  - Link to `/projects`.
- Prominent newsletter section:
  - Strong headline and description.
  - Sells the newsletter; form itself is handled by the shared `NewsletterForm` (embedded in the footer and on other pages).

#### About (`app/about/page.tsx`)

- Large page headline.
- Text‑only structured sections:
  - Background.
  - Experience.
  - Philosophy.
- Newsletter CTA section at the bottom, embedding `NewsletterForm`.

#### Projects (`app/projects/page.tsx`)

- Large page headline and framing intro.
- Grid of `ProjectCard` components:
  - Title.
  - Short description.
  - Placeholder link (`href="#"` for now).
- Newsletter CTA section at the bottom with `NewsletterForm`.

---

### Layout and Shared Components

- **Root layout** (`app/layout.tsx`):
  - Imports global styles.
  - Wraps all pages in:
    - `Navbar` (top).
    - Centered max‑width container with generous padding.
    - `Footer` (bottom).
  - Uses a column flex layout with `min-h-screen` so header and footer frame the page.

- **Navbar** (`components/Navbar.tsx`):
  - Links: `Home`, `About`, `Projects`.
  - Uppercase with strong letter‑spacing.
  - Right‑aligned red “Newsletter” button linking to `#newsletter` in the footer.

- **Footer** (`components/Footer.tsx`):
  - Contains a repeated newsletter CTA block with placeholder copy and an embedded `NewsletterForm`.
  - Bottom strip with copyright placeholder and links to `About` and `Projects`.

- **NewsletterForm** (`components/NewsletterForm.tsx`):
  - Client component.
  - Single `email` input, required, labeled for accessibility.
  - Red submit button with uppercase, letter‑spaced text.
  - On submit:
    - Prevents default.
    - Logs `"Newsletter signup placeholder:"` + email to `console`.
    - Shows a simple success state (`"Subscribed"` label).
  - No API calls, no real persistence; built to be easily swapped with a real provider later.

- **ProjectCard** (`components/ProjectCard.tsx`):
  - Displays: `title`, `description`, optional `href`.
  - Hard black border, text‑only content, optional link wrapper.
  - Minimal hover behavior: only color shift, no animations.

- **Section** (`components/Section.tsx`):
  - Utility wrapper to enforce consistent vertical spacing and section borders.
  - Optional `eyebrow`, `title`, `align` props.
  - Use this when adding new sections to preserve layout rhythm.

Agents should prefer reusing and extending these components over creating new, overlapping ones.

---

### Design System and Styling Rules

#### Color

- Allowed colors:
  - **White**: `#ffffff`
  - **Black**: `#000000`
  - **Accent red**: `#ff1744` (violent red)
- Rules:
  - Red is reserved for:
    - Primary buttons.
    - Key CTAs.
    - High‑priority links / hover states.
  - No gradients, no shadows, no additional color scales.
  - If gray is needed, it should be extremely subtle and used sparingly; avoid introducing a full gray scale by default.

#### Typography

- **Body**: Switzer (weight 400) – configured via CSS variables as `--font-body`.
- **Headlines**: Khand (weight 700) – configured as `--font-heading`.
- Usage:
  - Large hero headline on the home page.
  - Clear heading hierarchy (`h1`–`h3`) with generous spacing.
  - Navigation and buttons in uppercase with strong letter‑spacing.
  - Layout leans on typography, spacing, and contrast rather than decoration.

Note: Fonts are wired via CSS variables in `globals.css`. Actual font loading (e.g., self‑hosted or external CSS) can be added later without changing component code.

#### Layout

- Max‑width, centered content container.
- Large vertical padding between sections.
- Hard black borders between major sections for visual separation.
- Minimal navigation and simple footer.
- No dark mode, no theme toggles.

---

### UX and Behavior Constraints

- No animations beyond simple color changes on hover.
- Do not introduce:
  - Dark mode.
  - Additional pages (including blog).
  - Complex interactive components or external UI libraries.
  - Extra colors or visual effects.
- Use semantic HTML elements and maintain a proper heading hierarchy.
- Maintain high color contrast (black/white/red only).

---

### Future‑Proofing Notes

The codebase is intentionally simple but should accommodate:

- Adding a blog or long‑form writing later (e.g., additional routes under `app/`).
- Swapping in a real newsletter provider:
  - Likely by replacing the placeholder `console.log` and success state in `NewsletterForm` with an API call or provider SDK.
- Optional CMS integration at a later date (e.g., mapping projects and pages to CMS data) without changing the overall layout shell.

Agents should design any new additions so they:

- Respect the existing design system and constraints.
- Prefer configuration and content changes over new structural complexity.

---

### Agent Guidelines Summary

When modifying this project:

1. **Preserve the three‑page structure** (`/`, `/about`, `/projects`) unless the user explicitly requests more.
2. **Keep the visual system strict**: white, black, violent red; typography‑driven; no gradients, no shadows, no extra colors.
3. **Reuse existing components** (`Navbar`, `Footer`, `NewsletterForm`, `ProjectCard`, `Section`) before inventing new patterns.
4. **Keep it static and simple**: no backend, no databases, no auth, no heavy dependencies, no unnecessary complexity.
5. **Maintain accessibility basics**: labels, heading order, focusable controls, and good contrast.

If a requested change appears to conflict with these rules, prefer asking for clarification or isolating the new behavior so the core portfolio experience remains minimal, bold, and intentional.

