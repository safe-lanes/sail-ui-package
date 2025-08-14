import React from 'react';
interface TitleProps {
    title: string;
    children?: React.ReactNode;
    className?: string;
}
export declare function Title({ title, children, className }: TitleProps): import("react/jsx-runtime").JSX.Element;
export default Title;
export type { TitleProps };
