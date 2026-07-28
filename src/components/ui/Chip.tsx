interface ChipProps {
  children: string;
  className?: string;
}

/** Small tech-stack tag chip (e.g. "Next.js 14", "TypeScript") */
export default function Chip({ children, className = '' }: ChipProps) {
  return (
    <span className={`px-3 py-1 bg-surface-container-high rounded text-xs text-on-surface-variant ${className}`}>
      {children}
    </span>
  );
}
