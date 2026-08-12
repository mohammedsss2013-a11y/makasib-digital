import React from 'react';
import Link from 'next/link';

type ActionButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ActionButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ActionButtonVariant;
  className?: string;
  type?: 'button' | 'submit';
}

const variants: Record<ActionButtonVariant, string> = {
  primary:
    'bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold shadow-md shadow-emerald-500/10',
  secondary:
    'border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-bold',
  ghost: 'text-slate-300 hover:text-white hover:bg-slate-800/60 font-medium',
};

export function ActionButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ActionButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 text-xs px-4 py-2 rounded-lg transition-all ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
