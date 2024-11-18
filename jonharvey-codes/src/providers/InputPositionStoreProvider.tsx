'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';

import { type InputPositionStore, createInputPositionStore } from '../stores/inputPositionStore';

export const InputPositionStoreContext = createContext<StoreApi<InputPositionStore> | null>(null,)

export interface InputPositionStoreProviderProps {
    children: ReactNode;
}

export const InputPositionStoreProvider = ({
    children,
}: InputPositionStoreProviderProps) => {
    const storeRef = useRef<StoreApi<InputPositionStore>>()
    if (!storeRef.current) {
        storeRef.current = createInputPositionStore();
    }
    
    return (
        <InputPositionStoreContext.Provider value={storeRef.current}>
            {children}
        </InputPositionStoreContext.Provider>
    )
}

export const useInputPositionStore = <T,>(
    selector: (store: InputPositionStore) => T,
): T => {
    const inputPositionStoreContext = useContext(InputPositionStoreContext);
    if(!inputPositionStoreContext) {
        throw new Error(`useInputPositionStore must be used within useInputPositionStoreProvider`)
    }

    return useStore(inputPositionStoreContext, selector)
}