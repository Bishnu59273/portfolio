import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import BlurText from "@/components/reactbits/BlurText";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** Parse "Mon YYYY" → Date */
const parseDate = (str) => {
  const [mon, yr] = str.trim().split(" ");
  return new Date(Number(yr), MONTHS.indexOf(mon), 1);
};

/**
 * "Mar 2026 – Present · 2 mos"
 * Pass end=null (or omit) for an ongoing role — auto-calculates against today.
 * Pass end="Feb 2026" for a finished role — static.
 */
function formatPeriod(start, end = null) {
  const s = parseDate(start);
  const e = end ? parseDate(end) : new Date();

  const total =
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  const yrs = Math.floor(total / 12);
  const mos = total % 12;

  const duration =
    yrs > 0 && mos > 0
      ? `${yrs} yr ${mos} mos`
      : yrs > 0
        ? `${yrs} yr`
        : `${mos} mos`;

  return `${start} – ${end ?? "Present"} · ${duration}`;
}

/**
 * Span across all roles of a company, e.g. "Full-time · 9 mos"
 * Earliest start → latest end (or today if any role is still ongoing).
 */
function companyMeta(type, roles) {
  const starts = roles.map((r) => parseDate(r.start));
  const ends = roles.map((r) => (r.end ? parseDate(r.end) : new Date()));

  const earliest = new Date(Math.min(...starts));
  const latest = new Date(Math.max(...ends));

  const total =
    (latest.getFullYear() - earliest.getFullYear()) * 12 +
    (latest.getMonth() - earliest.getMonth());

  const yrs = Math.floor(total / 12);
  const mos = total % 12;
  const duration =
    yrs > 0 && mos > 0
      ? `${yrs} yr ${mos} mos`
      : yrs > 0
        ? `${yrs} yr`
        : `${mos} mos`;

  return `${type} · ${duration}`;
}

// ─── Data ────────────────────────────────────────────────────────────────────
// For each role: provide `start` ("Mon YYYY") and optionally `end`.
// Leave `end` out (or null) → period is calculated live against today.
// Add `end` → period becomes static and stops auto-updating.
const companies = [
  {
    icon: Briefcase,
    company: "Authnull",
    type: "Full-time",
    location: "California, United States · Remote",
    roles: [
      {
        role: "Associate Software Developer",
        start: "Mar 2026",
        // end: "Jun 2026",  ← uncomment + set date to freeze this role
        highlights: [
          "Shipping full-stack features in a production auth platform",
          "Writing type-safe code with TypeScript and React.js",
          "Participating in architecture discussions and code reviews",
        ],
        skills: ["TypeScript", "React.js"],
      },
      {
        role: "Technical Trainee",
        start: "Aug 2025",
        end: "Feb 2026",
        highlights: [
          "Built responsive web UIs with React.js",
          "Developed mobile features using React Native",
          "Worked on backend APIs with Node.js and Express",
        ],
        skills: ["React.js", "React Native", "Node.js", "Express", "MongoDB"],
      },
    ],
  },
  {
    icon: Briefcase,
    company: "Webix Softwares",
    type: "Internship",
    location: "Kolkata, West Bengal, India · On-site",
    roles: [
      {
        role: "Frontend Developer",
        start: "Aug 2024",
        end: "Jan 2025",
        highlights: [
          "Built responsive UIs using Bootstrap and JavaScript",
          "Collaborated on client-facing web projects end-to-end",
          "Improved page performance and cross-browser compatibility",
        ],
        skills: ["Bootstrap", "JavaScript", "HTML5", "CSS3", "jQuery"],
      },
    ],
  },
  {
    icon: GraduationCap,
    company: "Master of Computer Applications",
    type: "Education",
    roles: [
      {
        role: "MCA Graduate",
        start: "sept 2023",
        end: "sept 2025",
        highlights: [
          "Strong foundation in advanced computer science concepts",
          "Built practical projects bridging theory and industry practice",
          "Enhanced problem-solving and analytical thinking skills",
        ],
        skills: [],
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-slate-100/60 dark:bg-white/[0.01]"
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
            Career
          </motion.p>
          <BlurText
            text="Experience"
            delay={80}
            direction="bottom"
            animateBy="words"
            stepDuration={0.38}
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white justify-center mb-12"
          />

          <div className="max-w-3xl mx-auto space-y-5">
            {companies.map((entry, i) => {
              const Icon = entry.icon;
              // Only calculate meta for entries that have dated roles
              const hasDates = entry.roles.some((r) => r.start !== null);
              const meta = hasDates
                ? companyMeta(
                    entry.type,
                    entry.roles.filter((r) => r.start),
                  )
                : entry.type;

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 hover:border-indigo-300 dark:hover:border-indigo-500/20 hover:shadow-md dark:hover:shadow-none transition-all duration-300"
                >
                  {/* Company header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                      <Icon
                        size={18}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white font-semibold text-base leading-tight">
                        {entry.company}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        {meta}
                      </p>
                      {entry.location && (
                        <p className="text-xs text-slate-400 dark:text-slate-600 mt-0.5">
                          {entry.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Roles — vertical timeline */}
                  <div className="ml-3 border-l border-slate-200 dark:border-white/8 space-y-5">
                    {entry.roles.map((r, j) => (
                      <div key={j} className="relative pl-5">
                        <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white dark:bg-[#0a0a0f] border-2 border-indigo-400 dark:border-indigo-500" />

                        <p className="text-slate-800 dark:text-slate-200 font-medium text-sm">
                          {r.role}
                        </p>

                        {/* Period: auto-calculated when start is set */}
                        {r.start && (
                          <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">
                            {formatPeriod(r.start, r.end)}
                          </p>
                        )}

                        <ul className="space-y-1 mb-3">
                          {r.highlights.map((h, k) => (
                            <li
                              key={k}
                              className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-500"
                            >
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>

                        {r.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {r.skills.map((s) => (
                              <span
                                key={s}
                                className="px-2 py-0.5 text-xs rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/15 font-medium"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
