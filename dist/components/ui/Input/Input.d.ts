import * as React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    error?: string | null;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    topIcon?: React.ReactNode;
    buttonIcon?: React.ReactNode;
    labelPosition?: 'top' | 'left' | 'right';
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
export type { InputProps };
