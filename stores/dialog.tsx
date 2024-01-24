import { create } from 'zustand'

type DialogStore = {
    component: any,
    size: any,
    show: (component: any, size?: string) => void,
    hide: () => void
}

export const useDialogStore = create<DialogStore>((set) => ({
    component: undefined,
    size: "lg",
    show: (component: any, size?: string) => set({ component, size: size ?? "lg" }),
    hide: () => set({ component: undefined }),
}));