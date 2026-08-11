import { useEffect } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

/**
 * Normalized pointer position (-1..1) with spring smoothing,
 * for layered parallax effects.
 */
export function useMouseParallax(strength = 1): { x: MotionValue<number>; y: MotionValue<number> } {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 70, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 70, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let cx = 0;
    let cy = 0;

    const flush = () => {
      frame = 0;
      x.set(((cx / window.innerWidth) * 2 - 1) * strength);
      y.set(((cy / window.innerHeight) * 2 - 1) * strength);
    };

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (!frame) frame = requestAnimationFrame(flush);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [x, y, strength]);

  return { x: sx, y: sy };
}
