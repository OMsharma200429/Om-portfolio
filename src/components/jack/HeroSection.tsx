import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import {
  ArrowDown,
  Download,
  Volume2,
  VolumeX,
  Menu,
  X,
} from "lucide-react";
import omIntro from "@/assets/om_intro.mp4";
import { Particles } from "./Particles";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";

const NAV = [
  "About",
  "Skills",
  "Projects",
  "Achievements",
  "Experience",
  "Contact",
];

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { x: mx, y: my } = useMouseParallax(1);
  const videoMx = useTransform(mx, [-1, 1], [18, -18]);
  const videoMy = useTransform(my, [-1, 1], [12, -12]);
  const panelMx = useTransform(mx, [-1, 1], [-12, 12]);
  const panelMy = useTransform(my, [-1, 1], [-7, 7]);
  const panelRotY = useTransform(mx, [-1, 1], [-3.5, 3.5]);
  const panelRotX = useTransform(my, [-1, 1], [2.5, -2.5]);
  const titleMx = useTransform(mx, [-1, 1], [-8, 8]);
  const titleMy = useTransform(my, [-1, 1], [-5, 5]);
  const subMx = useTransform(mx, [-1, 1], [-4, 4]);
  const glareX = useTransform(mx, [-1, 1], ["20%", "80%"]);
  const glareY = useTransform(my, [-1, 1], ["15%", "85%"]);

  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 800], [0, 200]);
  const videoScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const contentY = useTransform(scrollY, [0, 800], [0, -120]);
  const contentScale = useTransform(scrollY, [0, 600], [1, 0.94]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const buttonsY = useTransform(scrollY, [0, 600], [0, -60]);


  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const v = videoRef.current;
    if (!v) return;
    let unmuted = false;
    const tryUnmuted = async () => {
      try { v.muted = false; v.volume = 1; await v.play(); unmuted = true; }
      catch { v.muted = true; try { await v.play(); } catch {} }
    };
    if (v.readyState >= 2) void tryUnmuted();
    else v.addEventListener("loadeddata", () => void tryUnmuted(), { once: true });

    const events = ["pointerdown", "click", "touchstart", "keydown", "scroll", "wheel"] as const;
    const cleanup = () => events.forEach((e) => window.removeEventListener(e, onInteract));
    const onInteract = async () => {
      if (unmuted) { cleanup(); return; }
      try { v.muted = false; v.volume = 1; await v.play(); unmuted = true; cleanup(); } catch {}
    };
    events.forEach((e) => window.addEventListener(e, onInteract, { passive: true }));
    return cleanup;
  }, [mounted]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <section ref={heroRef} className="min-h-screen h-screen flex flex-col relative bg-[#080808]" style={{ overflowX: "clip" }}>
      <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y: videoY, scale: videoScale, x: videoMx }}>
        {mounted && (
          <motion.video
  ref={videoRef}
  src={omIntro}
  autoPlay
  loop
  playsInline
  controls={false}
  preload="auto"
  disablePictureInPicture
  onCanPlay={() => setVideoReady(true)}
  initial={{ opacity: 0, scale: 1.1 }}
  animate={{ opacity: videoReady ? 1 : 0, scale: 1 }}
  transition={{
    opacity: { duration: 1.2, ease: "easeOut" },
    scale: { duration: 2.4, ease: "easeOut" },
  }}
  className="absolute inset-0 w-full h-full object-cover object-[center_1%] pointer-events-none"
/>
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,8,8,0.10) 0%, rgba(8,8,8,0.02) 32%, rgba(8,8,8,0.04) 58%, rgba(8,8,8,0.28) 82%, rgba(8,8,8,0.40) 100%)" }} />
        <motion.div className="absolute inset-0" style={{ y: videoMy, background: "radial-gradient(ellipse at 50% 30%, rgba(168,85,247,0.05), transparent 60%)" }} />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(124,58,237,0.07), transparent 55%)" }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0,0,0,0.32) 100%)" }} />

      </motion.div>

      <Particles />

      <motion.nav
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
  className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-10 py-4 md:py-5 transition-all duration-300 ${
    scrolled ? "glass" : ""
  }`}
>
  {/* Main Navbar */}
  <div className="flex justify-between items-center">
    
    {/* OM Logo */}
    <a
      href="#"
      className="font-black uppercase tracking-tight text-lg md:text-xl accent-gradient"
      onClick={() => setIsMenuOpen(false)}
    >
      OM.
    </a>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center gap-8">
      {NAV.map((l) => (
        <a
          key={l}
          href={`#${l.toLowerCase()}`}
          className="group relative text-white/80 hover:text-white font-medium uppercase tracking-wider text-sm transition-colors"
        >
          {l}

          <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#A855F7] to-[#7C3AED]" />
        </a>
      ))}
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3">
      
      {/* Desktop Hire Me */}
      <motion.a
        href="#contact"
        whileHover={{ y: -3, rotateX: 8, scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 18,
        }}
        style={{ transformPerspective: 600 }}
        className="hidden md:inline-flex text-xs md:text-sm px-4 py-2 rounded-full glass text-white"
      >
        Hire Me
      </motion.a>

      {/* Mobile Hamburger */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-white"
      >
        {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
      </motion.button>
    </div>
  </div>

  {/* Mobile Menu */}
  <motion.div
    initial={false}
    animate={{
      height: isMenuOpen ? "auto" : 0,
      opacity: isMenuOpen ? 1 : 0,
    }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="md:hidden overflow-hidden"
  >
    <div className="pt-5 pb-2 flex flex-col gap-2">
      {NAV.map((l) => (
        <a
          key={l}
          href={`#${l.toLowerCase()}`}
          onClick={() => setIsMenuOpen(false)}
          className="w-full rounded-2xl px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 uppercase tracking-wider text-sm transition-all"
        >
          {l}
        </a>
      ))}

      {/* Mobile Hire Me */}
      <a
        href="#contact"
        onClick={() => setIsMenuOpen(false)}
        className="mt-2 w-full text-center rounded-full px-4 py-3 text-white text-sm uppercase tracking-wider"
        style={{
          background: "linear-gradient(120deg, #7C3AED, #A855F7)",
        }}
      >
        Hire Me
      </a>
    </div>
  </motion.div>
</motion.nav>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="mt-auto flex justify-center pb-24 md:pb-28 px-5 md:px-10 relative z-10">
        <motion.div
          style={{ x: panelMx, y: panelMy, rotateX: panelRotX, rotateY: panelRotY, transformPerspective: 1400 }}
          animate={{ translateY: [0, -6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full max-w-3xl flex flex-col items-center text-center"
        >
          <FadeIn delay={0.15} y={30}>
            <p className="text-white/55 uppercase tracking-[0.62em] text-[10px] md:text-[11px] mb-8 md:mb-10" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>
              Portfolio · 2026
            </p>
          </FadeIn>

          <motion.div style={{ x: titleMx, y: titleMy, scale: contentScale }}>
            <FadeIn delay={0.3} y={26}>
              <h1 className="font-semibold uppercase tracking-[0.3em] md:tracking-[0.36em] leading-[1.3]" style={{ fontSize: "clamp(0.95rem, 1.9vw, 1.45rem)", textShadow: "0 2px 18px rgba(0,0,0,0.65)" }}>
                <span className="accent-gradient">Java Full Stack Developer</span>
              </h1>
            </FadeIn>
          </motion.div>

          <motion.div style={{ x: subMx }}>
            <FadeIn delay={0.5} y={20}>
              <p className="mt-6 md:mt-7 mx-auto max-w-xl text-white/65 font-light leading-relaxed" style={{ fontSize: "clamp(0.86rem, 1.1vw, 1rem)", textShadow: "0 2px 14px rgba(0,0,0,0.65)" }}>
                Building scalable Java backend systems and modern React web applications.
              </p>
            </FadeIn>
          </motion.div>


          <FadeIn delay={0.7} y={18}>
            <motion.div style={{ y: buttonsY }} className="mt-10 md:mt-12 flex flex-wrap gap-4 md:gap-5 justify-center">
              <Magnet strength={4}>
                <motion.a href="#projects" whileHover={{ scale: 1.045, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 340, damping: 20 }}
                  className="relative overflow-hidden inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-white font-medium uppercase tracking-wider text-sm glow"
                  style={{ background: "linear-gradient(120deg, #7C3AED, #A855F7, #8B5CF6)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.28), 0 18px 40px -18px rgba(124,58,237,0.8)" }}>
                  <span className="relative z-10 inline-flex items-center gap-2">View Projects <ArrowDown size={16} /></span>
                  <motion.span aria-hidden className="absolute inset-y-0 w-1/3"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)" }}
                    animate={{ x: ["-140%", "340%"] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }} />
                </motion.a>
              </Magnet>
              <Magnet strength={4}>
                <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.045, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 340, damping: 20 }}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-white font-medium uppercase tracking-wider text-sm glass hover:bg-white/10 transition-colors"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)" }}>
                  <Download size={16} /> Download Resume
                </motion.a>
              </Magnet>
            </motion.div>
          </FadeIn>
        </motion.div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/55"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute bottom-6 right-6 z-20 w-8 h-8 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-colors"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)" }}
      >
        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </motion.button>
    </section>
  );
}
