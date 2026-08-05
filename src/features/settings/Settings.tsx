import { NavLink,Outlet } from 'react-router-dom';
const tabs=['profile','account','security','appearance','notifications','sessions'];
export function SettingsLayout(){return <div className="grid gap-6 lg:grid-cols-[220px_1fr]"><nav className="space-y-1">{tabs.map((tab)=><NavLink key={tab} to={`/settings/${tab}`} className="block rounded-lg px-3 py-2 capitalize hover:bg-slate-100 dark:hover:bg-slate-900">{tab}</NavLink>)}</nav><Outlet/></div>}
export function SettingsPage({name}:{name:string}){return <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><h1 className="text-2xl font-bold capitalize">{name}</h1><p className="mt-2 text-slate-600 dark:text-slate-300">Manage your {name} preferences for DocBit.</p></section>}
