"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./_-";

export default function SplitFlap({
  text,
  className = "",
  delay = 0,
  speed = 30,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const [display, setDisplay] = useState(() => text.replace(/\S/g, " "));
  const frame = useRef(0);

  useEffect(() => {
    let raf: number;
    const settled = new Array(text.length).fill(false);

    const step = () => {
      frame.current += 1;
      let allSettled = true;

      const next = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (settled[i]) return ch;

          const settleAt = i * 2 + 8;
          if (frame.current >= settleAt) {
            settled[i] = true;
            return ch;
          }
          allSettled = false;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      setDisplay(next);

      if (!allSettled) {
        raf = window.setTimeout(step, speed) as unknown as number;
      }
    };

    const timeout = setTimeout(() => {
      step();
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(raf);
    };
  }, [text, delay, speed]);

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  );
}
