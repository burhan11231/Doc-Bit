import type { ButtonHTMLAttributes } from 'react';
export function Button({className='',...props}:ButtonHTMLAttributes<HTMLButtonElement>){return <button className={`rounded-xl bg-brand-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-50 ${className}`} {...props}/>;}
