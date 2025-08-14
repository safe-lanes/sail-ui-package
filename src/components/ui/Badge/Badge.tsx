import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../../lib/utils';

const BadgeVariants = cva(
  'inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground border-transparent',
        secondary: 'bg-secondary text-secondary-foreground border-transparent',
        success: 'bg-green-500 text-white border-transparent',
        warning: 'bg-yellow-400 text-black border-transparent',
        destructive: 'bg-red-500 text-white border-transparent',
        outline: 'text-foreground border border-input bg-transparent',
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-3 py-1',
        lg: 'text-base px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BadgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(BadgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, BadgeVariants };
export type { BadgeProps };
