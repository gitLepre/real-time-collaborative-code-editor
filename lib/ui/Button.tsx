import { cn } from '@lib/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const BUTTON_VARIANTS = cva(
  'relative overflow-hidden cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white shadow hover:bg-primary/90',
        // destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        // outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        // secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        // ghost: 'hover:bg-accent hover:text-accent-foreground',
        // link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof BUTTON_VARIANTS> & {
    children: ReactNode;
    className?: string;
  };

export function Button({ children, className, variant = 'default', size = 'default', ...props }: Props) {
  return (
    <button className={cn('ripple', BUTTON_VARIANTS({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
}
