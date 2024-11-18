import { createStore } from 'zustand/vanilla';

export type inputPositionState = {
    mouseX: number;
    mouseY: number;
    scrollX: number;
    scrollY: number;
};

export type inputPositionActions = {
    setMousePosition: (x: number, y: number) => void;
    setScrollPosition: (x: number, y: number) => void;
};

export type InputPositionStore = inputPositionState & inputPositionActions;

export const defaultInitState: inputPositionState = {
    mouseX: 0,
    mouseY: 0,
    scrollX: 0,
    scrollY: 0,
};

export const createInputPositionStore = (initState: inputPositionState = defaultInitState) => {
    return createStore<InputPositionStore>()((set) => ({
        ...initState,
        setMousePosition: (x, y) => set({ mouseX: x, mouseY: y }),
        setScrollPosition: (x, y) => set({ scrollX: x, scrollY: y })
    }));
};