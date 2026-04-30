import { motion } from 'framer-motion';

export default function GlowOrb({ className = '', color = 'from-brand-blue to-brand-purple', size = 'h-72 w-72', delay = 0 }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ duration: 1.4, delay, ease: 'easeOut' }}
      className={`pointer-events-none absolute rounded-full blur-3xl bg-gradient-to-br ${color} ${size} ${className}`}
    />
  );
}
