import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'primary-inverse' | 'secondary';

const variantClasses: Record<Variant, string> = {
  // Solid off-white pill/rect, used for the header "Resume" cta and hero "View My Work" (on-surface bg)
  primary: 'bg-on-surface text-surface hover:scale-[1.02]',
  // Accent-tinted primary, used on the big "Ready to Build" CTA and header buttons
  'primary-inverse': 'bg-primary text-on-primary-fixed hover:opacity-90',
  // Bordered ghost button, used for "Contact Me"
  secondary: 'border border-white/10 text-on-surface hover:bg-white/5',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-headline-md text-sm font-bold transition-all duration-300 active:scale-95';

interface ButtonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  /** Renders as a react-router <Link> (internal navigation, e.g. "/contact") */
  to?: string;
  /** Renders as a plain <a> (external links, mailto:, anchors) */
  href?: string;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  anchorProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Polymorphic CTA button matching the Stitch button styles. Renders as a
 * react-router <Link> when `to` is given, a plain <a> when `href` is given,
 * or a <button> otherwise.
 */
export default function Button({
  variant = 'primary',
  children,
  className = '',
  to,
  href,
  onClick,
  type = 'button',
  buttonProps,
  anchorProps,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
}
