import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ end, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rate = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easeRate = rate * (2 - rate);
      setCount(Math.floor(easeRate * end));

      if (rate < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span className="font-display font-bold text-4xl lg:text-5xl text-gold-500 tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
