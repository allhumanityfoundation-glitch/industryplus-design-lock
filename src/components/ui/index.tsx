import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/* ── Card ── */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function Card({ children, className, variant = 'default', padding = 'md', onClick }: CardProps) {
  const variants = {
    default: 'bg-white',
    dark: 'bg-neutral-950 text-white',
    glass: 'bg-white/80 backdrop-blur-sm',
  };

  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-xl transition-all duration-200',
        'shadow-[0_0_0_1px_rgba(0,0,0,0.06)]',
        'hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.06)]',
        variants[variant],
        paddings[padding],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/* ── Badge ── */
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'gradient';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
  const variants = {
    default: 'bg-neutral-100 text-neutral-700',
    success: 'bg-green-50 text-green-700',
    warning: 'bg-amber-50 text-amber-700',
    danger: 'bg-red-50 text-red-700',
    gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-neutral-950',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-3 py-1',
  };

  return (
    <span className={cn('inline-flex items-center font-semibold rounded-full', variants[variant], sizes[size])}>
      {children}
    </span>
  );
}

/* ── Button ── */
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({
  children, variant = 'primary', size = 'md',
  fullWidth, onClick, disabled, className
}: ButtonProps) {
  const variants = {
    primary: 'bg-neutral-950 text-white hover:bg-neutral-800 active:bg-neutral-900',
    secondary: 'bg-white text-neutral-700 shadow-[0_0_0_1px_rgba(0,0,0,0.08)] hover:bg-neutral-50 active:bg-neutral-100',
    ghost: 'text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200',
    gradient: 'gradient-btn text-neutral-950 font-semibold',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5 rounded-lg',
    md: 'text-sm px-4 py-2.5 rounded-xl',
    lg: 'text-base px-6 py-3 rounded-xl',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'font-medium transition-all duration-150',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  );
}
