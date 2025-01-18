import { createStore } from 'zustand/vanilla';

export type OverlayState = {
    overlayVisible: boolean;
}

export type OverlayActions = {
    showOverlay: () => void,
    hideOverlay: () => void,
}

export type OverlayStore = OverlayState & OverlayActions;

export const defaultInitState: OverlayState = {
    overlayVisible: false,
}

export const createOverlayStore = (
    initState: OverlayState = defaultInitState,
) => {
    return createStore<OverlayStore>()((set) => ({
    ...initState,
        showOverlay: () => set((state) => ({ overlayVisible: true })),
        hideOverlay: () => set((state) => ({ overlayVisible: false }))
}))
}