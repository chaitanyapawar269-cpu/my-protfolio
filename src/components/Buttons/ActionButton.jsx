import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function ActionButton({ children, className, ...props }) {
  return (
    <motion.button whileTap={{ scale: 0.98 }} className={cn('rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20', className)} {...props}>
      {children}
    </motion.button>
  );
}
