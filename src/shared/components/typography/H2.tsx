import { cn } from '@/shared/utils';
import { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  className?: string;
};

export const H2 = ({ children, className, ...props }: Props) => {
  return (
    <h2 className={cn('text-xl font-bold', className)} {...props}>
      {children}
    </h2>
  );
};
