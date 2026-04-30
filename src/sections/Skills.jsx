import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Tech stack"
        title="Tools I reach for, every day."
        description="A pragmatic toolkit for shipping resilient infrastructure and delivery pipelines on AWS."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.04 } },
        }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        {skills.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.name}
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="card group relative flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden p-4 transition-colors hover:border-white/20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(120px circle at 50% 30%, ${s.color}33, transparent 70%)`,
                }}
                aria-hidden="true"
              />
              <Icon
                size={36}
                style={{ color: s.color }}
                className="drop-shadow-[0_4px_12px_rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs font-semibold text-slate-300 group-hover:text-white">
                {s.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
