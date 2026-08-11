import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import {
  Github,
  ExternalLink,
  Sparkles,
  User,
  Clock,
  Users,
  Coffee,
  Leaf,
  Database,
  Code2,
  KeyRound,
  Tv,
  BrainCircuit,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  n: string;
  name: string;
  category: string;
  description: string;
  stack: { label: string; icon: LucideIcon }[];
  role: string;
  duration: string;
  team: string;
  gradient: string;
  accent: string;
  mockup: "dashboard" | "api" | "generator" | "streaming" | "ai";
  github?: string;
  live?: string;
  comingSoon?: boolean;
}

const CARD_ACCENT = "#A855F7";
const CARD_HOVER_ACCENT = "#7C3AED";
const CARD_BG =
  "radial-gradient(120% 120% at 50% 0%, rgba(168,85,247,0.06), transparent 60%), radial-gradient(120% 120% at 50% 100%, rgba(255,255,255,0.02), transparent 60%)";
const CARD_NUMBER_GRADIENT =
  "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.15))";

const PROJECTS: Project[] = [
  {
    n: "01",
    name: "Smart City Complaint Management",
    category: "Full Stack Platform",
    stack: [
      { label: "Java", icon: Coffee },
      { label: "Spring Boot", icon: Leaf },
      { label: "React", icon: Code2 },
      { label: "MySQL", icon: Database },
    ],
    description:
      "Full-stack platform for citizens to register, track, and resolve complaints. Role-based modules for users and admins, category-based status flow, and a centralized admin dashboard.",
    role: "Full Stack Developer",
    duration: "3 Months",
    team: "Solo Project",
    gradient:
      "radial-gradient(120% 120% at 0% 0%, rgba(99,102,241,0.22), transparent 55%), radial-gradient(120% 120% at 100% 100%, rgba(168,85,247,0.18), transparent 55%)",
    accent: "#818CF8",
    mockup: "dashboard",
    github: "https://github.com/",
  },
  {
    n: "02",
    name: "Employee Management System",
    category: "Backend / REST API",
    stack: [
      { label: "Java", icon: Coffee },
      { label: "Spring Boot", icon: Leaf },
      { label: "MySQL", icon: Database },
      { label: "REST", icon: Code2 },
    ],
    description:
      "RESTful APIs to manage employee records with full CRUD, MVC architecture for scalable backend design, and tuned data handling for faster response times.",
    role: "Backend Developer",
    duration: "2 Months",
    team: "Solo Project",
    gradient:
      "radial-gradient(120% 120% at 100% 0%, rgba(45,212,191,0.20), transparent 55%), radial-gradient(120% 120% at 0% 100%, rgba(56,189,248,0.16), transparent 55%)",
    accent: "#2DD4BF",
    mockup: "api",
    github: "https://github.com/",
  },
  {
    n: "03",
    name: "Library Management System",
    category: "Full Stack / Java",
    stack: [
      { label: "Java", icon: Coffee },
      { label: "Spring Boot", icon: Leaf },
      { label: "MySQL", icon: Database },
      { label: "JDBC", icon: Code2 },
    ],
    description:
      "A complete library management solution to catalog books, track members, manage borrow and return transactions, and generate status reports with a clean Java backend.",
    role: "Full Stack Developer",
    duration: "2 Months",
    team: "Solo Project",
    gradient:
      "radial-gradient(120% 120% at 50% 0%, rgba(168,85,247,0.22), transparent 55%), radial-gradient(120% 120% at 50% 100%, rgba(124,58,237,0.16), transparent 55%)",
    accent: "#A855F7",
    mockup: "dashboard",
    github: "https://github.com/OMsharma200429/library-management-system",
  },
  {
    n: "04",
    name: "Password Generator",
    category: "Web Utility",
    stack: [
      { label: "HTML", icon: Code2 },
      { label: "CSS", icon: Code2 },
      { label: "JavaScript", icon: Code2 },
    ],
    description:
      "Secure password generator with customizable length and character rules, dynamic UI updates, and an interaction model focused on usability.",
    role: "Frontend Developer",
    duration: "2 Weeks",
    team: "Solo Project",
    gradient:
      "radial-gradient(120% 120% at 0% 0%, rgba(244,114,182,0.20), transparent 55%), radial-gradient(120% 120% at 100% 100%, rgba(251,146,60,0.16), transparent 55%)",
    accent: "#F472B6",
    mockup: "generator",
    github: "https://github.com/",
    live: "#",
  },
  {
    n: "05",
    name: "Netflix Clone UI",
    category: "Frontend / UI Clone",
    stack: [
      { label: "HTML", icon: Code2 },
      { label: "CSS", icon: Code2 },
    ],
    description:
      "Responsive UI inspired by the Netflix layout — modern design, careful alignment, and a polished user experience across screen sizes.",
    role: "UI Developer",
    duration: "3 Weeks",
    team: "Solo Project",
    gradient:
      "radial-gradient(120% 120% at 100% 0%, rgba(239,68,68,0.22), transparent 55%), radial-gradient(120% 120% at 0% 100%, rgba(24,24,27,0.6), transparent 60%)",
    accent: "#EF4444",
    mockup: "streaming",
    github: "https://github.com/",
    live: "#",
  },
  {
    n: "06",
    name: "Future AI Project",
    category: "In Progress",
    stack: [
      { label: "Java", icon: Coffee },
      { label: "AI", icon: BrainCircuit },
      { label: "TBD", icon: Sparkles },
    ],
    description:
      "A next-generation intelligent application blending Java backend with AI-driven features. Stay tuned — this one is cooking.",
    role: "Full Stack + AI",
    duration: "Ongoing",
    team: "Solo Project",
    gradient:
      "radial-gradient(120% 120% at 50% 0%, rgba(168,85,247,0.22), transparent 55%), radial-gradient(120% 120% at 50% 100%, rgba(124,58,237,0.16), transparent 55%)",
    accent: "#A855F7",
    mockup: "ai",
    comingSoon: true,
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 px-5 md:px-10 pt-24 md:pt-32 pb-24"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn y={40} className="text-center mb-16 md:mb-20">
        <p className="text-white/50 uppercase tracking-[0.4em] text-xs mb-4">Selected Work</p>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.n} project={p} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const mockupY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <div
  ref={ref}
  className="h-auto min-h-[85vh] md:h-[85vh] sticky"
  style={{ top: `${24 + index * 28}px` }}
>
      <motion.div
        style={{ scale }}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="group glass gradient-border rounded-[28px] md:rounded-[44px] p-4 sm:p-5 md:p-10 h-full min-w-0 w-full flex flex-col gap-5 md:gap-6 relative overflow-hidden ..."
      >
        {/* Subtle dark glass surface */}
        <div
          className="absolute inset-0 pointer-events-none opacity-90 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: CARD_BG }}
        />
        {/* Border glow on hover */}
        <div
          className="absolute inset-0 rounded-[32px] md:rounded-[44px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `inset 0 0 0 1px ${CARD_ACCENT}55, 0 0 60px -10px ${CARD_ACCENT}25` }}
        />

        {/* Header */}
        <div className="flex items-start md:items-center justify-between gap-4 flex-wrap relative">
          <div className="flex items-center gap-5 md:gap-7">
            <div className="relative flex items-center justify-center">
              <span
                className="font-black leading-none tabular-nums"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                  background: CARD_NUMBER_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.04em",
                }}
              >
                {project.n}
              </span>
              <span
                className="absolute -bottom-1 left-0 h-px w-full"
                style={{ background: `linear-gradient(90deg, ${CARD_ACCENT}, transparent)` }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <span
                className="uppercase tracking-widest text-[0.7rem] md:text-xs font-medium"
                style={{ color: CARD_ACCENT }}
              >
                {project.category}
              </span>
              <h3
                className="text-white font-semibold leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.15rem, 2.2vw, 2rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          {project.comingSoon && (
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest glass text-white/80">
              <Sparkles size={14} style={{ color: CARD_ACCENT }} /> Coming Soon
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-6 md:gap-10 items-center relative min-w-0">
          <div className="flex flex-col gap-5">
            <p
              className="text-white/70 font-light leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
            >
              {project.description}
            </p>

            {/* Metadata */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <MetaChip icon={User} label="Role" value={project.role} accent={CARD_ACCENT} />
              <MetaChip icon={Clock} label="Duration" value={project.duration} accent={CARD_ACCENT} />
              <MetaChip icon={Users} label="Team" value={project.team} accent={CARD_ACCENT} />
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs md:text-[0.8rem] px-3 py-1.5 rounded-full glass text-white/85 transition-all duration-300 hover:text-white"
                  style={{ borderColor: `${CARD_ACCENT}22` }}
                >
                  <Icon size={12} style={{ color: CARD_ACCENT }} />
                  {label}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm uppercase tracking-wider glass hover:bg-white/10 transition-colors text-white"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm uppercase tracking-wider text-white glow transition-transform hover:scale-[1.03]"
                  style={{ background: `linear-gradient(120deg, ${CARD_ACCENT}, ${CARD_HOVER_ACCENT})` }}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Mockup with floating parallax */}
          <motion.div
  style={{ y: mockupY }}
  className="h-full min-h-[180px] md:min-h-[220px] w-full min-w-0 flex items-center justify-center overflow-hidden"
>
            <ProjectMockup project={project} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function MetaChip({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div
      className="glass rounded-2xl px-3 py-2.5 flex flex-col gap-0.5 min-w-0"
      style={{ borderColor: `${accent}18` }}
    >
      <span className="inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-widest text-white/50">
        <Icon size={11} style={{ color: accent }} />
        {label}
      </span>
      <span className="text-white/90 text-xs md:text-sm font-medium truncate">{value}</span>
    </div>
  );
}

function ProjectMockup({ project }: { project: Project }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-full h-full max-h-[380px] aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden glass gradient-border"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span
          className="ml-auto text-[0.6rem] uppercase tracking-widest text-white/40"
          style={{ color: `${CARD_ACCENT}99` }}
        >
          {project.mockup === "api" ? "localhost:8080" : "preview"}
        </span>
      </div>
      <div className="relative p-4 md:p-5 h-[calc(100%-38px)] overflow-hidden">
        <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.06]">
          {project.mockup === "dashboard" && <DashboardMockup accent={CARD_ACCENT} />}
          {project.mockup === "api" && <ApiMockup accent={CARD_ACCENT} />}
          {project.mockup === "generator" && <GeneratorMockup accent={CARD_ACCENT} />}
          {project.mockup === "streaming" && <StreamingMockup accent={CARD_ACCENT} />}
          {project.mockup === "ai" && <AiMockup accent={CARD_ACCENT} />}
        </div>
      </div>
    </motion.div>
  );
}

/* Smart City Complaint Management — citizen complaints, statuses, map */
function DashboardMockup({ accent }: { accent: string }) {
  const rows = [
    { id: "CMP-1042", cat: "Streetlight", status: "Pending" },
    { id: "CMP-1041", cat: "Garbage", status: "In Progress" },
    { id: "CMP-1039", cat: "Pothole", status: "Resolved" },
    { id: "CMP-1036", cat: "Water Leak", status: "Resolved" },
  ];
  return (
    <div className="w-full h-full grid grid-rows-[auto_1fr] gap-2.5">
      <div className="flex gap-2">
        {[
          { s: "Pending", v: 142 },
          { s: "In Progress", v: 38 },
          { s: "Resolved", v: 219 },
        ].map((c, i) => (
          <div key={c.s} className="flex-1 rounded-lg px-2.5 py-2 bg-white/[0.04] border border-white/5">
            <div className="text-[0.55rem] uppercase tracking-wider text-white/45">{c.s}</div>
            <div
              className="text-white/90 text-sm font-semibold mt-0.5 tabular-nums"
              style={{ color: i === 1 ? accent : undefined }}
            >
              {c.v}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[1.35fr_1fr] gap-2 min-h-0">
        <div className="rounded-lg bg-white/[0.03] border border-white/5 p-2.5 flex flex-col gap-1.5 min-h-0">
          <div className="flex text-[0.5rem] uppercase tracking-wider text-white/35 pb-1 border-b border-white/5">
            <span className="w-[38%]">Complaint</span>
            <span className="w-[34%]">Category</span>
            <span className="flex-1 text-right">Status</span>
          </div>
          {rows.map((r) => (
            <div key={r.id} className="flex items-center text-[0.55rem] md:text-[0.6rem]">
              <span className="w-[38%] font-mono text-white/70 truncate">{r.id}</span>
              <span className="w-[34%] text-white/55 truncate">{r.cat}</span>
              <span className="flex-1 flex justify-end">
                <span
                  className="px-1.5 py-0.5 rounded-full border"
                  style={
                    r.status === "Resolved"
                      ? { color: "rgba(255,255,255,0.65)", borderColor: "rgba(255,255,255,0.12)" }
                      : { color: accent, borderColor: `${accent}44`, background: `${accent}14` }
                  }
                >
                  {r.status}
                </span>
              </span>
            </div>
          ))}
        </div>
        {/* Map panel */}
        <div className="rounded-lg bg-white/[0.03] border border-white/5 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div
            className="absolute inset-x-0 top-1/3 h-px opacity-50"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
          />
          {[
            { t: "26%", l: "30%" },
            { t: "58%", l: "62%" },
            { t: "74%", l: "26%" },
          ].map((p) => (
            <span
              key={p.t + p.l}
              className="absolute w-2 h-2 rounded-full"
              style={{ top: p.t, left: p.l, background: accent, boxShadow: `0 0 12px 3px ${accent}55` }}
            />
          ))}
          <span className="absolute bottom-1.5 left-2 text-[0.5rem] uppercase tracking-widest text-white/40">
            Live Map
          </span>
        </div>
      </div>
    </div>
  );
}

/* Employee Management System — table, records, CRUD actions, stats */
function ApiMockup({ accent }: { accent: string }) {
  const employees = [
    { id: "EMP-001", name: "A. Verma", dept: "Engineering" },
    { id: "EMP-002", name: "R. Nair", dept: "Finance" },
    { id: "EMP-003", name: "S. Kapoor", dept: "HR" },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-2.5">
      <div className="flex gap-2">
        {[
          { k: "Employees", v: "248" },
          { k: "Departments", v: "12" },
          { k: "Active", v: "231" },
        ].map((s, i) => (
          <div key={s.k} className="flex-1 rounded-lg px-2.5 py-1.5 bg-white/[0.04] border border-white/5">
            <div className="text-[0.5rem] uppercase tracking-wider text-white/45">{s.k}</div>
            <div
              className="text-sm font-semibold tabular-nums text-white/90"
              style={{ color: i === 0 ? accent : undefined }}
            >
              {s.v}
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 min-h-0 rounded-lg bg-white/[0.03] border border-white/5 p-2.5 flex flex-col gap-1.5">
        <div className="flex items-center justify-between pb-1 border-b border-white/5">
          <span className="text-[0.5rem] uppercase tracking-widest text-white/35">Employee Records</span>
          <span
            className="text-[0.5rem] px-1.5 py-0.5 rounded-md font-medium"
            style={{ background: `${accent}22`, color: accent }}
          >
            + Add
          </span>
        </div>
        {employees.map((e) => (
          <div key={e.id} className="flex items-center gap-2 text-[0.55rem] md:text-[0.6rem]">
            <span className="w-4 h-4 rounded-full bg-white/10 shrink-0" />
            <span className="text-white/80 w-[30%] truncate">{e.name}</span>
            <span className="font-mono text-white/45 w-[26%] truncate">{e.id}</span>
            <span className="text-white/50 flex-1 truncate">{e.dept}</span>
            <span className="flex gap-1 shrink-0">
              <span className="px-1.5 py-0.5 rounded border border-white/10 text-white/60">Edit</span>
              <span
                className="px-1.5 py-0.5 rounded border"
                style={{ borderColor: `${accent}44`, color: accent }}
              >
                Del
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Password Generator — password, strength, length, options */
function GeneratorMockup({ accent }: { accent: string }) {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-3">
      <div className="w-full rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2.5 flex items-center gap-2">
        <KeyRound size={14} style={{ color: accent }} />
        <span className="font-mono text-white/90 text-xs md:text-sm tracking-widest truncate">xK9$mR2!vP@8qLw</span>
        <span
          className="ml-auto text-[0.5rem] uppercase tracking-widest px-1.5 py-0.5 rounded"
          style={{ background: `${accent}22`, color: accent }}
        >
          Copy
        </span>
      </div>
      <div className="w-full flex flex-col gap-1.5">
        <div className="flex justify-between text-[0.6rem] text-white/50 uppercase tracking-widest">
          <span>Strength</span>
          <span style={{ color: accent }}>Strong</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[85%] rounded-full" style={{ background: accent }} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-1.5">
        <div className="flex justify-between text-[0.6rem] text-white/50 uppercase tracking-widest">
          <span>Length</span>
          <span className="tabular-nums text-white/80">16</span>
        </div>
        <div className="relative h-1 rounded-full bg-white/10">
          <div className="absolute inset-y-0 left-0 w-[60%] rounded-full" style={{ background: `${accent}99` }} />
          <span
            className="absolute -top-1 left-[60%] w-3 h-3 rounded-full border border-white/20"
            style={{ background: accent }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {["Uppercase", "Numbers", "Symbols", "Lowercase"].map((o, i) => (
          <div
            key={o}
            className="flex items-center justify-between rounded-md px-2 py-1 bg-white/[0.03] border border-white/5 text-[0.55rem] text-white/60"
          >
            {o}
            <span
              className="w-5 h-2.5 rounded-full relative"
              style={{ background: i === 3 ? "rgba(255,255,255,0.12)" : `${accent}55` }}
            >
              <span
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/90"
                style={i === 3 ? { left: 1 } : { right: 1 }}
              />
            </span>
          </div>
        ))}
      </div>
      <div
        className="w-full text-center text-[0.6rem] uppercase tracking-widest py-1.5 rounded-lg text-white font-medium"
        style={{ background: `linear-gradient(120deg, ${accent}, ${CARD_HOVER_ACCENT})` }}
      >
        Generate Password
      </div>
    </div>
  );
}

/* Netflix Clone — hero banner, categories, thumbnails */
function StreamingMockup({ accent }: { accent: string }) {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div
        className="rounded-lg flex-1 relative overflow-hidden border border-white/5"
        style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(0,0,0,0.65))" }}
      >
        <Tv className="absolute inset-0 m-auto text-white/25" size={44} />
        <span
          className="absolute top-2 left-2 text-[0.5rem] uppercase tracking-widest font-bold"
          style={{ color: accent }}
        >
          Featured
        </span>
        <div className="absolute bottom-2 left-2 flex flex-col gap-1">
          <span className="h-1.5 w-20 rounded-full bg-white/25" />
          <span className="h-1 w-28 rounded-full bg-white/10" />
          <span className="mt-1 text-[0.5rem] px-1.5 py-0.5 rounded text-black font-semibold bg-white/85 w-fit">
            ▶ Play
          </span>
        </div>
      </div>
      <div className="flex gap-2 text-[0.5rem] uppercase tracking-widest">
        {["Trending", "Series", "Movies"].map((c, i) => (
          <span key={c} style={{ color: i === 0 ? accent : "rgba(255,255,255,0.4)" }}>
            {c}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="aspect-[2/3] rounded-md border border-white/5"
            style={{
              background: `linear-gradient(160deg, rgba(255,255,255,${0.08 - i * 0.012}), rgba(255,255,255,0.02))`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* Quiz-style interface — question, options, progress, score */
function AiMockup({ accent }: { accent: string }) {
  const options = ["Encapsulation", "Polymorphism", "Abstraction", "Compilation"];
  return (
    <div className="w-full h-full flex flex-col gap-2.5">
      <div className="flex items-center justify-between text-[0.55rem] uppercase tracking-widest text-white/45">
        <span>Question 4 / 10</span>
        <span style={{ color: accent }}>Score 30</span>
      </div>
      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-[40%] rounded-full" style={{ background: accent }} />
      </div>
      <div className="rounded-lg bg-white/[0.04] border border-white/5 px-2.5 py-2">
        <p className="text-white/85 text-[0.65rem] md:text-xs leading-snug">
          Which is NOT a pillar of Object-Oriented Programming?
        </p>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-1.5 min-h-0">
        {options.map((o, i) => (
          <div
            key={o}
            className="rounded-lg px-2 flex items-center gap-1.5 text-[0.55rem] md:text-[0.6rem] border"
            style={
              i === 3
                ? { borderColor: `${accent}55`, background: `${accent}18`, color: "#fff" }
                : {
                    borderColor: "rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.03)",
                    color: "rgba(255,255,255,0.6)",
                  }
            }
          >
            <span
              className="w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[0.45rem] shrink-0"
              style={{ borderColor: i === 3 ? accent : "rgba(255,255,255,0.15)", color: i === 3 ? accent : undefined }}
            >
              {["A", "B", "C", "D"][i]}
            </span>
            <span className="truncate">{o}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <BrainCircuit size={12} style={{ color: accent }} />
        <span className="text-[0.5rem] uppercase tracking-[0.25em] text-white/40">Next Question</span>
      </div>
    </div>
  );
}
