import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profile } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-bg-soft/40">
      <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient font-extrabold text-white shadow-glow">
            SY
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{profile.name}</p>
            <p className="text-xs text-slate-400">
              DevOps Engineer · AWS · Kubernetes
            </p>
          </div>
        </div>

        <p className="order-3 text-center text-xs text-slate-500 sm:order-2">
          © {year} {profile.name}. Built with React, Tailwind &amp; Framer Motion.
        </p>

        <div className="order-2 flex items-center gap-2 sm:order-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
