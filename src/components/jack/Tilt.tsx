import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  max?: number;
  scale?: number;
  glare?: boolean;
}

/**
 * Wraps children in a perspective container that tilts toward the cursor.
 * Layout-neutral: renders a plain block element around the existing child.
 */
export function Tilt({ children, className, style, max = 8, scale = 1.015, glare = true }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 150, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 150, damping: 18, mass: 0.5 });

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(280px circle at ${gx} ${gy}, rgba(255,255,255,0.08), transparent 60%)`,
  );

  const frame = useRef(0);
  const point = useRef({ x: 0, y: 0 });

  useEffect(() => () => { if (frame.current) cancelAnimationFrame(frame.current); }, []);

  const onMove = (e: React.MouseEvent) => {
    point.current = { x: e.clientX, y: e.clientY };
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set((point.current.x - r.left) / r.width);
      my.set((point.current.y - r.top) / r.height);
    });
  };
  const onLeave = () => {
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = 0;
    }
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className} style={{ perspective: 1000, ...style }}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative h-full [&>*]:h-full"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>
    </div>
  );
}
