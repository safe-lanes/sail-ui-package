import * as React from 'react';
import { cn } from '../../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string | null;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  topIcon?: React.ReactNode;
  buttonIcon?: React.ReactNode;
  labelPosition?: 'top' | 'left' | 'right'; // 👈 new prop
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
      labelPosition = 'top', // 👈 default top
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        {/* Top Label */}
        {label && labelPosition === 'top' && (
          <label className="mb-1 block text-sm font-medium text-foreground">{label}</label>
        )}

        {topIcon && <div className="flex justify-center mb-2">{topIcon}</div>}

        <div
          className={cn(
            'relative flex items-center',
            labelPosition === 'left' && 'gap-2', // space between label and input
            labelPosition === 'right' && 'gap-2 flex-row-reverse',
          )}
        >
          {/* Left Label */}
          {label && labelPosition === 'left' && (
            <label className="text-sm font-medium text-foreground">{label}</label>
          )}

          <div className="relative flex-1">
            {leftIcon && <span className="absolute left-3 text-muted-foreground">{leftIcon}</span>}

            <input
              type={type}
              className={cn(
                'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                leftIcon ? 'pl-10' : '',
                rightIcon || buttonIcon ? 'pr-10' : '',
                error ? 'border-destructive focus-visible:ring-destructive' : '',
                className,
              )}
              ref={ref}
              {...props}
            />

            {rightIcon && (
              <span className="absolute right-3 text-muted-foreground">{rightIcon}</span>
            )}

            {buttonIcon && (
              <button
                type="button"
                className="absolute right-1 flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent"
              >
                {buttonIcon}
              </button>
            )}
          </div>

          {/* Right Label */}
          {label && labelPosition === 'right' && (
            <label className="text-sm font-medium text-foreground">{label}</label>
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
export type { InputProps };
