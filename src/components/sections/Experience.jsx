import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "Technical Trainee",
    company: "Authnull",
    period: "Current",
    badge: "Full-Time",
    description:
      "Gaining hands-on experience in modern development workflows and tackling real-world software challenges. Working with cutting-edge technologies to build scalable solutions and contributing to the development of authentication systems.",
    highlights: [
      "Developing full-stack features for production applications",
      "Collaborating with experienced developers on code reviews",
      "Implementing best practices in clean code and system design",
      "Contributing to documentation and team knowledge base",
    ],
  },
  {
    icon: GraduationCap,
    role: "Master of Computer Applications",
    company: "MCA — Completed",
    period: "Completed",
    badge: "Education",
    description:
      "Successfully completed Master of Computer Applications with a strong foundation in advanced computer science concepts. Built practical projects while balancing academic rigor with real-world development experience.",
    highlights: [
      "Mastered advanced computer science and software engineering concepts",
      "Developed multiple projects bridging theory and industry practice",
      "Enhanced problem-solving and analytical thinking skills",
      "Applied academic knowledge to real-world development challenges",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white/[0.01]">
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
            className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2 text-center"
          >
            Career
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
          >
            Experience
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-5">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-7 hover:border-indigo-500/20 hover:bg-white/[0.03] transition-colors duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                      <Icon size={18} className="text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold text-lg leading-tight">
                          {exp.role}
                        </h3>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {exp.badge}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="text-slate-300">{exp.company}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-500">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-4 text-sm">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
