# FLAMES Finder

A playful, responsive web app that brings the classic FLAMES name game to the browser. Enter two names, follow the animated elimination sequence, and reveal a lighthearted result.

<p align="center">
  <a href="https://www.flamesfinder.site/">
    <img src="public/og-image.png" alt="FLAMES Finder — classic name game" width="800" />
  </a>
</p>

<p align="center">
  <strong><a href="https://www.flamesfinder.site/">Open the live app →</a></strong>
</p>

> **Entertainment only:** FLAMES is a traditional name game, not a scientific measure of compatibility or relationship advice.

## Features

- **Classic FLAMES calculator** — compares two names and calculates the remaining-letter count.
- **Animated elimination** — watch each FLAMES category get eliminated until a result remains.
- **Result breakdown** — see the names, letter count, and elimination rounds.
- **Shareable results** — share the game with friends through WhatsApp.
- **Responsive UI** — mobile-friendly interface with animated, firefly-inspired visuals.
- **Audio experience** — theme audio controls and an in-app playlist.
- **Feedback** — an in-app feedback section.
- **Supabase integration** — stores submitted calculation records.
- **Helpful content** — game explanation and FAQs.

## Tech stack

| Area | Tools |
| --- | --- |
| Frontend | React 18, TypeScript |
| Build tool | Vite |
| Styling and UI | Tailwind CSS, shadcn/ui, Radix UI |
| Animation | Framer Motion |
| Routing | React Router |
| Data and state | TanStack Query, Supabase |
| Forms and validation | React Hook Form, Zod |
| Testing | Vitest, Testing Library |

## How the FLAMES calculation works

1. Convert both names to lowercase and remove non-English letters.
2. Cross out matching letters, matching each occurrence only once.
3. Add the number of unmatched letters from both names.
4. Use that count to eliminate letters from **F-L-A-M-E-S** in a circular sequence.
5. Continue until one category remains.

| Letter | Result |
| --- | --- |
| F | Friends |
| L | Love |
| A | Affection |
| M | Marriage |
| E | Enemy |
| S | Siblings |

The implementation is in [`src/lib/flames.ts`](src/lib/flames.ts).

## Run locally

### Requirements

- Node.js (LTS recommended)
- npm
- A Supabase project if you want calculation records to be stored

### 1. Clone and install

```bash
git clone https://github.com/MOHAMMEDFAYIZT/flamesfinder.git
cd flamesfinder
npm install
```

### 2. Configure Supabase

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Apply the SQL migration in `supabase/migrations/` to your Supabase project. The frontend uses the publishable key; protect data with appropriate Row Level Security policies.

### 3. Start the development server

```bash
npm run dev
```

### 4. Build and preview

```bash
npm run build
npm run preview
```

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build |
| `npm run build:dev` | Build using development mode |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest test suite |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run preview` | Preview the production build locally |

The repository currently includes a basic Vitest smoke test; broader calculation and component test coverage can be added as the project evolves.

## Project structure

```text
src/
├── components/       # App UI and reusable components
├── hooks/            # Custom React hooks
├── integrations/     # Supabase client and generated types
├── lib/              # FLAMES calculation and utilities
├── pages/            # Route-level pages
└── test/             # Vitest tests
public/               # Static assets, audio, favicon, SEO files
supabase/
└── migrations/       # Database schema migrations
```

## SEO and sharing

The project includes a canonical URL, robots directives, sitemap, structured WebApplication metadata, and a social preview asset at `public/og-image.png`.

## Notes

- Results are for fun only and should not be used to judge real relationships.
- The Supabase publishable key is intended for browser use. Never put a service-role key or other private credential in frontend code.
- The database migration currently permits public inserts and reads for calculation records. Review and tighten the policies if the app's data or usage requirements change.

---

**Built by [Mohammed Fayiz T](https://github.com/MOHAMMEDFAYIZT).**
