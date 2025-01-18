import React, { useState, useEffect } from "react";
import { useShipStore } from "../../providers/ShipStoreProvider";
import styles from "./Ship.module.css";

export type ShipProps = {
  scrollY: number;
  StoryRect: DOMRect | null;
};

const Ship: React.FC<ShipProps> = (props) => {
  const { StoryRect, scrollY } = props;

  const { position, rotation, frame, sequence, getSpriteSheet } = useShipStore(
    (state) => state
  );

  // Ship spritesheet frame size in pixels
  const frameWidth = 270;
  const frameHeight = 270;

  // Spritesheet length in frames
  const numFrames = 30;

  // Normalizing vars pulled from parent container
  const maxHeight = StoryRect ? StoryRect.width * 0.5225 : 0;
  const maxWidth = StoryRect ? StoryRect.height * 1.7778 : 0;

  // Fixed aspect ratio of parent container
  const aspectRatio = 100 / 52.25;

  // Automatic scaling var for ship spritesheet frames, aka makes it responsive
  const scalingFactor =
    Math.min(maxHeight / frameHeight, maxWidth / (frameWidth * aspectRatio)) /
    4;

  // Calculations for scaling the ship frame size relative to container dimensions
  const scaledFrameWidth = frameWidth * scalingFactor;
  const scaledFrameHeight = frameHeight * scalingFactor;
  const scaledSheetWidth = frameWidth * numFrames * scalingFactor;
  const scaledSheetHeight = frameHeight * scalingFactor;

  // Animation via moving spritesheet position
  const backgroundPositionX = -(frame - 1) * scaledFrameWidth;
  const backgroundPosition = `${backgroundPositionX}px 0px`;

  // Var for rotating sprite frame around the containers center point
  const rotateSprite = `rotate(${rotation}deg)`;

  const [spriteSheet, setSpriteSheet] = useState<string>("");

  useEffect(() => {
    setSpriteSheet(getSpriteSheet());
  }, [sequence]);
  if (scrollY < 0) {
    return null;
  }
  if (scrollY >= 66) {
    return;
  } else {
    return (
      <div
        className={styles.spriteContainer}
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 0.3s ease-out",
          willChange: "transform",
          minHeight: `100%`,
          maxHeight: `100%`,
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
              willChange: "background-position, transform",
            }}
          ></div>
        </div>
      </div>
    );
  }
};

export default Ship;
