'use client';
import { createStore } from 'zustand/vanilla';

export type SequenceInfo = {
  frames: number;
  spriteFile: string;
};
export type SequenceType = 'x-axis' | 'y-axis' | 'z-axis' | 'idle';
export type AnimationSequences = Record<SequenceType, SequenceInfo>;

export type ShipState = {
  frame: number;
  sequence: string;
  animationSequences: AnimationSequences;
  scale: number;
  rotation: number;
  position: number[];
};

export type ShipActions = {
  setFrame: (frame: number) => void;
  setScale: (scale: number) => void;
  setRotation: (rotation: number) => void;
  setPosition: (position: number[]) => void;
  setSequence: (sequence: SequenceType) => void;
  getSpriteSheet: () => void;
};

export type ShipStore = ShipState & ShipActions;

export const defaultShipState: ShipState = {
  frame: 0,
  sequence: 'idle',
  animationSequences: {
    'x-axis': { frames: 30, spriteFile: '/shipSpriteSheet3.png' },
    'y-axis': { frames: 30, spriteFile: '/shipSpriteSheet1.png' },
    'z-axis': { frames: 30, spriteFile: '/shipSpriteSheet2.png' },
    idle: { frames: 1, spriteFile: '/shipSpriteSheet2.png' },
  },
  scale: 0.4,
  rotation: 0,
  position: [40, 40],
};

export const createShipStore = (initState: ShipState = defaultShipState) => {
  return createStore<ShipStore>()((set, get) => ({
    ...initState,
    setFrame: (newFrame) =>
      set((state) => ({
        frame: newFrame,
      })),
    setScale: (newScale) => set((state) => ({ scale: newScale })),
    setRotation: (newRotation) => set((state) => ({ rotation: newRotation })),
    setPosition: (newPosition) => set((state) => ({ position: newPosition })),
    setSequence: (newSequence) => set((state) => ({ sequence: newSequence })),
    getSpriteSheet: () => {
      const state = get();
      return state.animationSequences[state.sequence as SequenceType];
    },
  }));
};
