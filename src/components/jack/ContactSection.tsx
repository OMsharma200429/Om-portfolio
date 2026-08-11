import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Send, Download, Github, Linkedin, Mail } from "lucide-react";
import { AmbientLights } from "./AmbientLights";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );

    window.location.href = `mailto:som758510@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-full px-4 sm:px-5 md:px-10 py-24 md:py-36 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.05), transparent 60%)",
        }}
      />

      <AmbientLights />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn y={40} className="text-center mb-12 md:mb-14">
          <p className="text-white/50 uppercase tracking-[0.4em] text-xs mb-4">
            Say Hello
          </p>

          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
          >
            Contact
          </h2>

          <p className="mt-6 px-2 text-white/60 max-w-xl mx-auto leading-relaxed">
            Have a project, an opportunity, or just want to say hi? My inbox is
            open.
          </p>
        </FadeIn>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full min-w-0 rounded-[28px] md:rounded-3xl p-5 sm:p-6 md:p-10 glass gradient-border overflow-hidden"
        >
          {/* Glow */}
          <motion.div
            aria-hidden
            animate={{ opacity: [0.35, 0.8, 0.35] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-1 rounded-3xl pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, rgba(168,85,247,0.18), rgba(124,58,237,0.02), rgba(168,85,247,0.18))",
              filter: "blur(28px)",
              zIndex: -1,
            }}
          />

          <form
            onSubmit={onSubmit}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Name */}
            <label className="flex min-w-0 flex-col gap-2">
              <span className="text-white/60 uppercase tracking-wider text-xs">
                Name
              </span>

              <input
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full min-w-0 bg-white/5 border border-white/10 focus:border-[#A855F7] outline-none rounded-xl px-4 py-3.5 text-white placeholder-white/30 transition-colors"
                placeholder="Your name"
              />
            </label>

            {/* Email */}
            <label className="flex min-w-0 flex-col gap-2">
              <span className="text-white/60 uppercase tracking-wider text-xs">
                Email
              </span>

              <input
                required
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full min-w-0 bg-white/5 border border-white/10 focus:border-[#A855F7] outline-none rounded-xl px-4 py-3.5 text-white placeholder-white/30 transition-colors"
                placeholder="you@email.com"
              />
            </label>

            {/* Message */}
            <label className="flex min-w-0 flex-col gap-2 md:col-span-2">
              <span className="text-white/60 uppercase tracking-wider text-xs">
                Message
              </span>

              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full min-w-0 bg-white/5 border border-white/10 focus:border-[#A855F7] outline-none rounded-xl px-4 py-3.5 text-white placeholder-white/30 transition-colors resize-none"
                placeholder="Tell me about your project…"
              />
            </label>

            {/* Bottom Actions */}
            <div className="md:col-span-2 w-full flex flex-col gap-5">
              {/* Social Buttons */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
                <a
                  href="/resume.pdf"
                  download="Om-Sharma-Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm glass hover:bg-white/10 transition text-white"
                >
                  <Download size={15} />
                  Resume
                </a>

                <a
                  href="https://github.com/OMsharma200429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm glass hover:bg-white/10 transition text-white"
                >
                  <Github size={15} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/om-sharma-a0859833a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm glass hover:bg-white/10 transition text-white"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>

                <a
                  href="mailto:som758510@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm glass hover:bg-white/10 transition text-white"
                >
                  <Mail size={15} />
                  Email
                </a>
              </div>

              {/* Send Button */}
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                type="submit"
                className="w-full sm:w-fit inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm uppercase tracking-wider text-white glow font-medium"
                style={{
                  background:
                    "linear-gradient(120deg, #7C3AED, #A855F7)",
                }}
              >
                Send Message
                <Send size={15} />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}