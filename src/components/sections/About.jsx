import { motion } from "motion/react";
import BlurText from "@/components/reactbits/BlurText";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white dark:bg-white/[0.01]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            className="text-indigo-500 dark:text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2 text-center"
          >
            Background
          </motion.p>
          <BlurText
            text="About Me"
            delay={80}
            direction="bottom"
            animateBy="words"
            stepDuration={0.38}
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white justify-center mb-12"
          />

          <motion.div
            variants={fadeUp}
            className="max-w-3xl mx-auto rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] p-8 sm:p-10 space-y-5 shadow-sm dark:shadow-none"
          >
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I&apos;m{" "}
              <span className="text-slate-900 dark:text-white font-semibold">
                Bishnu Saha
              </span>{" "}
              — a passionate software developer with a{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent font-semibold">
                Master&apos;s degree in Computer Applications (MCA)
              </span>{" "}
              and a strong foundation in advanced computer science. I thrive on
              creating efficient, user-friendly, and visually appealing web
              applications that make a real impact.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              My expertise spans both{" "}
              <span className="text-slate-900 dark:text-white font-medium">
                frontend and full-stack development
              </span>
              , with proficiency in{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent font-medium">
                React, Next.js, Vue.js, Node.js/Express, Git, and GitHub
              </span>
              . I believe in building scalable, clean, and maintainable code
              that drives meaningful solutions.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Currently working as an{" "}
              <span className="text-slate-900 dark:text-white font-medium">
                Associate Software Developer at Authnull
              </span>
              , where I&apos;m gaining hands-on experience in modern development
              workflows and tackling real-world software challenges.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I&apos;m always eager to learn new tools, take on exciting
              challenges, and collaborate on projects that bring ideas to life
              through clean code and creative design.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
