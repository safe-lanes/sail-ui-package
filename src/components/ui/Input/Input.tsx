import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  topIcon?: React.ReactNode;
  buttonIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      topIcon,
      buttonIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        {label && <label className="mb-1 block text-sm font-medium text-foreground">{label}</label>}

        {topIcon && <div className="flex justify-center mb-2">{topIcon}</div>}

        <div className="relative flex items-center">
          {leftIcon && <span className="absolute left-3 text-muted-foreground">{leftIcon}</span>}

          <input
            type={type}
            className={cn(
              'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              leftIcon ? 'pl-10' : '',
              rightIcon ? 'pr-10' : '',
              error ? 'border-destructive focus-visible:ring-destructive' : '',
              className,
            )}
            ref={ref}
            {...props}
          />

          {rightIcon && <span className="absolute right-3 text-muted-foreground">{rightIcon}</span>}

          {buttonIcon && (
            <button
              type="button"
              className="absolute right-1 flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent"
            >
              {buttonIcon}
            </button>
          )}
        </div>

        {error ? (
          <p className="mt-1 text-xs text-destructive">{error}</p>
        ) : helperText ? (
          <p className="mt-1 text-xs text-muted-foreground">{helperText}</p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
