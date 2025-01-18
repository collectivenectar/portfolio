"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

import { type OverlayStore, createOverlayStore } from "../stores/overlayStore";

export const OverlayStoreContext = createContext<StoreApi<OverlayStore> | null>(
  null
);

export interface OverlayStoreProviderProps {
  children: ReactNode;
}

export const OverlayStoreProvider = ({
  children,
}: OverlayStoreProviderProps) => {
  const storeRef = useRef<StoreApi<OverlayStore>>();
  if (!storeRef.current) {
    storeRef.current = createOverlayStore();
  }

  return (
    <OverlayStoreContext.Provider value={storeRef.current}>
      {children}
    </OverlayStoreContext.Provider>
  );
};

export const useOverlayStore = <T,>(
  selector: (store: OverlayStore) => T
): T => {
  const overlayStoreContext = useContext(OverlayStoreContext);
  if (!overlayStoreContext) {
    throw new Error(
      `useOverlayStore must be used within useOverlayStoreProvider`
    );
  }

  return useStore(overlayStoreContext, selector);
};
