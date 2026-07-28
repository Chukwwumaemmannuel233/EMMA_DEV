import type { ReactNode, HTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  rounded?: string;
  animate?: boolean;
  delay?: number;
}

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * The "glass-card" surface used everywhere in the Stitch design: translucent
 * background, blur, hairline border, blue glow + border shift on hover.
 */
export default function GlassCard({
  children,
  className = '',
  rounded = 'rounded-3xl',
  animate = false,
  delay = 0,
  ...rest
}: GlassCardProps) {
  const classes = `glass-card ${rounded} ${className}`;

  if (animate) {
    return (
      <motion.div
        className={classes}
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay }}
        {...(rest as HTMLMotionProps<'div'>)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
