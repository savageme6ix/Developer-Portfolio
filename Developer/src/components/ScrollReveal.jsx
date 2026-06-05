import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  direction = 'up',
}) {
  const offset = direction === 'left' ? { x: -48, y: 0 }
    : direction === 'right' ? { x: 48, y: 0 }
    : { x: 0, y: 48 };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};
