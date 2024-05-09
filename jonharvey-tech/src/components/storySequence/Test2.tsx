import React from 'react';
import styles from './Test2.module.css';
interface RoundDivAnimationProps {
  scrollY: number;
}

const RoundDivAnimation: React.FC<RoundDivAnimationProps> = ({ scrollY }) => {
  if (scrollY < 300 || scrollY > 600) return null;

  const effectiveScrollY = scrollY - 300;
  const percentMoved = effectiveScrollY / 300;
  const translateX = -50 * percentMoved; 
  const transform = `translateX(${translateX}%) translateY(${effectiveScrollY}px)`;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.content}
        style={{ transform }}
      />
    </div>
  );
};

export default RoundDivAnimation;
