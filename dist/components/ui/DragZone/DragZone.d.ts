import React from 'react';
interface DragZoneProps {
    onDrop: (acceptedFiles: File[]) => void;
}
declare const DragZone: React.FC<DragZoneProps>;
export default DragZone;
