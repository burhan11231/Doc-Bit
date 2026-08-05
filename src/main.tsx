import * as Sentry from '@sentry/react';import posthog from 'posthog-js';import React from 'react';import ReactDOM from 'react-dom/client';import { App } from '@/app/App';import { env } from '@/lib/env';import '@/styles/globals.css';
if(env.VITE_SENTRY_DSN)Sentry.init({dsn:env.VITE_SENTRY_DSN,tracesSampleRate:0.2});if(env.VITE_POSTHOG_KEY)posthog.init(env.VITE_POSTHOG_KEY,{api_host:env.VITE_POSTHOG_HOST});
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
