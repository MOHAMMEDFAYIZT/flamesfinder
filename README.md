# FLAMES Finder

A playful, responsive web app that recreates the classic FLAMES name game. Enter two names, follow the animated elimination sequence, and reveal a lighthearted result.

**Live app:** https://www.flamesfinder.site/

> FLAMES is an entertainment game, not a scientific measure of compatibility or relationship advice.

## Features

- Classic FLAMES calculation implemented in TypeScript.
- Animated elimination sequence and result presentation.
- Responsive interface with a firefly-inspired visual background.
- Theme audio controls and an in-app playlist.
- Feedback section.
- Supabase integration to record submitted calculations.
- Explanatory content and FAQs describing the game and its rules.

## Tech stack

- React and TypeScript
- Vite
- Tailwind CSS and shadcn/ui
- Supabase
- Framer Motion
- React Router
- TanStack Query
- Vitest and Testing Library dependencies for test development

## How the calculation works

1. Normalize the two names.
2. Remove matching letters from both names.
3. Count the letters that remain.
4. Use that count to eliminate letters from F-L-A-M-E-S until one category remains.

The six categories are Friends, Love, Affection, Marriage, Enemy, and Siblings.

## Run locally

### Requirements

- Node.js
- npm
- A Supabase project if you want to use the calculation-storage integration

### Setup

```bash
git clone https://github.com/MOHAMMEDFAYIZT/flamesfinder.git
cd flamesfinder
npm install
```

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Then run:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the configured test command:

```bash
npm test
```

## Notes

- Calculation results are intended for fun only.
- Supabase is used by the app to store calculation records. Configure the required project and database table before expecting that integration to work locally.
- Never commit private credentials. The Supabase publishable key is designed for client use; database access must still be protected by appropriate Supabase policies.

---

**Developer:** [Mohammed Fayiz T](https://github.com/MOHAMMEDFAYIZT)
