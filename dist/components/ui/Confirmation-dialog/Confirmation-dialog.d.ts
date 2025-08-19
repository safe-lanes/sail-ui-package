import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
declare const ConfirmationDialogRoot: React.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const ConfirmationDialogTrigger: React.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const ConfirmationDialogPortal: React.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
declare const ConfirmationDialogOverlay: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ConfirmationDialogContent: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    width?: string;
    height?: string;
} & React.RefAttributes<HTMLDivElement>>;
declare const ConfirmationDialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const ConfirmationDialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const ConfirmationDialogTitle: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const ConfirmationDialogDescription: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare const ConfirmationDialogAction: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const ConfirmationDialogCancel: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
interface ConfirmationDialogProps {
    triggerLabel: string;
    title?: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm?: () => void;
    width?: string;
    height?: string;
}
declare const ConfirmationDialog: React.FC<ConfirmationDialogProps>;
export { ConfirmationDialog, ConfirmationDialogRoot, ConfirmationDialogPortal, ConfirmationDialogOverlay, ConfirmationDialogTrigger, ConfirmationDialogContent, ConfirmationDialogHeader, ConfirmationDialogFooter, ConfirmationDialogTitle, ConfirmationDialogDescription, ConfirmationDialogAction, ConfirmationDialogCancel, };
