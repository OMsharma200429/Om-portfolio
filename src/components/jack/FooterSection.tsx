import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer className="relative px-5 md:px-10 py-12 border-t border-white/10 overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-24 w-[60vw] h-48 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.10), transparent 70%)", filter: "blur(40px)" }}
        animate={{ opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="accent-gradient font-black uppercase tracking-tight text-xl">Om Sharma</p>
          <p className="text-white/50 text-sm mt-1">Java Full Stack Developer</p>
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/om-sharma-a0859833a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition"><Linkedin size={16} /></a>
          <a href="mailto:som758510@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition"><Mail size={16} /></a>
        </div>
        <div className="flex flex-col items-center md:items-end gap-3">
          <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm uppercase tracking-wider">
            <ArrowUp size={14} /> Back to Top
          </a>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-white/40 text-xs">© {new Date().getFullYear()} Om Sharma. All rights reserved.</motion.p>
        </div>
      </div>
    </footer>
  );
}
