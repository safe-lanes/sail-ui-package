import React from 'react';
import { GridApi } from 'ag-grid-community';
export interface AgGridTableActionsProps {
    gridApi: GridApi | null;
    className?: string;
    showExportButtons?: boolean;
    showFilterButtons?: boolean;
    showGroupButtons?: boolean;
    showSelectionButtons?: boolean;
    customButtons?: React.ReactNode;
    exportFilename?: string;
}
export declare const AgGridTableActions: React.FC<AgGridTableActionsProps>;
