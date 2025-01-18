import { useState, useEffect } from "react";
import styles from "./MorphingPolygon.module.css";

// Define some preset shapes
export const POLYGON_PRESETS = {
  STAR: [
    [90, 5],
    [100, 20],
    [95, 40],
    [80, 60],
    [65, 75],
    [45, 80],
    [30, 75],
    [20, 60],
    [10, 40],
    [15, 20],
    [30, 5],
  ],
  TRIANGLE: [
    [50, 0],
    [100, 100],
    [0, 100],
  ],
  DIAMOND: [
    [50, 0],
    [100, 50],
    [50, 100],
    [0, 50],
  ],
  HEXAGON: [
    [50, 0],
    [100, 25],
    [100, 75],
    [50, 100],
    [0, 75],
    [0, 25],
  ],
  WAVE: [
    [0, 50],
    [20, 30],
    [40, 50],
    [60, 70],
    [80, 50],
    [100, 30],
    [100, 100],
    [0, 100],
  ],
} as const;

interface MorphingPolygonProps {
  className?: string;
  style?: React.CSSProperties;
  basePoints?: [number, number][];
  morphAmount?: number; // How much the points can move (default 5)
  morphSpeed?: number; // Milliseconds between morphs (default 1000)
}

export default function MorphingPolygon({
  className = "",
  style = {},
  basePoints = POLYGON_PRESETS.STAR as unknown as [number, number][],
  morphAmount = 5,
  morphSpeed = 1000,
}: MorphingPolygonProps) {
  const [polygonPoints, setPolygonPoints] = useState<string>(
    basePoints.map(([x, y]) => `${x}% ${y}%`).join(", ")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoints = basePoints
        .map(([x, y]) => {
          const randomX = x + (Math.random() - 0.5) * morphAmount;
          const randomY = y + (Math.random() - 0.5) * morphAmount;
          return `${randomX}% ${randomY}%`;
        })
        .join(", ");

      setPolygonPoints(newPoints);
    }, morphSpeed);

    return () => clearInterval(interval);
  }, [basePoints, morphAmount, morphSpeed]);

  return (
    <div
      style={{
        clipPath: `polygon(${polygonPoints})`,
        ...style,
      }}
      className={`${styles.morphingGradient} ${className}`}
    />
  );
}
