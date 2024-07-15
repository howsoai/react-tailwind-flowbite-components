import type { FC } from "react";
import { useCallback, useEffect, useState, useRef } from "react";
import { TextScrambleAnimation } from "./TextScrambleAnimation";

export interface TextScrambleAnimProps {
  texts: string[];
  delay?: number;
  loop?: boolean;
  characters?: string;
  className?: string;
}

export const TextScramble: FC<TextScrambleAnimProps> = ({
  texts,
  characters,
  className,
  loop = false,
  delay = 2000,
}) => {
  const fxRef = useRef<TextScrambleAnimation>();
  const timeoutRef = useRef<number>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reset on prop change
    setIndex(0);
    return () => window.clearTimeout(timeoutRef.current);
  }, [texts]);

  const ref = useCallback(
    async (node: HTMLSpanElement | null) => {
      if (node !== null && texts.length) {
        if (fxRef.current == null) {
          fxRef.current = new TextScrambleAnimation(node, characters);
        }
        await fxRef.current.setText(texts[index]);
        let nextIndex = index + 1;
        if (loop && nextIndex >= texts.length) nextIndex = 0;
        if (nextIndex < texts.length) {
          timeoutRef.current = window.setTimeout(
            () => setIndex(nextIndex),
            delay,
          );
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [index],
  );

  return <span role="status" className={className} ref={ref} />;
};
