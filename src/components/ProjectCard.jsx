import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-card/60 backdrop-blur-md shadow-card transition-all duration-300 hover:border-white/20"
    >
      <div
        className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${project.accent} opacity-80`}
      />
      <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className={`absolute -top-24 right-0 h-56 w-56 rounded-full bg-gradient-to-br ${project.accent} opacity-30 blur-3xl`}
        />
      </div>

      <div className="relative p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${project.accent} text-2xl shadow-glow`}
            aria-hidden="true"
          >
            <span>{project.icon}</span>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:border-white/20 hover:text-white"
            >
              <FaGithub />
            </a>
          )}
        </div>

        <h3 className="mt-5 text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-cyan/90">
          {project.tagline}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2.5 text-sm text-slate-300"
            >
              <span
                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${project.accent}`}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-auto flex items-center justify-between gap-3 border-t border-white/5 bg-white/[0.02] px-6 py-4 sm:px-7">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-200 transition-colors hover:text-white"
          >
            View
            <FaArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
