import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";
import { Download } from "lucide-react";
import { Tilt } from "./Tilt";
import { AmbientLights } from "./AmbientLights";

const STATS = [
  { label: "Projects Completed", value: "5+" },
  { label: "Technologies", value: "15+" },
  { label: "Internship", value: "1" },
  { label: "Learning", value: "Every Day", isText: true },
];

function Counter({ to, isText }: { to: string; isText?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [v, setV] = useState(isText ? to : "0");
  useEffect(() => {
    if (!inView || isText) { if (isText) setV(to); return; }
    const num = parseInt(to);
    const suffix = to.replace(String(num), "");
    let i = 0;
    const id = setInterval(() => {
      i += Math.max(1, Math.round(num / 20));
      if (i >= num) { setV(num + suffix); clearInterval(id); }
      else setV(i + suffix);
    }, 40);
    return () => clearInterval(id);
  }, [inView, to, isText]);
  return <span ref={ref}>{v}</span>;
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-5 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.04), transparent 60%)" }} />
      <AmbientLights />
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn y={40} className="text-center mb-14">
          <p className="text-white/50 uppercase tracking-[0.4em] text-xs mb-4">About</p>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}>
            About Me
          </h2>
        </FadeIn>

        <FadeIn y={30} delay={0.15} className="max-w-3xl mx-auto text-center">
          <p className="text-white/75 font-light leading-relaxed" style={{ fontSize: "clamp(1rem, 1.6vw, 1.35rem)" }}>
            I&apos;m <span className="accent-gradient font-semibold">Om Sharma</span>, a passionate Java Full Stack Developer focused on building scalable backend systems and modern web experiences.
          </p>
          <p className="mt-4 text-white/60 font-light leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)" }}>
            I enjoy solving real-world problems through clean architecture, REST APIs and intuitive UI.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => (
            <Tilt key={s.label} max={10}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6 }}
              className="glass gradient-border rounded-2xl p-6 md:p-8 text-center relative overflow-hidden"
            >
              <div className="font-black accent-gradient" style={{ fontSize: s.isText ? "clamp(1.1rem, 2.2vw, 1.8rem)" : "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}>
                <Counter to={s.value} isText={s.isText} />
              </div>
              <p className="mt-3 text-white/60 uppercase tracking-wider text-xs md:text-sm">{s.label}</p>
            </motion.div>
            </Tilt>
          ))}
        </div>

        <FadeIn y={20} delay={0.3} className="mt-14 flex justify-center">
          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-white font-medium uppercase tracking-wider text-sm glow"
             style={{ background: "linear-gradient(120deg, #7C3AED, #A855F7)" }}>
            <Download size={16} /> Resume
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
