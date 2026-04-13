import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    emoji: "🧠",
    title: "Smart Scholars 360",
    live: "https://smartscholars360.com",
    liveLabel: "smartscholars360.com",
    description:
      "An educational platform that helps students explore and enroll in affordable online courses. Designed and built a responsive interface to improve accessibility.",
    highlights: [
      "Responsive interface improving accessibility across devices",
      "Enhanced user experience and reduced page load time by 20%",
      "Comprehensive course discovery and enrollment system",
    ],
    tags: ["React", "Express", "Bootstrap 5", "GSAP", "Canvas"],
  },
  {
    emoji: "🩸",
    title: "Blood Management System",
    description:
      "A full-stack project simplifying the blood donation process through role-based authentication for admins, organizations, and users.",
    highlights: [
      "Users can request blood, view donation camps, and manage profiles",
      "Admin dashboard for overseeing requests and camp activations",
      "Role-based access control for three user types",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    emoji: "🛒",
    title: "E-Commerce Platform",
    github: "https://github.com",
    githubLabel: "View on GitHub",
    description:
      "An end-to-end online store built using Nuxt 3, showcasing modern front-end architecture and state management patterns with TypeScript support.",
    highlights: [
      "Full-featured e-commerce UI with Nuxt 3 SSR/SSG capabilities",
      "State management for cart, products, and user sessions",
      "TypeScript for improved code quality and maintainability",
      "Modular component architecture following DRY principles",
    ],
    tags: ["Vue.js", "Nuxt 3", "TypeScript", "SCSS", "State Management"],
  },
  {
    emoji: "⚙️",
    title: "Work-Manager",
    github: "https://github.com/Bishnu59273/work-manager",
    githubLabel: "View on GitHub",
    description:
      "An end-to-end task management tool featuring user/workflow management, role-based access control, and an interactive UI with comprehensive CRUD operations.",
    highlights: [
      "Modular architecture with separated frontend, backend, and data layers",
      "Task management: create, assign, track, and update with statuses",
      "Role-based access control (admin vs normal users)",
      "Robust backend API with CRUD operations and data validation",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Full-Stack"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2 text-center"
          >
            Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-7 flex flex-col hover:border-indigo-500/20 hover:bg-white/[0.035] transition-colors duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-2xl mb-2 block">{project.emoji}</span>
                    <h3 className="text-white font-semibold text-lg">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-indigo-400/10 transition-all duration-200"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-indigo-400/10 transition-all duration-200"
                        aria-label="Live site"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/15 font-medium"
                    >
                      {tag}
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
