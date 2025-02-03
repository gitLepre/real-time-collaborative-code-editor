import { cn } from '@/shared/utils';
import { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  className?: string;
};

export const H3 = ({ children, className, ...props }: Props) => {
  return (
    <h3 className={cn('text-lg font-bold', className)} {...props}>
      {children}
    </h3>
  );
};
