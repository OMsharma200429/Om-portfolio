import {
  Bot,
  Gamepad2,
  Lightbulb,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "./FadeIn";

interface Achievement {
  number: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

const ACHIEVEMENTS: Achievement[] = [
  {
    number: "01",
    title: "Yuva AI for All",
    category: "AI Certification",
    description:
      "Completed the Yuva AI for All course and gained foundational knowledge of Artificial Intelligence and its practical applications.",
    icon: Bot,
    tags: ["Artificial Intelligence", "Learning", "Certification"],
  },
  {
    number: "02",
    title: "SUNHACKS",
    category: "36-Hour Hackathon",
    description:
      "Participated in my first-ever hackathon at Sandip University, Nashik. The experience helped me learn about teamwork, collaboration, resilience, and real-world problem solving.",
    icon: Trophy,
    tags: ["Hackathon", "Teamwork", "Problem Solving"],
  },
  {
    number: "03",
    title: "Samsung BKC AI Workshop",
    category: "AI Workshop · Jio World",
    description:
      "Attended an AI workshop focused on future-ready skills, covering AI topics, modern AI tools, and practical learning opportunities.",
    icon: Lightbulb,
    tags: ["AI", "10 AI Tools", "Workshop"],
  },
  {
    number: "04",
    title: "Smart India Hackathon",
    category: "Hackathon Participation",
    description:
      "Participated in Smart India Hackathon and gained exposure to innovation, collaborative problem solving, and technology-driven challenges.",
    icon: Users,
    tags: ["SIH", "Innovation", "Teamwork"],
  },
  {
    number: "05",
    title: "INVENTO 2024",
    category: "Game Development",
    description:
      "Participated in INVENTO 2024 Game Development event at college and explored game development concepts through hands-on participation.",
    icon: Gamepad2,
    tags: ["Game Development", "College Event", "Participation"],
  },
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative z-10 w-full max-w-full overflow-hidden px-4 sm:px-5 md:px-10 pt-24 md:pt-32 pb-24"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn y={40} className="text-center mb-14 md:mb-20">
        <p className="text-white/50 uppercase tracking-[0.4em] text-xs mb-4">
          Beyond The Code
        </p>

        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
        >
          Achievements
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-white/55 font-light leading-relaxed text-sm md:text-base">
          Certifications, hackathons, workshops and experiences that shaped my
          journey beyond software development.
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
        {ACHIEVEMENTS.map((item, index) => {
          const Icon = item.icon;

          return (
            <FadeIn key={item.number} y={35} delay={index * 0.08}>
              <article className="group relative h-full min-w-0 overflow-hidden rounded-[28px] md:rounded-[36px] glass gradient-border p-5 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_-25px_rgba(168,85,247,0.35)]">
                
                {/* Background glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(100% 100% at 0% 0%, rgba(168,85,247,0.12), transparent 55%), radial-gradient(100% 100% at 100% 100%, rgba(124,58,237,0.08), transparent 55%)",
                  }}
                />

                {/* Top row */}
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl"
                      style={{
                        background: "rgba(168,85,247,0.10)",
                        border: "1px solid rgba(168,85,247,0.20)",
                      }}
                    >
                      <Icon size={23} style={{ color: "#A855F7" }} />
                    </div>

                    <div>
                      <p
                        className="text-[0.65rem] md:text-xs uppercase tracking-[0.2em] font-medium"
                        style={{ color: "#A855F7" }}
                      >
                        {item.category}
                      </p>

                      <h3 className="text-white font-semibold text-lg md:text-xl mt-1 tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-white/15 font-black text-3xl md:text-4xl leading-none">
                    {item.number}
                  </span>
                </div>

                {/* Description */}
                <p className="relative mt-6 text-white/65 font-light leading-relaxed text-sm md:text-[0.95rem]">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="relative flex flex-wrap gap-2 mt-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full px-3 py-1.5 text-[0.65rem] md:text-xs text-white/70 glass"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent */}
                <div
                  className="relative mt-7 h-px w-20 group-hover:w-32 transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, #A855F7, transparent)",
                  }}
                />
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}