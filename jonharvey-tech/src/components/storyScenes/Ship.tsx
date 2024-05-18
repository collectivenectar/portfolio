import React, { useState, useEffect, useCallback } from 'react';
import { throttle } from 'lodash';
import { useShipStore } from '@/providers/ShipStoreProvider';
import styles from './Ship.module.css';
import Story from '../Story';

export type ShipProps = {
  scrollPosition: number;
  StoryRect: DOMRect | null;
};

const Ship: React.FC<ShipProps> = (props) => {
  const { scrollPosition, StoryRect } = props;

  const {
    position,
    scale,
    rotation,
    frame,
    sequence,
    getSpriteSheet,
    setScale,
  } = useShipStore((state) => state);

  const frameWidth = 270; // Example: 100px wide
  const frameHeight = 270; // Example: 100px tall

  // Number of frames in the sprite sheet
  const numFrames = 30; // Example: 10 frames
  const maxHeight = StoryRect? StoryRect.width * 0.5225: 0; // 52.25% of the viewport width
  const maxWidth = StoryRect? StoryRect.height * 1.7778: 0; // 177.78% of the viewport height

  // Calculate the aspect ratio from padding-top
  const aspectRatio = 100 / 52.25; // Derived from padding-top

  // Determine scaling factor based on minimum applicable dimension
  const scalingFactor = Math.min(maxHeight / frameHeight, maxWidth / (frameWidth * aspectRatio)) / 4;
  // Calculating scaled dimensions
  const scaledFrameWidth = frameWidth * scalingFactor;
  const scaledFrameHeight = frameHeight * scalingFactor;
  const scaledSheetWidth = frameWidth * numFrames * scalingFactor;
  const scaledSheetHeight = frameHeight * scalingFactor;
  const backgroundPositionX = -(frame - 1) * scaledFrameWidth;
  const backgroundPosition = `${backgroundPositionX}px 0px`;
  const rotateSprite = `rotate(${rotation}deg)`;

  const [spriteSheet, setSpriteSheet] = useState<string>('');

  useEffect(() => {
    setSpriteSheet(getSpriteSheet());
  }, [sequence]);
  return (
    <div
      className={styles.spriteContainer}
      style={{
        transform: `translate(${position[0]}%, ${position[1]}%)`,
        willChange: 'transform',
        minHeight: `100%`,
        maxHeight: `100%`
      }}
    >
      <div className={styles.scaleContainer}>
        <div
          className={styles.spriteAnimation}
          style={{
            backgroundImage: `url(./images${spriteSheet})`,
            backgroundSize: `${scaledSheetWidth}px ${scaledSheetHeight}px`,
            width: `${scaledFrameWidth}px`,
            height: `${scaledFrameHeight}px`,
            backgroundPosition,
            transform: rotateSprite,
            willChange: 'background-position, transform',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Ship;
