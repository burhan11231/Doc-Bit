# DocBit

DocBit is a Phase 1 SaaS foundation using the intended React + TypeScript + Vite architecture. The app uses React Router for routing, TanStack Query for server state, Framer Motion for landing-page animation, Tailwind CSS, Zustand for UI state, Zod and React Hook Form for auth forms, and `@supabase/supabase-js` for Supabase Auth/PostgreSQL access.

## Required clean-environment validation

Run these commands against the official npm registry from a machine or CI runner with registry access:

```bash
rm -rf node_modules package-lock.json
npm install --registry=https://registry.npmjs.org
npm run typecheck
npm run lint
npm run build
npm run dev
```

`npm run build` executes `vite build`.

## Manual app verification

After configuring Supabase and starting `npm run dev`, verify:

- login works
- signup works
- Google OAuth works
- protected routes redirect unauthenticated users
- dashboard loads for authenticated users
- settings load for authenticated users

## Supabase verification

Apply `supabase/migrations/0001_initial_schema.sql` to a real Supabase project and verify:

- RLS is enabled for all application tables
- triggers create profiles and update timestamps
- RPC functions execute with authenticated users
- policies enforce workspace/member permissions
- Supabase Auth email and OAuth flows are configured with the correct redirect URLs

## Environment

Copy `.env.example` to `.env` and configure Supabase, Resend, Backblaze B2, Upstash Redis, PostHog, Sentry, Razorpay, and Netlify values before connecting live services.

## Architecture

- `src/main.tsx` is the React browser entry point.
- `src/app/App.tsx` owns the React Router route tree and QueryClient provider.
- `src/components` contains reusable UI and layout components.
- `src/features/auth` contains signup, login, Google OAuth, forgot-password, and reset-password forms.
- `src/features/dashboard` contains the protected dashboard overview.
- `src/features/settings` contains the protected settings layout and sections.
- `src/lib` contains environment, Supabase, and error utilities.
- `src/services` contains provider-facing service adapters.
- `src/stores` contains reusable client state.
- `supabase/migrations` contains ordered database migrations.
- `netlify/functions` contains serverless functions.
