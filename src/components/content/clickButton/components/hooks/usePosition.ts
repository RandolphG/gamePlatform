import { useLayoutEffect, useRef, useState } from "react";

/**
 * usePosition
 * Element position
 */
export const usePosition = () => {
  const ref = useRef<HTMLDivElement | undefined>(null);
  const [position, setPosition] = useState<DOMRect | undefined>();

  const handleResize = () => {
    if (ref.current) {
      const pos: DOMRect = ref.current.getBoundingClientRect();
      setPosition(pos);
    }
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref.current]);

  return [ref, position];
};
