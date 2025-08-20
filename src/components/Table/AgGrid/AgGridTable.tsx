import React, { useEffect, useMemo, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  ColDef,
  GridReadyEvent,
  GridApi,
  ModuleRegistry,
  GridOptions,
  AllCommunityModule,
} from 'ag-grid-community';
import {
  AllEnterpriseModule,
  SetFilterModule,
  MultiFilterModule,
  MenuModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  StatusBarModule,
  SideBarModule,
  RowGroupingModule,
  AggregationModule,
  PivotModule,
  MasterDetailModule,
  ViewportRowModelModule,
  ServerSideRowModelModule,
  InfiniteRowModelModule,
  ExcelExportModule,
  CsvExportModule,
  ClipboardModule,
  AdvancedFilterModule,
  LicenseManager,
  IntegratedChartsModule,
  CellSelectionModule,
} from 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './ad-grid.css';
import { AgChartsEnterpriseModule } from 'ag-charts-enterprise';
export interface AgGridTableProps {
  rowData: any[];
  columnDefs: ColDef[];
  onGridReady?: (event: GridReadyEvent) => void;
  context?: any;
  height?: string | number;
  width?: string | number;
  className?: string;
  loading?: boolean;
  enableExport?: boolean;
  enableSideBar?: boolean;
  enableStatusBar?: boolean;
  enableRowGroup?: boolean;
  enablePivot?: boolean;
  enableAdvancedFilter?: boolean;
  rowSelection?: 'single' | 'multiple' | false;
  theme?: 'alpine' | 'balham' | 'material' | 'legacy';
  gridOptions?: Partial<GridOptions>;
  autoHeight?: boolean;
  maxHeight?: string | number;
  minHeight?: string | number;
  pagination?: boolean;
  paginationPageSize?: number;
  animateRows?: boolean;
  enableRangeSelection?: boolean;
  enableCharts?: boolean;
  suppressRowClickSelection?: boolean;
  licenseKey?: string;
}
ModuleRegistry.registerModules([
  AllEnterpriseModule,
  SetFilterModule,
  MultiFilterModule,
  MenuModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  StatusBarModule,
  SideBarModule,
  CellSelectionModule,
  RowGroupingModule,
  AggregationModule,
  PivotModule,
  MasterDetailModule,
  ViewportRowModelModule,
  ServerSideRowModelModule,
  InfiniteRowModelModule,
  ExcelExportModule,
  CsvExportModule,
  ClipboardModule,
  AdvancedFilterModule,
  IntegratedChartsModule.with(AgChartsEnterpriseModule), // ✅ charts properly
  AllCommunityModule,
]);
//LicenseManager.setLicenseKey('Using_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-090368}_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_changing_this_key_please_contact_info@ag-grid.com___{Safe_Lanes_Consultants_Pte_Ltd}_is_granted_a_{Single_Application}_Developer_License_for_the_application_{SAIL}_only_for_{1}_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_working_on_{SAIL}_need_to_be_licensed___{SAIL}_has_been_granted_a_Deployment_License_Add-on_for_{1}_Production_Environment___This_key_works_with_{AG_Charts_and_AG_Grid}_Enterprise_versions_released_before_{23_September_2025}____[v3]_[0102]_MTc1ODU4MjAwMDAwMA==461929539170ec991c51dbb3cb8da123');
export const AgGridTable: React.FC<AgGridTableProps> = ({
  rowData,
  columnDefs,
  onGridReady,
  context,
  height = '500px',
  width = '100%',
  className = '',
  loading = false,
  enableExport = true,
  enableSideBar = true,
  enableStatusBar = true,
  enableRowGroup = false,
  enablePivot = true,
  enableAdvancedFilter = false,
  rowSelection = false,
  theme = 'alpine',
  gridOptions = {},
  autoHeight = true,
  maxHeight = '600px',
  minHeight = '200px',
  pagination = false,
  paginationPageSize = 20,
  animateRows = true,
  enableRangeSelection = true,
  enableCharts = true,
  suppressRowClickSelection = false,
  licenseKey,
}) => {
  const gridApiRef = useRef<GridApi | null>(null);

  useEffect(() => {
    if (licenseKey) {
      LicenseManager.setLicenseKey(licenseKey);
    } else {
      console.warn('⚠️ AG Grid Enterprise license key not provided.');
    }
  });
  //   ModuleRegistry.registerModules([
  //     AllEnterpriseModule,
  //     SetFilterModule,
  //     MultiFilterModule,
  //     MenuModule,
  //     ColumnsToolPanelModule,
  //     FiltersToolPanelModule,
  //     StatusBarModule,
  //     SideBarModule,
  //     RangeSelectionModule,
  //     RowGroupingModule,
  //     AggregationModule,
  //     PivotModule,
  //     MasterDetailModule,
  //     ViewportRowModelModule,
  //     ServerSideRowModelModule,
  //     InfiniteRowModelModule,
  //     ExcelExportModule,
  //     CsvExportModule,
  //     ClipboardModule,
  //     AdvancedFilterModule,
  //     IntegratedChartsModule, // ✅ register Charts
  //     AllCommunityModule
  //   ]);
  // }, [licenseKey]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      menuTabs: ['filterMenuTab' as const, 'generalMenuTab' as const, 'columnsMenuTab' as const],
      floatingFilter: false,
    }),
    [],
  );

  const sideBar = useMemo(() => {
    if (!enableSideBar) return false;

    const panels: any[] = [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: !enableRowGroup,
          suppressValues: false,
          suppressPivots: !enablePivot,
          suppressPivotMode: !enablePivot,
          suppressColumnFilter: false,
          suppressColumnSelectAll: false,
          suppressColumnExpandAll: false,
        },
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
      },
    ];

    if (enableCharts) {
      panels.push({
        id: 'charts',
        labelDefault: 'Charts',
        labelKey: 'charts',
        iconKey: 'chart',
        toolPanel: 'agChartToolPanel', // ✅ Charts Tool Panel
      });
    }

    return { toolPanels: panels, defaultToolPanel: 'columns' };
  }, [enableSideBar, enableRowGroup, enablePivot, enableCharts]);

  const statusBar = useMemo(() => {
    if (!enableStatusBar) return undefined;

    return {
      statusPanels: [
        { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' as const },
        { statusPanel: 'agAggregationComponent', align: 'center' as const },
        { statusPanel: 'agSelectedRowCountComponent', align: 'right' as const },
      ],
    };
  }, [enableStatusBar]);

  const rowSelectionConfig = useMemo(() => {
    if (rowSelection === false) return false;
    return {
      mode: rowSelection === 'single' ? 'singleRow' : 'multiRow',
      enableClickSelection: true,
    };
  }, [rowSelection]);

  const defaultGridOptions: Partial<any> = useMemo(
    () => ({
      theme,
      defaultColDef,
      headerHeight: 50,
      rowHeight: 50,
      suppressHorizontalScroll: false,
      animateRows,
      rowSelection: rowSelectionConfig,
      getRowStyle: () => ({ backgroundColor: 'white' }),
      cellSelection: true,
      enableAdvancedFilter,
      sideBar,
      statusBar,
      allowContextMenuWithControlKey: true,
      copyHeadersToClipboard: true,
      copyGroupHeadersToClipboard: true,
      enableCellTextSelection: true,
      enableBrowserTooltips: false,
      tooltipShowDelay: 2000,
      rowGroupPanelShow: 'never',
      pivotPanelShow: enablePivot ? 'always' : 'never',
      functionsReadOnly: false,
      suppressAggFuncInHeader: false,
      alwaysShowHorizontalScroll: false,
      alwaysShowVerticalScroll: false,
      suppressScrollOnNewData: true,
      debug: false,
      pagination,
      paginationPageSize,
      enableRangeSelection,
      enableCharts,
      suppressRowClickSelection,
    }),
    [
      theme,
      defaultColDef,
      animateRows,
      rowSelectionConfig,
      enableAdvancedFilter,
      sideBar,
      statusBar,
      enablePivot,
      pagination,
      paginationPageSize,
      enableRangeSelection,
      enableCharts,
      suppressRowClickSelection,
    ],
  );

  const dynamicHeight = useMemo(() => {
    if (!autoHeight) return height;
    const headerHeight = 50;
    const rowHeight = 50;
    const footerHeight = enableStatusBar ? 40 : 0;
    const padding = 4;
    const calculatedHeight = headerHeight + rowData.length * rowHeight + footerHeight + padding;

    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 900;
    const reservedHeight = 200;
    const availableHeight = screenHeight - reservedHeight;

    const maxHeightNum = typeof maxHeight === 'string' ? parseInt(maxHeight) : maxHeight;
    const minHeightNum = typeof minHeight === 'string' ? parseInt(minHeight) : minHeight;

    const effectiveMaxHeight = Math.min(maxHeightNum, availableHeight);
    return `${Math.max(minHeightNum, Math.min(calculatedHeight, effectiveMaxHeight))}px`;
  }, [autoHeight, height, rowData.length, enableStatusBar, maxHeight, minHeight]);

  const finalGridOptions = useMemo(() => {
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 900;
    const reservedHeight = 200;
    const availableHeight = screenHeight - reservedHeight;
    const calculatedHeight = 50 + rowData.length * 50 + (enableStatusBar ? 40 : 0) + 4;
    const needsScroll = autoHeight && calculatedHeight > availableHeight;

    return {
      ...defaultGridOptions,
      ...gridOptions,
      alwaysShowVerticalScroll: false,
      suppressHorizontalScroll: false,
      suppressScrollOnNewData: true,
      domLayout: needsScroll ? ('normal' as const) : ('autoHeight' as const),
    };
  }, [defaultGridOptions, gridOptions, autoHeight, rowData.length, enableStatusBar]);

  const needsScroll = useMemo(() => {
    if (!autoHeight) return false;
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 900;
    const calculatedHeight = 50 + rowData.length * 50 + 4;
    return calculatedHeight > screenHeight - 200;
  }, [autoHeight, rowData.length]);

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70">
          <span className="loader border-4 border-gray-300 border-t-blue-500 w-10 h-10 rounded-full animate-spin"></span>
        </div>
      )}

      {enableExport && (
        <div className="flex gap-2 mb-2">
          <button
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => gridApiRef.current?.exportDataAsCsv()}
          >
            Export CSV
          </button>
          <button
            className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => gridApiRef.current?.exportDataAsExcel()}
          >
            Export Excel
          </button>
        </div>
      )}

      <div
        className={`ag-theme-${theme} ${className || ''}`}
        style={{
          height: needsScroll ? dynamicHeight : 'auto',
          width,
          overflow: needsScroll ? 'auto' : 'visible',
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          context={context}
          onGridReady={(params) => {
            gridApiRef.current = params.api;
            onGridReady?.(params);
          }}
          {...finalGridOptions}
        />
      </div>
    </div>
  );
};

// Export utils remain unchanged
export const agGridUtils = {
  exportToCsv: (gridApi: GridApi, filename = 'data.csv') => {
    gridApi.exportDataAsCsv({ fileName: filename });
  },
  exportToExcel: (gridApi: GridApi, filename = 'data.xlsx') => {
    gridApi.exportDataAsExcel({ fileName: filename });
  },
  clearFilters: (gridApi: GridApi) => {
    gridApi.setFilterModel(null);
  },
  resetColumns: (gridApi: GridApi) => {
    gridApi.resetColumnState();
  },
  expandAllGroups: (gridApi: GridApi) => {
    const rowGroupCols = gridApi.getRowGroupColumns();
    if (rowGroupCols && rowGroupCols.length > 0) {
      gridApi.expandAll();
    } else {
      console.warn('No row groups found.');
    }
  },
  collapseAllGroups: (gridApi: GridApi) => {
    const rowGroupCols = gridApi.getRowGroupColumns();
    if (rowGroupCols && rowGroupCols.length > 0) {
      gridApi.collapseAll();
    } else {
      console.warn('No row groups found.');
    }
  },
  hasRowGroups: (gridApi: GridApi) => {
    const rowGroupCols = gridApi.getRowGroupColumns();
    return rowGroupCols && rowGroupCols.length > 0;
  },
  getSelectedRows: (gridApi: GridApi) => gridApi.getSelectedRows(),
  selectAll: (gridApi: GridApi) => gridApi.selectAll(),
  deselectAll: (gridApi: GridApi) => gridApi.deselectAll(),
};
