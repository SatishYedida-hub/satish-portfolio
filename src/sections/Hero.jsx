import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from 'react-icons/fa';
import { profile, stats } from '../data/portfolio';
import GlowOrb from '../components/GlowOrb';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
      <GlowOrb className="-top-24 -left-24" color="from-brand-blue to-brand-indigo" size="h-96 w-96" />
      <GlowOrb className="top-20 -right-24" color="from-brand-purple to-fuchsia-500" size="h-[28rem] w-[28rem]" delay={0.2} />
      <GlowOrb className="bottom-0 left-1/3" color="from-brand-cyan to-brand-blue" size="h-72 w-72" delay={0.4} />

      <div className="container-px relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:gap-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div variants={itemVariants} className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl text-balance"
          >
            Hi, I'm <span className="gradient-text">{profile.name}</span>
            <br />
            <span className="text-slate-300">a </span>
            <span className="gradient-text">DevOps Engineer</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl font-mono text-sm uppercase tracking-[0.2em] text-slate-400 sm:text-base"
          >
            AWS · Kubernetes · CI/CD · DevSecOps
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            I design scalable cloud infrastructure on AWS, build reliable CI/CD
            pipelines, and run production workloads on Kubernetes.{' '}
            <span className="text-slate-200">
              {profile.yearsOfExperience}+ years
            </span>{' '}
            of shipping software the boring, dependable way — automated,
            observable, and secure.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={scrollTo('projects')}
              className="btn-primary"
            >
              View Projects
              <FaArrowRight />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-ghost"
            >
              <FaDownload />
              Hire Me
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.dl
            variants={itemVariants}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="card gradient-border p-4 text-center"
              >
                <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  {s.label}
                </dt>
                <dd className="mt-1 text-2xl font-extrabold gradient-text">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="relative hidden lg:col-span-5 lg:block"
        >
          <HeroTerminal />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}

function HeroTerminal() {
  const lines = [
    { p: '$', c: 'kubectl get pods -n production', delay: 0.4 },
    { c: 'NAME                  READY   STATUS    RESTARTS', dim: true, delay: 0.7 },
    { c: 'api-7d9b8c-xq2p4      1/1     Running   0', delay: 0.85 },
    { c: 'api-7d9b8c-mn7r1      1/1     Running   0', delay: 1.0 },
    { c: 'worker-5c4f-zk8w2     1/1     Running   0', delay: 1.15 },
    { p: '$', c: 'terraform apply -auto-approve', delay: 1.6 },
    { c: 'Apply complete! Resources: 12 added, 0 changed.', ok: true, delay: 1.95 },
    { p: '$', c: 'jenkins build deploy-prod', delay: 2.4 },
    { c: '✓ Build #218 · success · 2m 41s', ok: true, delay: 2.75 },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-brand-gradient opacity-20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-card/80 shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-[11px] tracking-wider text-slate-400">
            ~/satish — devops
          </span>
          <span className="font-mono text-[11px] text-slate-500">zsh</span>
        </div>
        <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: l.delay }}
              className="flex gap-2"
            >
              {l.p && <span className="text-brand-cyan">{l.p}</span>}
              <span
                className={
                  l.ok
                    ? 'text-emerald-400'
                    : l.dim
                    ? 'text-slate-500'
                    : 'text-slate-200'
                }
              >
                {l.c}
              </span>
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-1 inline-block h-4 w-2 translate-y-[3px] bg-brand-cyan"
          />
        </div>
      </div>
    </div>
  );
}
