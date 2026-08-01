import { motion } from 'framer-motion';

export function Loader() {
  return (
    <div className="flex items-center justify-center rounded-[24px] border border-white/10 bg-slate-950/60 p-10">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }} className="h-10 w-10 rounded-full border-2 border-sky-500 border-t-transparent" />
    </div>
  );
}
