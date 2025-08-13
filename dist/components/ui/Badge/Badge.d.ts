import { type VariantProps } from "class-variance-authority";
import * as React from "react";
declare const BadgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | "warning" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof BadgeVariants> {
}
declare function Badge({ className, variant, size, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Badge, BadgeVariants };
