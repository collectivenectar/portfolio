'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { set, throttle } from 'lodash';

import LaunchScene from './storyScenes/LaunchScene';
import Ship from './storyScenes/Ship';

import styles from './Story.module.css';
const Story = () => {
  const [virtualScrollY, setVirtualScrollY] = useState<number>(0);
  const [storyContainerRect, setStoryContainerRect] = useState<DOMRect | null>(
    null
  );
  const [wrapperPadding, setWrapperPadding] = useState<string>('52.25%');

  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastTouchY = useRef<number>(0);

  // Wrap the logic in a function that can be throttled
  const updateScrollY = (deltaY: number) => {
    setVirtualScrollY((prev) => prev + deltaY);
  };

  const throttledUpdateScrollY = throttle(updateScrollY, 100);

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault(); // Always prevent default immediately
    const deltaY = Math.sign(event.deltaY);
    throttledUpdateScrollY(deltaY);
  };

  const handleTouchMove = (event: TouchEvent) => {
    event.preventDefault(); // Always prevent default immediately
    if (event.touches.length === 1) {
      const touchY = event.touches[0].clientY;
      const deltaY = Math.sign(touchY - lastTouchY.current);
      lastTouchY.current = touchY;
      throttledUpdateScrollY(-deltaY);
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    if (event.touches.length === 1) {
      lastTouchY.current = event.touches[0].clientY;
    }
  };

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

  const handleResize = useCallback(
    throttle(() => {
      const grabRectSizePos = () => {
        const heroWrapper = containerRef.current;
        if (!heroWrapper) {
          return;
        } else {
          const containerRect = heroWrapper !== null? heroWrapper.getBoundingClientRect(): null;
          if (containerRect) {
            setStoryContainerRect(containerRect);
            if(containerRect.left > 1){
              if(containerRect.left > 200){
                setWrapperPadding((`${containerRect.width * .5025}px`))
              }else{
                setWrapperPadding((`${containerRect.width * .5125}px`))
              }
            }else{
              setWrapperPadding(`52.25%`)
            }
          }
        }
      };
      grabRectSizePos();
    }, 200),
    [containerRef]
  );

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

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if(storyContainerRect === null){
      if(containerRef.current){
        setStoryContainerRect(containerRef.current?.getBoundingClientRect())
      }
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize, storyContainerRect]);

  return (
    <div
      ref={containerRef}
      className={styles.storyWrapper}
      style={{
        paddingTop: `${wrapperPadding}`,
      }}
    >
      <LaunchScene
        scrollY={virtualScrollY}
        boundingRect={storyContainerRect}
      />
      <Ship
        StoryRect={storyContainerRect}
        scrollY={virtualScrollY}
      />
    </div>
  );
};

export default Story;
