import { useState } from "react";
import { motion } from "motion/react";
import BlurText from "@/components/reactbits/BlurText";
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";

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
      {
        href: "https://wa.me/919046574113",
        label: "9046574113 (WhatsApp)",
        external: true,
      },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    links: [
      {
        href: "mailto:bishnusaha59273@gmail.com",
        label: "bishnusaha59273@gmail.com",
      },
    ],
  },
];

const socials = [
  { icon: Mail, label: "Email", href: "mailto:bishnusaha59273@gmail.com" },
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
  // { icon: Twitter, label: "Twitter", href: "https://twitter.com", external: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e29386b0-3f9f-48b3-bc00-3f581b44a97a",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio contact from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f]">
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
            Let&apos;s Talk
          </motion.p>
          <BlurText
            text="Get In Touch"
            delay={80}
            direction="bottom"
            animateBy="words"
            stepDuration={0.38}
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white justify-center mb-3"
          />
          <motion.p
            variants={fadeUp}
            className="text-slate-400 dark:text-slate-500 text-center max-w-md mx-auto mb-12"
          >
            I&apos;d love to hear from you — reach out for collaborations or
            just a friendly hello.
          </motion.p>

          <div className="max-w-3xl mx-auto space-y-5">
            {/* ── Contact Form ── */}
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] p-8 shadow-sm dark:shadow-none space-y-5"
            >
              <h3 className="text-slate-900 dark:text-white font-semibold text-base">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="px-4 py-2.5 rounded-lg text-sm bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/8 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 dark:focus:border-indigo-500/50 transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="px-4 py-2.5 rounded-lg text-sm bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/8 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 dark:focus:border-indigo-500/50 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className="px-4 py-2.5 rounded-lg text-sm bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/8 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 dark:focus:border-indigo-500/50 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Status feedback */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-lg px-4 py-3">
                  <CheckCircle size={16} />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg px-4 py-3">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-medium hover:from-indigo-600 hover:to-violet-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-500/20"
              >
                {status === "loading" ? (
                  <Loader size={16} className="animate-spin" />
                ) : (
                  <Send size={15} />
                )}
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </motion.form>

            {/* ── Contact Info Card ── */}
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-white/5 shadow-sm dark:shadow-none"
            >
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col gap-3 pt-5 sm:pt-0 first:pt-0 sm:px-6 first:pl-0 last:pr-0"
                  >
                    <div className="flex items-center gap-2">
                      <Icon
                        size={14}
                        className="text-indigo-500 dark:text-indigo-400"
                      />
                      <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                    {item.lines && (
                      <div className="space-y-0.5">
                        {item.lines.map((line, j) => (
                          <p
                            key={j}
                            className="text-sm text-slate-600 dark:text-slate-400"
                          >
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
                            rel={
                              link.external ? "noopener noreferrer" : undefined
                            }
                            className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
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

            {/* ── Social Links ── */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-300 dark:hover:border-indigo-500/20 hover:bg-indigo-50 dark:hover:bg-indigo-500/5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
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
