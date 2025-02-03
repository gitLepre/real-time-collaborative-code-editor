import { cn } from '@/shared/utils';
import { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  className?: string;
};

export const H1 = ({ children, className, ...props }: Props) => {
  return (
    <h1 className={cn('text-2xl font-bold', className)} {...props}>
      {children}
    </h1>
  );
};
