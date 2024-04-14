'use client';
import React from 'react';
import { useOverlayStore } from '@/providers/OverlayStoreProvider';
import Overlay from './layouts/Overlay';
import styles from './Hero.module.css'

const Hero = () => {
    const { overlayVisible, showOverlay, hideOverlay } = useOverlayStore(
        (state) => state
      );
    return (
        <div>
            {overlayVisible? <Overlay
                onClose={() => hideOverlay()}
                overlayStyle={{}}
                contentStyle={{}}
            >
                
            </Overlay>: null}
            <button onClick={() => showOverlay()}>Play Reel</button>
        </div>
    )
}

export default Hero;