import React, { useEffect } from 'react';
import Image from 'next/image';

import styles from './LaunchScene.module.css';

import { useShipStore } from '@/providers/ShipStoreProvider';
import moveShip from '../../util/moveShip';

interface LaunchSceneProps {
  scrollY: number;
  boundingRect: DOMRect | null;
}

// Set the number of frames to loop in this scene alone
const sceneFrames: number[] = [0, 120];

const LaunchScene: React.FC<LaunchSceneProps> = ({ scrollY, boundingRect }) => {
  const { setPosition, setFrame, setSequence } = useShipStore((state) => state);

  // Takes the ship components position as a percentage of vw and vh, converts to actual pixel
  // values from the parent containers dimensions
  const normalizeToRect = (
    position: number[],
    boundingRect: DOMRect | null
  ) => {
    // if parent rect doesn't exist yet, return absolute position at initial
    if (!boundingRect) return [0, 0];

    const normalizedX = (position[0] * boundingRect.width) / 100;
    const normalizedY = (position[1] * boundingRect.height) / 100;
    return [normalizedX, normalizedY];
  };

  useEffect(() => {
    if (scrollY >= sceneFrames[0] && scrollY <= sceneFrames[1]) {
      // Clamp frame number to the spritesheet frame number
      const frameLoop = () => {
        const clampYScrollToLoop = Math.abs(scrollY % 30);
        setFrame(scrollY < 0 ? 0 : clampYScrollToLoop);
      };
      frameLoop();
      // Set up params for moveShip interpolation of ship component position
      const sceneParams = {
        start: normalizeToRect([45, 0], boundingRect),
        destinations: [
          normalizeToRect([45, -60], boundingRect),
          normalizeToRect([45, -80], boundingRect),
        ],
        weights: [30, 70],
        scrollY,
        sceneScrollRange: sceneFrames,
        setPositionHook: setPosition,
      };
      moveShip(sceneParams);
    }
  }, [scrollY, setFrame]);

  useEffect(() => {
    // setting the animation for this scene to have the ship use the spritesheet for rotating
    // the ship around its y-axis
    setSequence('y-axis');
  }, [setSequence]);

  // keeping the component rendered only when scroll position is within this scenes range
  if (scrollY < sceneFrames[0] || scrollY > sceneFrames[1]) return null;

  // animation scaling factor against the normalized y-axis scroll value
  const factorIncrease = 10;
  // Adjusting for range starting at 1
  const effectiveScrollY = scrollY;

  // translation transforms for the y-axis
  const animateHTMLY = (start: number, speed: number) => {
    return `translateY(${start + effectiveScrollY * factorIncrease * speed}%)`;
  };
  // translation transforms for the x-axis
  const animateHTMLX = (start: number, speed: number) => {
    return `translateX(${start + effectiveScrollY * speed}%)`;
  };

  // JS to CSS transform strings
  const transformGround0 = animateHTMLY(58, 1);
  const transformGround1 = animateHTMLY(-20, 0.9);
  const transformGround2 = animateHTMLY(-15, 0.7);
  const transformGround3 = animateHTMLY(-35, 0.5);
  const transformSky = animateHTMLY(-92, 0.3);
  const transformClouds = `${animateHTMLY(-53, 0.65)} ${animateHTMLX(0, -0.2)}`;
  const transformCloudBank1 = `${animateHTMLY(-120, 0.45)} ${animateHTMLX(15, -0.3)}`;
  const transformCloudBank2 = `${animateHTMLY(-120, 0.44)} ${animateHTMLX(0, -0.4)}`;
  const transformCloudBank3 = `${animateHTMLY(-120, 0.43)} ${animateHTMLX(0, 0.3)}`;
  const transformCloudBank4 = `${animateHTMLY(-120, 0.42)} ${animateHTMLX(0, -0.3)}`;
  const transformCloudBank5 = `${animateHTMLY(-120, 0.41)} ${animateHTMLX(0, 0.3)}`;
  const transformGlobeSpace = animateHTMLY(-180, 0.5);
  const transformSpace = animateHTMLY(-220, 0.4);

  const opacityStartScroll = 25;
  const opacityEndScroll = 33;

  const calculateOpacity = (effectiveScrollY: number) => {
    if (scrollY < opacityStartScroll) return 1; // Full opacity before starting point
    if (scrollY > opacityEndScroll) return 0; // No opacity past end point
    // Gradual decrease from 1 to 0 between start and end points
    return (
      1 -
      (scrollY - opacityStartScroll) / (opacityEndScroll - opacityStartScroll)
    );
  };
  
  const opacityCloudBank = calculateOpacity(effectiveScrollY);

  return (
    <div
      className={styles.wrapper}
      style={{ zIndex: 0 }}
    >
      <div
        className={styles.deepSpace}
        style={{
          transform: transformSpace,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image
          src='/images/deepspace2.png'
          alt='background sky'
          layout='responsive'
          width={500}
          height={500}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchGlobeSpace}
        style={{
          transform: transformGlobeSpace,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image
          src='/images/globe-space.png'
          alt='background sky'
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
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image
          src='/images/launch-sky.png'
          alt='background sky'
          layout='responsive'
          width={500}
          height={676}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchCloudBank}
        style={{
          transform: transformCloudBank1,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image
          src='/images/cloudbank1.png'
          alt='background clouds'
          layout='responsive'
          width={500}
          height={500}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchCloudBank}
        style={{
          transform: transformCloudBank2,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image
          src='/images/cloudbank2.png'
          alt='background clouds'
          layout='responsive'
          width={500}
          height={500}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchCloudBank}
        style={{
          transform: transformCloudBank3,
          transition: 'transform 0.3s ease-out',
          opacity: opacityCloudBank,
        }}
      >
        <Image
          src='/images/cloudbank3.png'
          alt='background clouds'
          layout='responsive'
          width={500}
          height={500}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchCloudBank}
        style={{
          transform: transformCloudBank4,
          transition: 'transform 0.3s ease-out',
          opacity: opacityCloudBank,
        }}
      >
        <Image
          src='/images/cloudbank4.png'
          alt='background clouds'
          layout='responsive'
          width={500}
          height={500}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchCloudBank}
        style={{
          transform: transformCloudBank5,
          transition: 'transform 0.3s ease-out',
          opacity: opacityCloudBank,
        }}
      >
        <Image
          src='/images/cloudbank5.png'
          alt='background clouds'
          layout='responsive'
          width={500}
          height={500}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchClouds}
        style={{
          transform: transformClouds,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image
          src='/images/launch-cloud.png'
          alt='background clouds'
          layout='responsive'
          width={500}
          height={413}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchGround3}
        style={{
          transform: transformGround3,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image
          src='/images/launch-3.png'
          alt='foreground-2'
          layout='responsive'
          width={500}
          height={316}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchGround2}
        style={{
          transform: transformGround2,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image
          src='/images/launch-2.png'
          alt='foreground-1'
          layout='responsive'
          width={500}
          height={290}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchGround1}
        style={{
          transform: transformGround1,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image
          src='/images/launch-1.png'
          alt='foreground-0'
          layout='responsive'
          width={500}
          height={300}
          objectFit='cover'
        />
      </div>
      <div
        className={styles.launchGround0}
        style={{
          transform: transformGround0,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image
          src='/images/launch-0.png'
          alt='Launch pad'
          layout='responsive'
          width={500}
          height={113}
          objectFit='cover'
        />
      </div>
    </div>
  );
};

export default LaunchScene;