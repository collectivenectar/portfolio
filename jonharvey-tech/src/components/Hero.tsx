'use client';
import React, { useState, useEffect, useRef } from 'react';
import { throttle } from 'lodash';

import Test1 from './storySequence/Test1';
import Test2 from './storySequence/Test2';
import Ship from '../components/storySequence/Ship';

import styles from './Hero.module.css';
const Hero = () => {
  const [virtualScrollY, setVirtualScrollY] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastTouchY = useRef<number>(0);

  const handleWheel = throttle((event: WheelEvent) => {
    event.preventDefault();
    const deltaY = Math.sign(event.deltaY);
    setVirtualScrollY((prev) => prev + deltaY);
  }, 100);

  const handleTouchStart = (event: TouchEvent) => {
    if (event.touches.length === 1) {
      lastTouchY.current = event.touches[0].clientY;
    }
  };

  const handleTouchMove = throttle((event: TouchEvent) => {
    if (event.touches.length === 1) {
      event.preventDefault();
      const touchY = event.touches[0].clientY;
      const deltaY = Math.sign(touchY - lastTouchY.current);
      lastTouchY.current = touchY;
      setVirtualScrollY((prev) => prev - deltaY);
    }
  }, 100);

  const handleKeyDown = (event: KeyboardEvent) => {
    let deltaY = 0;
    switch (event.key) {
      case 'ArrowUp':
        deltaY = -1;
        event.preventDefault();
        break;
      case 'ArrowDown':
        deltaY = 1;
        event.preventDefault();
        break;
      case 'PageUp':
        deltaY = -10;
        event.preventDefault();
        break;
      case 'PageDown':
        deltaY = 10;
        event.preventDefault();
        break;
      default:
        return;
    }
    setVirtualScrollY((prev) => prev + deltaY);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    });
    container.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className={styles.heroWrapper}
    >
      <Test1 scrollY={virtualScrollY} />
      {/* <Test2 
        scrollY={virtualScrollY}
      /> */}
      <Ship scrollPosition={virtualScrollY} />
    </div>
  );
};

export default Hero;
