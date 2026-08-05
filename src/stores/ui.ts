import { create } from 'zustand';import type { Theme } from '@/types/domain';
interface UiState{theme:Theme;sidebarOpen:boolean;setTheme:(theme:Theme)=>void;toggleSidebar:()=>void}
export const useUiStore=create<UiState>((set)=>({theme:'system',sidebarOpen:false,setTheme:(theme)=>{document.documentElement.classList.toggle('dark',theme==='dark');set({theme});},toggleSidebar:()=>set((state)=>({sidebarOpen:!state.sidebarOpen}))}));
