import { cn } from '@/shared/utils';
import { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  className?: string;
};

export const H4 = ({ children, className, ...props }: Props) => {
  return (
    <h4 className={cn('text-base font-bold', className)} {...props}>
      {children}
    </h4>
  );
};
