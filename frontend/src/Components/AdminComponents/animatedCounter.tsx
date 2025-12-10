import { useEffect, useState } from "react";

export default function VoteCounter({ from, to } : { from: number, to: number}) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let frame = 0;
    const duration = 400; // animation speed
    const step = (to - from) / 20;

    const interval = setInterval(() => {
      frame++;
      setValue(prev => {
        const next = prev + step;
        if ((step > 0 && next >= to) || (step < 0 && next <= to)) {
          clearInterval(interval);
          return to;
        }
        return next;
      });
    }, duration / 20);

    return () => clearInterval(interval);
  }, [from, to]);

  return <span>{Math.round(value)}</span>;
}