import React from 'react';
export interface DragZoneProps {
    onDrop: (acceptedFiles: File[]) => void;
}
export declare const DragZone: React.FC<DragZoneProps>;
