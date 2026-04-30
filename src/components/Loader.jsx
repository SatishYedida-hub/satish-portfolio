import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          aria-hidden="true"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="relative h-20 w-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 2.4, ease: 'linear', repeat: Infinity }}
            >
              <span className="absolute inset-0 rounded-full border-2 border-white/10" />
              <span className="absolute inset-0 rounded-full border-t-2 border-brand-blue" />
              <span className="absolute inset-2 rounded-full border-b-2 border-brand-purple" />
              <span className="absolute inset-4 rounded-full border-l-2 border-brand-cyan" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-mono text-sm tracking-[0.3em] text-slate-400">
                INITIALIZING
              </p>
              <p className="mt-2 text-lg font-semibold gradient-text">
                Satish Yedida · DevOps
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
