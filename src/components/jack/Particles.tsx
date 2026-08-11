import { useMemo } from "react";
import { motion } from "framer-motion";

/** Slow floating luminous particles + soft light rays for the hero. */
export function Particles({ count = 26 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: 1.5 + ((i * 7) % 4),
        dur: 10 + ((i * 3) % 12),
        delay: (i % 8) * 0.7,
        drift: ((i % 5) - 2) * 22,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: "rgba(255,255,255,0.7)",
            boxShadow: "0 0 8px rgba(168,85,247,0.6)",
          }}
          animate={{ y: [0, -70, 0], x: [0, d.drift, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="absolute -top-1/3 left-1/4 h-[160%] w-[26vw] rotate-12"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.045), transparent)",
          filter: "blur(30px)",
        }}
        animate={{ x: ["-20%", "40%", "-20%"], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-1/3 right-1/4 h-[160%] w-[18vw] -rotate-6"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.07), transparent)",
          filter: "blur(36px)",
        }}
        animate={{ x: ["10%", "-30%", "10%"], opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
