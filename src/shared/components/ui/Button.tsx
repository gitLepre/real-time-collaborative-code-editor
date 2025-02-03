import { Variant } from '@/shared/models/Variant';
import { cn } from '@/shared/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

const DEFAULT_CLASSES = 'rounded-md p-2 cursor-pointer font-semibold transition-colors';
const VARIANT_CLASSES = {
  primary: {
    baseline: 'bg-primary-600 text-white rounded-md p-2',
    hover: 'hover:bg-primary-500',
    active: 'active:bg-primary-700',
  },
  secondary: {
    baseline: 'bg-secondary-600 text-white rounded-md p-2',
    hover: 'hover:bg-secondary-500',
    active: 'active:bg-secondary-700',
  },
};

export function Button({ children, className, variant = 'primary', ...props }: Props) {
  return (
    <button className={cn(DEFAULT_CLASSES, ...Object.values(VARIANT_CLASSES[variant]), className)} {...props}>
      {children}
    </button>
  );
}
