import type { Config } from 'tailwindcss';
export default { darkMode: 'class', content: ['./index.html','./src/**/*.{ts,tsx}'], theme: { extend: { colors: { brand: {50:'#eef8ff',100:'#d9efff',500:'#1688e8',600:'#096dcc',700:'#0758a5'} } } }, plugins: [] } satisfies Config;
