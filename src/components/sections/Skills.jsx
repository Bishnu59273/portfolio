import { motion } from "motion/react";
import BlurText from "@/components/reactbits/BlurText";

const skillCategories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "PHP", "Database Management"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Responsive Design", "TypeScript"],
  },
  {
    title: "Expertise",
    items: ["Problem Solving", "Scalable Architecture", "Clean Code", "Collaboration"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-100/60 dark:bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            className="text-indigo-500 dark:text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2 text-center"
          >
            Toolkit
          </motion.p>
          <BlurText
            text="Skills & Technologies"
            delay={80}
            direction="bottom"
            animateBy="words"
            stepDuration={0.38}
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white justify-center mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillCategories.map((category, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 hover:border-indigo-200 dark:hover:border-indigo-500/15 hover:shadow-sm dark:hover:shadow-none transition-all duration-300"
              >
                <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-4 pb-3 border-b border-slate-100 dark:border-white/5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-300 dark:hover:border-indigo-500/20 hover:bg-indigo-50 dark:hover:bg-indigo-500/5 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
