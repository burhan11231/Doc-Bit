import { z } from 'zod';
const schema=z.object({VITE_SUPABASE_URL:z.string().url(),VITE_SUPABASE_ANON_KEY:z.string().min(1),VITE_POSTHOG_KEY:z.string().optional(),VITE_POSTHOG_HOST:z.string().url().optional(),VITE_SENTRY_DSN:z.string().optional()});
export const env=schema.parse(import.meta.env);
