import React, { useEffect, useState } from 'react';
import { AgGridTable } from '../../components/Table/AgGrid/AgGridTable';
import { Input } from '../../components/ui/Input';

// 👉 import static configs
import columnDefs from '../../utils/tableData';
import sampleRowData from '../../utils/rowData';

const AgGridPlayground: React.FC = () => {
  const [rowData, setRowData] = useState<any[]>([]);

  useEffect(() => {
    // load your prepared dataset
    setRowData(sampleRowData);
  }, []);

  // UI controlled states for AgGridTable props
  const [options, setOptions] = useState({
    enableExport: true,
    enableSideBar: true,
    enableStatusBar: true,
    enableRowGroup: true,
    enablePivot: true,
    enableAdvancedFilter: false,
    rowSelection: 'single' as 'single' | 'multiple' | false,
    pagination: true,
    paginationPageSize: 10,
    animateRows: true,
    enableRangeSelection: true,
    enableCharts: true,
    autoHeight: false,
    theme: 'alpine' as 'alpine' | 'balham' | 'material' | 'legacy',
  });

  const toggleOption = (key: keyof typeof options) => {
    setOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-bold">⚡ AG Grid Playground</h1>

      {/* Controls */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 bg-gray-50 p-4 rounded-lg shadow">
        {Object.keys(options).map((key) => {
          if (key === 'rowSelection' || key === 'paginationPageSize' || key === 'theme')
            return null;
          return (
            <Input
              key={key}
              label={key}
              className="w-4"
              labelPosition={'left'}
              type="checkbox"
              checked={options[key as keyof typeof options] as boolean}
              onChange={() => toggleOption(key as keyof typeof options)}
            />
          );
        })}

        {/* Row selection dropdown */}
        <label className="flex flex-col text-sm">
          Row Selection
          <select
            value={options.rowSelection || ''}
            onChange={(e) =>
              setOptions((prev) => ({
                ...prev,
                rowSelection:
                  e.target.value === '' ? false : (e.target.value as 'single' | 'multiple'),
              }))
            }
            className="border rounded px-2 py-1"
          >
            <option value="">Disabled</option>
            <option value="single">Single</option>
            <option value="multiple">Multiple</option>
          </select>
        </label>

        {/* Pagination size input */}
        <label className="flex flex-col text-sm">
          Page Size
          <input
            type="number"
            min={1}
            value={options.paginationPageSize}
            onChange={(e) =>
              setOptions((prev) => ({
                ...prev,
                paginationPageSize: Number(e.target.value),
              }))
            }
            className="border rounded px-2 py-1"
          />
        </label>

        {/* Theme selection */}
        <label className="flex flex-col text-sm">
          Theme
          <select
            value={options.theme}
            onChange={(e) =>
              setOptions((prev) => ({
                ...prev,
                theme: e.target.value as typeof options.theme,
              }))
            }
            className="border rounded px-2 py-1"
          >
            <option value="alpine">Alpine</option>
            <option value="balham">Balham</option>
            <option value="material">Material</option>
            <option value="legacy">Legacy</option>
          </select>
        </label>
      </div>

      {/* Grid */}
      <AgGridTable rowData={rowData} columnDefs={columnDefs} licenseKey="" {...options} />
    </div>
  );
};

export default AgGridPlayground;
