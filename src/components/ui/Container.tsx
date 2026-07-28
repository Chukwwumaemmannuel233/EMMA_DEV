import type { ElementType, ReactNode, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Matches the Stitch export's per-section max-widths (1200px default, 800px for narrower reading columns). */
  maxWidth?: '800px' | '1200px';
}

export default function Container({
  children,
  as: Tag = 'div',
  className = '',
  maxWidth = '1200px',
  ...rest
}: ContainerProps) {
  const maxWidthClass = maxWidth === '800px' ? 'max-w-[800px]' : 'max-w-[1200px]';
  return (
    <Tag className={`${maxWidthClass} mx-auto px-margin-mobile md:px-gutter ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
