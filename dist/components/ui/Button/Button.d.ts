import { type VariantProps } from "class-variance-authority";
import * as React from "react";
declare const ButtonVariants: (props?: ({
    variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | "success" | "warning" | null | undefined;
    size?: "default" | "sm" | "md" | "lg" | "icon" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
    asChild?: boolean;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    badgeContent?: React.ReactNode;
    badgeVariant?: "dot" | "number";
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, ButtonVariants };
