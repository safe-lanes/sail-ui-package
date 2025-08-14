import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../../lib/utils';

// Simple spinner component
const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4 text-current"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
);

const ButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        success: 'bg-green-500 text-white shadow-sm hover:bg-green-600',
        warning: 'bg-yellow-500 text-black shadow-sm hover:bg-yellow-600',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2',
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  badgeContent?: React.ReactNode; // number, text, or undefined
  badgeVariant?: 'dot' | 'number';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      badgeContent,
      badgeVariant = 'number',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <div className="relative inline-block">
        <Comp
          className={cn(ButtonVariants({ variant, size, className }))}
          ref={ref}
          disabled={loading || props.disabled}
          {...props}
        >
          {loading && <Spinner />}
          {!loading && leftIcon && <span className="flex items-center">{leftIcon}</span>}
          {loading ? 'Loading...' : children}
          {!loading && rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </Comp>

        {badgeContent !== undefined && (
          <span
            className={cn(
              'absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full bg-red-500 text-white',
              badgeVariant === 'dot' ? 'h-3 w-3' : 'min-w-[18px] h-[18px] px-1 text-xs font-bold',
            )}
          >
            {badgeVariant === 'number' && badgeContent}
          </span>
        )}
      </div>
    );
  },
);
Button.displayName = 'Button';

export { Button, ButtonVariants };
