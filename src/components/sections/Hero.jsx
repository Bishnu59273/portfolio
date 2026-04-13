import { motion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import BlurText from "@/components/reactbits/BlurText";

const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/8 dark:bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/6 dark:bg-violet-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-12 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 sm:gap-10 md:gap-12">
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-indigo-500 dark:text-indigo-400 font-medium text-xs sm:text-sm mb-2 sm:mb-3 tracking-widest uppercase"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name — BlurText animation */}
            <BlurText
              text="Bishnu Saha"
              delay={120}
              direction="bottom"
              animateBy="words"
              stepDuration={0.4}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-3 sm:mb-4 justify-center md:justify-start"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 mb-2 sm:mb-3"
            >
              Full Stack Developer &nbsp;&middot;&nbsp; MCA Graduate &nbsp;&middot;&nbsp; Tech Enthusiast
            </motion.p>

            {/* Description — hidden on small mobile to save space */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hidden sm:block text-slate-400 dark:text-slate-500 max-w-lg mx-auto md:mx-0 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base"
            >
              Crafting efficient, user-centric web solutions that turn ideas
              into impactful digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start mt-4 sm:mt-0 mb-4 sm:mb-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-medium hover:from-indigo-600 hover:to-violet-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-500/20"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-indigo-500/40 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:border-indigo-500/60 dark:hover:border-indigo-400/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex gap-2 sm:gap-3 justify-center md:justify-start"
            >
              <a
                href="mailto:bishnusaha59273@gmail.com"
                className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-400/10 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://github.com/bishnu59273"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-400/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <GitHubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/bishnu-saha-8b33a123b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-400/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Gradient glow behind the card */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-indigo-400 opacity-25 dark:opacity-35 blur-xl" />
              {/* Gradient border wrapper */}
              <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-indigo-400">
                <div className="w-36 h-44 sm:w-56 sm:h-64 lg:w-64 lg:h-80 rounded-[14px] overflow-hidden bg-slate-900">
                  <img
                    src="/my-img2.jpeg"
                    alt="Bishnu Saha"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
