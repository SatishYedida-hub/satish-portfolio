import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { strengths, profile } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        eyebrow="About me"
        title="Building reliable platforms that ship faster, safer."
        description={profile.summary}
      />

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="card group relative overflow-hidden p-6"
            >
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
                aria-hidden="true"
              />
              <div
                className={`relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-glow`}
              >
                <Icon size={24} />
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                {s.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3"
      >
        <InfoBlock
          title="What I do"
          body="I bridge developers and operations — turning manual handoffs into automated, observable delivery pipelines that stay green."
        />
        <InfoBlock
          title="How I work"
          body="Infrastructure as code, immutable images, automated tests, security gates, and dashboards that tell the truth — every release."
        />
        <InfoBlock
          title="What I value"
          body="Reliability over cleverness. Documentation over heroics. Small, reversible changes that compound into platform excellence."
        />
      </motion.div>
    </section>
  );
}

function InfoBlock({ title, body }) {
  return (
    <div className="card p-6">
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-cyan/90">
        {title}
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{body}</p>
    </div>
  );
}
