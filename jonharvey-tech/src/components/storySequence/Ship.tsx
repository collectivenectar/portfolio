import { useShipStore } from '@/providers/ShipStoreProvider';

const frameWidth = 270;
const frameHeight = 270;

export type shipProps = {
  scrollPosition: number;
};

const Ship: React.FC<shipProps> = (props) => {
  const { position, scale, rotation, frame, getSpriteSheet } = useShipStore(
    (state) => state
  );

  const backgroundPositionX = -(frame - 1) * frameWidth;
  const backgroundPosition = `${backgroundPositionX}px 0px`;
  const transform = `translate(${position[0]}vw, ${position[1]}vh) scale(${scale}) rotate(${rotation}deg)`;

  return (
    <div
      id='sprite-animation'
      style={{
        backgroundImage: `url(./images${getSpriteSheet()})`,
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        backgroundPosition,
        transform,
        willChange: 'background-position, transform',
      }}
    ></div>
  );
};

export default Ship;
