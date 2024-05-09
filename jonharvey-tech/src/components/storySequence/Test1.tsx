import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styles from './Test1.module.css';

import { useShipStore } from '@/providers/ShipStoreProvider';

interface OverlappingSquaresProps {
  scrollY: number;
}

const OverlappingSquares: React.FC<OverlappingSquaresProps> = ({ scrollY }) => {
  if (scrollY < 0 || scrollY > 60) return null;

  // animation scaling factor against the normalized y-axis scroll value
  const factorIncrease = 15;
  // Adjusting for range starting at 1
  const effectiveScrollY = scrollY - 1;

  // translation transforms for the y-axis
  const transformFast = `translateY(${
    effectiveScrollY * 0.2 * factorIncrease
  }%)`;
  const transformMiddle = `translateY(${
    -30 + effectiveScrollY * 0.15 * factorIncrease
  }%)`;
  const initialOffsetSlow = -50; // Initial vertical offset as percentage of viewport height
  const transformSlow = `translateY(${
    initialOffsetSlow + effectiveScrollY * 0.1 * factorIncrease
  }%)`;

  return (
    <div
      className={styles.wrapper}
      style={{ width: '100vw', height: '100vh', zIndex: 0 }}
    >
      <div
        className={styles.deepSpace}
        style={{
          transform: transformSlow,
        }}
      >
        <Image
          src='/images/deepspace.jpg'
          alt='Deep Space'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchSky}
        style={{
          transform: transformMiddle,
        }}
      >
        <Image
          src='/images/backgroundsky.png'
          alt='background sky'
          layout='fill'
          objectFit='fit'
        />
      </div>
      <div
        className={styles.launchGround}
        style={{
          transform: transformFast,
        }}
      >
        <Image
          src='/images/launchbackground.png'
          alt='Launch Background'
          layout='fill'
          objectFit='fill'
        />
      </div>
    </div>
  );
};

export default OverlappingSquares;
