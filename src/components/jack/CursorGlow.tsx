import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Soft ambient light that follows the cursor. Purely decorative overlay. */
export function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 60, damping: 25, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 60, damping: 25, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let cx = 0;
    let cy = 0;
    const flush = () => {
      frame = 0;
      x.set(cx);
      y.set(cy);
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
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[60] hidden md:block"
      style={{
        left: sx,
        top: sy,
        width: 520,
        height: 520,
        marginLeft: -260,
        marginTop: -260,
        borderRadius: "9999px",
        background:
          "radial-gradient(circle, rgba(168,85,247,0.10), rgba(255,255,255,0.03) 35%, transparent 65%)",
        filter: "blur(12px)",
        mixBlendMode: "screen",
      }}
    />
  );
}
