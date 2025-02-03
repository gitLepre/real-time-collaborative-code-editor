import { cn } from '@/shared/utils';
import { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  className?: string;
};

export const Span = ({ children, className, ...props }: Props) => {
  return (
    <span className={cn('text-sm', className)} {...props}>
      {children}
    </span>
  );
};
