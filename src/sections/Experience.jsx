import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've been shipping."
        description="Hands-on cloud and DevOps work powering enterprise microservices in production."
      />

      <div className="relative mx-auto max-w-4xl">
        <div
          aria-hidden="true"
          className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent sm:left-6"
        />

        {experiences.map((exp, i) => (
          <motion.article
            key={`${exp.company}-${i}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pl-12 sm:pl-16"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-bg-card shadow-glow ring-4 ring-bg sm:left-1.5"
            >
              <FaBriefcase className="text-brand-cyan" />
            </span>

            <div className="card gradient-border p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-base font-semibold gradient-text">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1 text-xs text-slate-400 sm:items-end">
                  <span className="chip">{exp.period}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {exp.description}
              </p>

              <ul className="mt-6 space-y-3">
                {exp.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-brand-cyan" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {exp.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
