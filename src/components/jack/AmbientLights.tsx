import { motion } from "framer-motion";

/** Slow-drifting ambient light blobs. Decorative, non-interactive. */
export function AmbientLights({ className = "" }: { className?: string }) {
  const blobs = [
    { size: 520, x: "8%", y: "12%", c: "rgba(168,85,247,0.10)", d: 22 },
    { size: 420, x: "78%", y: "38%", c: "rgba(255,255,255,0.045)", d: 28 },
    { size: 620, x: "42%", y: "82%", c: "rgba(124,58,237,0.08)", d: 34 },
  ];
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            background: `radial-gradient(circle, ${b.c}, transparent 65%)`,
            filter: "blur(40px)",
          }}
          animate={{ x: [0, 40, -30, 0], y: [0, -35, 25, 0], opacity: [0.55, 0.9, 0.6, 0.55] }}
          transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
