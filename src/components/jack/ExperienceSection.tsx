import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Briefcase } from "lucide-react";
import { Tilt } from "./Tilt";
import { AmbientLights } from "./AmbientLights";

const TIMELINE = [
  {
    role: "Software Developer Intern",
    org: "Internship Experience",
    period: "2024 · 3 Months",
    desc: "Built and maintained full-stack modules, worked on Java-based backend development, connected backend services with responsive frontend interfaces, and contributed to real-world development tasks.",
    stack: ["Java", "HTML", "CSS", "JavaScript", "MySQL", "Node.js", "PHP"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-5 md:px-10 py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(168,85,247,0.05), transparent 55%)" }} />
      <AmbientLights />
      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn y={40} className="text-center mb-16">
          <p className="text-white/50 uppercase tracking-[0.4em] text-xs mb-4">Journey</p>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}>
            Experience
          </h2>
        </FadeIn>

        <div className="relative pl-8 md:pl-14">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-2 md:left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#A855F7] via-[#7C3AED] to-transparent"
          />
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="relative mb-10"
            >
              <div className="absolute -left-8 md:-left-14 top-6 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-[#A855F7] to-[#7C3AED] glow" />
              <Tilt max={5}>
              <div className="glass gradient-border rounded-2xl p-6 md:p-8">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(124,58,237,0.15))" }}>
                      <Briefcase size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg md:text-2xl">{item.role}</h3>
                      <p className="text-white/60 text-sm">{item.org}</p>
                    </div>
                  </div>
                  <span className="text-white/70 uppercase tracking-widest text-xs px-3 py-1 rounded-full glass">{item.period}</span>
                </div>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full glass text-white/85">{s}</span>
                  ))}
                </div>
              </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
