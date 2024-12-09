'use client'

import { createContext, useContext, useRef, type ReactNode } from 'react';
import { StoreApi, useStore } from 'zustand';

import { createShipStore, type ShipStore } from '../stores/shipStore';

export const ShipStoreContext = createContext<StoreApi<ShipStore> | null>(null);

export interface ShipStoreProviderProps {
    children: ReactNode;
}

export const ShipStoreProvider = ({ children }: ShipStoreProviderProps) => {
    const storeRef = useRef<StoreApi<ShipStore>>();
    if (!storeRef.current) {
        storeRef.current = createShipStore();
    }

    return (
        <ShipStoreContext.Provider value={storeRef.current}>
            {children}
        </ShipStoreContext.Provider>
    );
}

export const useShipStore = <T,>(selector: (store: ShipStore) => T): T => {
    const shipStoreContext = useContext(ShipStoreContext);
    if (!shipStoreContext) {
        throw new Error('useShipStore must be used within a shipStoreProvider');
    }

    return useStore(shipStoreContext, selector);
}