import React, { useEffect } from 'react';
import Image from 'next/image';

import styles from './LaunchScene.module.css';

import { useShipStore } from '@/providers/ShipStoreProvider';

interface LaunchSceneProps {
  scrollY: number;
  boundingRect: DOMRect | null;
}

const LaunchScene: React.FC<LaunchSceneProps> = ({ scrollY }) => {
  const { position, setPosition, setFrame, setSequence } = useShipStore((state) => state);
  
  
  useEffect(() => {
    const frameLoop = () => {
      // keep the frame inside the current sequence, 0-30 exclusive of 30
      // increment the frame each time scrollY changes
      const clampYScrollToLoop = Math.abs(scrollY % 30);
      setFrame(scrollY < 0? 0: clampYScrollToLoop);
    };
    frameLoop();
  }, [scrollY, setFrame]);


  useEffect(() => {
    // setting the animation to have the ship rotate around the y-axis
    setSequence('y-axis');
  }, [setSequence]);


  if (scrollY < 0 || scrollY > 60) return null;

  // animation scaling factor against the normalized y-axis scroll value
  const factorIncrease = 5;
  // Adjusting for range starting at 1
  const effectiveScrollY = scrollY;

  // starting positions for each layer
  const startGround = -20;
  const startSky = -48;
  const startSpace = -90

  // translation transforms for the y-axis
  const transformGround = `translateY(${
    startGround + effectiveScrollY * factorIncrease
  }%)`;
  const transformSky = `translateY(${
    startSky + effectiveScrollY * factorIncrease * 0.7
  }%)`;
  const transformSpace = `translateY(${
    startSpace + effectiveScrollY * factorIncrease * 0.5
  }%)`;
  
  return (
    <div
      className={styles.wrapper}
      style={{ zIndex: 0 }}
    >
      <div
        className={styles.deepSpace}
        style={{
          transform: transformSpace,
        }}
      >
        <Image
          src='/images/deepspace2.png'
          alt='Deep Space'
          layout='responsive'
          width={500}
          height={500}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchSky}
        style={{
          transform: transformSky,
        }}
      >
        <Image
          src='/images/backgroundsky.png'
          alt='background sky'
          layout='responsive'
          width={500}
          height={185}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchGround}
        style={{
          transform: transformGround,
        }}
      >
        <Image
          src='/images/launchbackground.png'
          alt='Launch Background'
          layout='responsive'
          width={500}
          height={333}
          objectFit='cover'
        />
      </div>
    </div>
  );
};

export default LaunchScene;
