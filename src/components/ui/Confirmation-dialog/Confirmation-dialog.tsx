'use client';
import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { cn } from '../../../lib/utils';
import { ButtonVariants } from '../Button/Button';

/* ------------------ Base Primitives ------------------ */
const ConfirmationDialogRoot = AlertDialogPrimitive.Root;
const ConfirmationDialogTrigger = AlertDialogPrimitive.Trigger;
const ConfirmationDialogPortal = AlertDialogPrimitive.Portal;

const ConfirmationDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
    ref={ref}
  />
));
ConfirmationDialogOverlay.displayName = 'ConfirmationDialogOverlay';

const ConfirmationDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & {
    width?: string;
    height?: string;
  }
>(({ className, width, height, ...props }, ref) => (
  <ConfirmationDialogPortal>
    <ConfirmationDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg',
        width ? width : 'w-full max-w-lg',
        height ? height : 'h-auto',
        className,
      )}
      {...props}
    />
  </ConfirmationDialogPortal>
));
ConfirmationDialogContent.displayName = 'ConfirmationDialogContent';

const ConfirmationDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);
ConfirmationDialogHeader.displayName = 'ConfirmationDialogHeader';

const ConfirmationDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
);
ConfirmationDialogFooter.displayName = 'ConfirmationDialogFooter';

const ConfirmationDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
));
ConfirmationDialogTitle.displayName = 'ConfirmationDialogTitle';

const ConfirmationDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
ConfirmationDialogDescription.displayName = 'ConfirmationDialogDescription';

const ConfirmationDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(ButtonVariants(), className)} {...props} />
));
ConfirmationDialogAction.displayName = 'ConfirmationDialogAction';

const ConfirmationDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(ButtonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', className)}
    {...props}
  />
));
ConfirmationDialogCancel.displayName = 'ConfirmationDialogCancel';

/* ------------------ Wrapper Component ------------------ */
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

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  triggerLabel,
  title = 'Are you sure?',
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  width,
  height,
}) => {
  return (
    <ConfirmationDialogRoot>
      <ConfirmationDialogTrigger className={ButtonVariants()}>
        {triggerLabel}
      </ConfirmationDialogTrigger>
      <ConfirmationDialogContent width={width} height={height}>
        <ConfirmationDialogHeader>
          <ConfirmationDialogTitle>{title}</ConfirmationDialogTitle>
          <ConfirmationDialogDescription>{message}</ConfirmationDialogDescription>
        </ConfirmationDialogHeader>
        <ConfirmationDialogFooter>
          <ConfirmationDialogCancel>{cancelLabel}</ConfirmationDialogCancel>
          <ConfirmationDialogAction onClick={onConfirm}>{confirmLabel}</ConfirmationDialogAction>
        </ConfirmationDialogFooter>
      </ConfirmationDialogContent>
    </ConfirmationDialogRoot>
  );
};

/* ------------------ Exports ------------------ */
export {
  ConfirmationDialog,
  ConfirmationDialogRoot,
  ConfirmationDialogPortal,
  ConfirmationDialogOverlay,
  ConfirmationDialogTrigger,
  ConfirmationDialogContent,
  ConfirmationDialogHeader,
  ConfirmationDialogFooter,
  ConfirmationDialogTitle,
  ConfirmationDialogDescription,
  ConfirmationDialogAction,
  ConfirmationDialogCancel,
};
