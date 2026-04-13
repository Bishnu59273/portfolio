import { motion } from "motion/react";
import { MapPin, Phone, Mail, Github, Linkedin, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    lines: ["Tarak Das Road, Kaliyaganj", "West Bengal, India — 733129"],
  },
  {
    icon: Phone,
    label: "Mobile",
    links: [
      { href: "tel:6294525876", label: "6294525876 (Call)" },
      { href: "https://wa.me/919046574113", label: "9046574113 (WhatsApp)", external: true },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    links: [
      { href: "mailto:bishnusaha59273@gmail.com", label: "bishnusaha59273@gmail.com" },
    ],
  },
];

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:bishnusaha59273@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bishnu-saha-8b33a123b",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/bishnu59273",
    external: true,
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    external: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
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
            Let&apos;s Talk
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-3"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-500 text-center max-w-md mx-auto mb-12"
          >
            I&apos;d love to hear from you — reach out for collaborations or just
            a friendly hello.
          </motion.p>

          <div className="max-w-3xl mx-auto space-y-5">
            {/* Contact Info Card */}
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/5"
            >
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex flex-col gap-3 pt-5 sm:pt-0 first:pt-0 sm:px-6 first:pl-0 last:pr-0">
                    <div className="flex items-center gap-2">
                      <Icon size={14} className="text-indigo-400" />
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                    {item.lines && (
                      <div className="space-y-0.5">
                        {item.lines.map((line, j) => (
                          <p key={j} className="text-sm text-slate-400">
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                    {item.links && (
                      <div className="space-y-1">
                        {item.links.map((link, j) => (
                          <a
                            key={j}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="block text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-slate-400 text-sm font-medium hover:text-indigo-300 hover:border-indigo-500/20 hover:bg-indigo-500/5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Icon size={16} />
                    {social.label}
                  </a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
