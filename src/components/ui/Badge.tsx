interface BadgeProps {
  children: string;
  pulse?: boolean;
  variant?: 'primary' | 'neutral';
}

/** Pill status badge, e.g. "Open to Work" / "Available for Freelance" */
export default function Badge({ children, pulse = false, variant = 'primary' }: BadgeProps) {
  const styles =
    variant === 'primary'
      ? 'bg-primary/10 border-primary/20 text-primary'
      : 'bg-on-surface-variant/10 border-on-surface-variant/20 text-on-surface-variant';

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border font-label-md text-xs ${styles}`}>
      {pulse && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
      {children}
    </span>
  );
}
