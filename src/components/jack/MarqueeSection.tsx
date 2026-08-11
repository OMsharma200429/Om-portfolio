import { useEffect, useRef, useState } from "react";

const TECH = [
  "Core Java", "Spring Boot", "JDBC", "MySQL", "REST APIs", "OOP", "MVC",
  "JavaScript", "Node.js", "React", "HTML", "CSS", "Git", "GitHub",
  "PHP", "Oracle SQL", "Responsive Web", "Clean Code", "Backend", "Full Stack", "Problem Solving",
];

const ROW1 = TECH.slice(0, 11);
const ROW2 = TECH.slice(11);

export function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(raw - 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tile = (label: string, i: number) => (
    <div
      key={i}
      className="rounded-2xl shrink-0 flex items-center justify-center font-black uppercase tracking-tight px-10"
      style={{
        width: 420,
        height: 270,
        background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#E8E8E8",
        fontSize: "clamp(1.5rem, 3vw, 2.6rem)",
        textAlign: "center",
      }}
    >
      {label}
    </div>
  );

  const r1 = [...ROW1, ...ROW1, ...ROW1];
  const r2 = [...ROW2, ...ROW2, ...ROW2];

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ background: "#0C0C0C", overflow: "hidden" }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-3" style={{ transform: `translateX(${offset}px)`, willChange: "transform" }}>
          {r1.map((s, i) => tile(s, i))}
        </div>
        <div className="flex gap-3" style={{ transform: `translateX(${-offset}px)`, willChange: "transform" }}>
          {r2.map((s, i) => tile(s, i))}
        </div>
      </div>
    </section>
  );
}
