import { Variant } from '@/shared/models/Variant';
import { cn } from '@/shared/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

const DEFAULT_CLASSES = 'rounded-md p-2 cursor-pointer';
const VARIANT_CLASSES = {
  primary: {
    baseline: 'bg-primary-500 text-primary-500 rounded-md p-2',
    hover: 'hover:text-primary-200',
    active: 'active:bg-primary-700',
  },
  secondary: {
    baseline: 'bg-secondary-500 text-red-50 rounded-md p-2',
  },
};

export function Button({ children, className, variant = 'primary', ...props }: Props) {
  return (
    <button className={cn(DEFAULT_CLASSES, ...Object.values(VARIANT_CLASSES[variant]), className)} {...props}>
      {children}
    </button>
  );
}
