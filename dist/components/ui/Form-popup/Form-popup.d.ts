import * as React from 'react';
interface FormPopupProps {
    children: React.ReactNode;
    className?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: string;
}
export declare const StandardFormPopup: React.ForwardRefExoticComponent<FormPopupProps & React.RefAttributes<HTMLDivElement>>;
declare const FormPopupOverlay: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const FormPopupContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { StandardFormPopup as FormPopup, FormPopupOverlay, FormPopupContent };
export type { FormPopupProps };
