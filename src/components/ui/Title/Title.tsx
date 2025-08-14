import React from 'react';
import { cn } from '../../../lib/utils';

interface TitleProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export function Title({ title, children, className }: TitleProps) {
  return (
    <>
      {/* Top section with title and custom filter toggle */}
      <div className={cn('flex items-center justify-between mb-4', className)}>
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        {children}
      </div>
    </>
  );
}

export default Title;
export type { TitleProps };
