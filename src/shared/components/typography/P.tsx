import { cn } from '@/shared/utils';
import { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  className?: string;
};

export const P = ({ children, className, ...props }: Props) => {
  return (
    <p className={cn('text-base', className)} {...props}>
      {children}
    </p>
  );
};
