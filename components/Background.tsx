import { CSSProperties, useMemo } from 'react';
import styles from './Background.module.css';

const Background = () => {
  const starCount = Math.ceil((window.outerWidth + window.outerHeight) / 4);
  const maxStarRadius = 1.2;
  const colorRange = [0, 60, 240];
  const defaultAnimationTime = 300;

  const stars = useMemo(() => {
    return new Array(starCount).fill(0).map((_, index) => {
      const x = Math.round(Math.random() * window.outerWidth);
      const y = Math.round(Math.random() * window.outerHeight);
      const radius = (Math.random() * maxStarRadius).toPrecision(1);
  
      const hue = colorRange[Math.floor(Math.random() * colorRange.length)];
      const sat = Math.floor(Math.random() * 50) + 50;
  
      const animationTime = Math.floor(Math.random() * defaultAnimationTime) + defaultAnimationTime / 2;
      const directionX = Math.floor(Math.random() * window.outerWidth / 2);
      const directionY = Math.floor(Math.random() * window.outerHeight / 2);
  
      const starElementStyle = {
        '--animation-time': `${animationTime}s`,
        '--direction-x': `-${directionX}px`,
        '--direction-y': `-${directionY}px`,
      };
  
      return (
        <circle
          key={index}
          className={styles.star}
          style={starElementStyle as CSSProperties}
          cx={x}
          cy={y}
          r={radius}
          fill={`hsl(${hue}, ${sat}%, 88%)`}
        />
      );
    });
  }, []);

  return (
    <svg className={styles.background} width={window.outerWidth} height={window.outerHeight}>
      { stars }
    </svg>
  );
};

export default Background;
