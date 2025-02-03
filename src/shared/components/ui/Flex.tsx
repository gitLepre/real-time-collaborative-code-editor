import { cn } from '@/shared/utils';
import { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  dir?: 'row' | 'col';
  gap?: string;
  align?: string;
  justify?: string;
  className?: string;
};

const getBaseClasses = (attributes: Omit<Props, 'children' | 'className'>) => {
  const { dir = 'row', align, justify, gap } = attributes;
  return cn(
    'flex',
    gap && `gap-${gap}`,
    dir === 'col' && 'flex-col',
    align && `items-${align}`,
    justify && `justify-${justify}`,
  );
};

/**
 * @description A simple utility component for a flex container, equivalent to <div className="flex">.
 * @params children - The children of the flex container.
 * @params dir - The direction of the flex container. Default is "row".
 * @params align - Any valid Tailwind CSS align value. e.g. "start", "center", "end", "between", "around", "evenly", etc.
 * @params justify - Any valid Tailwind CSS justify value. e.g. "start", "center", "end", "between", "around", "evenly", etc.
 * @params gap - Any valid Tailwind CSS gap value. e.g. "2", "0-5", "[10px]", etc.
 * @params className - Any additional classes to be added to the flex container.
 * @returns A flex container component.
 */

export function Flex(props: Props) {
  const { children, className, ...rest } = props;
  return (
    <div className={cn(getBaseClasses(props), className)} {...rest}>
      {children}
    </div>
  );
}
