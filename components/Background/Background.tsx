import { useEffect, useMemo, useState } from 'react';
import styles from './Background.module.css';

function Background() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.outerWidth);
    setHeight(window.outerHeight);
  });

  const Stars = useMemo(() => {
    const starCount = (width * height) / 1000;
    const groups: JSX.Element[][] = new Array(10).fill([]);
    const colorRange = [0, 60, 240];

    for (let i = 0; i < starCount; i++) {
      const x = Math.round(Math.random() * width);
      const y = Math.round(Math.random() * height);
      const radius = (Math.random() * 1.2).toPrecision(1);

      const hue = Math.floor(Math.random() * colorRange.length);
      const sat = Math.floor(Math.random() * 51) + 50;

      const starElement = <circle key={i} cx={x} cy={y} r={radius} fill={`hsl(${hue}, ${sat}%, 88%)`} />;
      const group = Math.floor(Math.random() * groups.length);

      groups[group].push(starElement);
    }

    groups.map((group, index) => <g key={index} className={styles.group}>{group}</g>);

    return () => <svg className={styles.stars} width={width} height={height}>{groups}</svg>;
  }, [width, height]);

  return <Stars />;
}

export default Background;
