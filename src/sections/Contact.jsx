import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/portfolio';

const contactItems = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
    accent: 'from-brand-blue to-brand-indigo',
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    icon: FaPhone,
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/satish-yedida',
    href: profile.linkedin,
    icon: FaLinkedin,
    accent: 'from-sky-500 to-blue-600',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something reliable together."
        description="Open to DevOps / SRE / Cloud Engineering roles and freelance collaborations. The fastest way to reach me is email."
      />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-bg-card/60 p-6 backdrop-blur-xl shadow-card sm:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl"
          />

          <div className="relative grid gap-6 lg:grid-cols-3">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-glow`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                  <FaArrowRight className="shrink-0 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
                </motion.a>
              );
            })}
          </div>

          <div className="relative mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div>
              <p className="text-lg font-semibold text-white">
                Have a role or a problem to solve?
              </p>
              <p className="text-sm text-slate-400">
                I usually respond within a day.
              </p>
            </div>
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <FaEnvelope />
              Send a message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
