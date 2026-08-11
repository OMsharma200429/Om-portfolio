import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Tilt } from "./Tilt";
import { AmbientLights } from "./AmbientLights";
import { Server, Layout, Database, Wrench, Coffee, Boxes, Network, Plug, HardDrive, FileCode, Palette, Braces, Atom, GitBranch, Github, Terminal } from "lucide-react";

const GROUPS = [
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Core Java", desc: "OOP, collections, exception handling.", icon: Coffee },
      { name: "Spring Boot", desc: "REST APIs, MVC, dependency injection.", icon: Boxes },
      { name: "REST APIs", desc: "Scalable service design & integration.", icon: Network },
      { name: "JDBC", desc: "Java-to-database connectivity.", icon: Plug },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    items: [
      { name: "HTML", desc: "Semantic, accessible markup.", icon: FileCode },
      { name: "CSS", desc: "Responsive, modern styling.", icon: Palette },
      { name: "JavaScript", desc: "Interactive, dynamic UI logic.", icon: Braces },
      { name: "React", desc: "Component-driven interfaces.", icon: Atom },
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [
      { name: "MySQL", desc: "Schema design, indexes, tuned queries.", icon: HardDrive },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", desc: "Version control & branching.", icon: GitBranch },
      { name: "GitHub", desc: "Collaboration & PR workflows.", icon: Github },
      { name: "VS Code", desc: "Daily driver, debugging, extensions.", icon: Terminal },
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="skills" className="relative px-5 md:px-10 py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 50%, rgba(124,58,237,0.05), transparent 55%)" }} />
      <AmbientLights />
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn y={40} className="text-center mb-16">
          <p className="text-white/50 uppercase tracking-[0.4em] text-xs mb-4">Skills</p>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}>
            My Toolkit
          </h2>
        </FadeIn>

        <div className="grid gap-10 md:gap-14">
          {GROUPS.map((g, gi) => (
            <div key={g.title}>
              <FadeIn y={20} delay={gi * 0.08} className="mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg glass gradient-border">
                  <g.icon size={18} className="text-[#A855F7]" />
                </div>
                <h3 className="text-white/90 font-semibold uppercase tracking-widest text-sm md:text-base">{g.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#A855F7]/40 to-transparent" />
              </FadeIn>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {g.items.map((s, i) => (
                  <Tilt key={s.name} max={10}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="glass gradient-border rounded-2xl p-5 md:p-6 group relative overflow-hidden"
                  >
                    <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.35), transparent 60%)" }} />
                    <div className="relative">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(124,58,237,0.15))" }}>
                        <s.icon size={22} className="text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-base md:text-lg">{s.name}</h4>
                      <p className="mt-1 text-white/55 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                  </Tilt>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
