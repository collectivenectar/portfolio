'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { throttle } from 'lodash';

import LaunchScene from './storyScenes/LaunchScene';
import Ship from './storyScenes/Ship';

import styles from './Story.module.css';

const Story = () => {

  const [killSwitch, setKillSwitch] = useState<boolean>(false)

  const [displayCTA, setDisplayCTA] = useState<boolean>(true)

  const [virtualScrollY, setVirtualScrollY] = useState<number>(1);
  const [storyContainerRect, setStoryContainerRect] = useState<DOMRect | null>(
    null
  );
  const [wrapperPadding, setWrapperPadding] = useState<string>('52.25%');

  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastTouchY = useRef<number>(0);

  // Wrap the logic in a function that can be throttled
  const updateScrollY = (deltaY: number) => {
   if(!killSwitch){
    setVirtualScrollY((prev) => prev + deltaY);
   }
  };

  const throttledUpdateScrollY = throttle(updateScrollY, 100);

  const handleWheel = (event: WheelEvent) => {
    if (killSwitch) return;
    event.preventDefault(); // Always prevent default immediately
      const deltaY = Math.sign(event.deltaY);
      throttledUpdateScrollY(deltaY);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (killSwitch) return;
    event.preventDefault(); // Always prevent default immediately
    if (event.touches.length === 1) {
      const touchY = event.touches[0].clientY;
      const deltaY = Math.sign(touchY - lastTouchY.current);
      lastTouchY.current = touchY;
      throttledUpdateScrollY(-deltaY);
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    if (killSwitch) return;
    if (event.touches.length === 1) {
      lastTouchY.current = event.touches[0].clientY;
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (killSwitch) return;
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

  const handleKillSwitch = () => {
    setKillSwitch((currentState) => !currentState)
  }

  useEffect(() => {
    if(killSwitch){
      containerRef.current?.removeEventListener('wheel', handleWheel);
        containerRef.current?.removeEventListener('touchstart', handleTouchStart);
        containerRef.current?.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('keydown', handleKeyDown);
    }
  }, [killSwitch, containerRef.current])

  useEffect(() => {
    const container = containerRef.current;
    if (!container || killSwitch) {
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
  }, [killSwitch]);

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
      <div className={styles.killSwitch} onClick={() => handleKillSwitch()}>
      {killSwitch ? 'Touch to start' : 'Scroll/drag to move'}
      </div>
      {!killSwitch && <LaunchScene
        scrollY={!killSwitch ? virtualScrollY : 0}
        boundingRect={storyContainerRect}
      />}
      {!killSwitch && <Ship
        StoryRect={storyContainerRect}
        scrollY={!killSwitch ? virtualScrollY : 0}
      />}
      <span className='text-white absolute -top-2 text-3xl'>{virtualScrollY}</span>
    </div>
  );
};

export default Story;
