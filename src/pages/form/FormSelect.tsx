import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { DragZone } from '../../components/ui/DragZone';
import { AutoComplete } from '../../components/ui/AutoComplete';
import { CommonSelect, OptionType } from '../../components/ui/Common-Select';

const options: OptionType[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const loadMoreOptions = (inputValue: string, callback: (opts: OptionType[]) => void) => {
  setTimeout(() => {
    const filtered = options.filter((opt) =>
      opt.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
    callback(filtered);
  }, 500);
};

export default function FormSelect() {
  const [basicValue, setBasicValue] = useState<OptionType | null>(null);
  const [searchableValue, setSearchableValue] = useState<OptionType | null>(null);
  const [multiValue, setMultiValue] = useState<OptionType[]>([]);
  const [multiSearchValue, setMultiSearchValue] = useState<OptionType[]>([]);
  const [creatableValue, setCreatableValue] = useState<OptionType | null>(null);
  const [creatableSearchValue, setCreatableSearchValue] = useState<OptionType | null>(null);
  const [loadMoreValue, setLoadMoreValue] = useState<OptionType | null>(null);

  const demoList = [
    {
      label: 'Select Basic',
      element: <CommonSelect options={options} value={basicValue} onChange={setBasicValue} />,
    },
    {
      label: 'Select Searchable',
      element: (
        <CommonSelect options={options} value={searchableValue} onChange={setSearchableValue} />
      ),
    },
    {
      label: 'Select Multiple',
      element: (
        <CommonSelect
          isMulti
          options={options}
          value={multiValue}
          onChange={(value) => setMultiValue(value ? [...value] : [])}
        />
      ),
    },
    {
      label: 'Select Multiple Searchable',
      element: (
        <CommonSelect
          isMulti
          options={options}
          value={multiSearchValue}
          onChange={(value) => setMultiSearchValue(value ? [...value] : [])}
        />
      ),
    },
    {
      label: 'Select Creatable',
      element: (
        <CommonSelect options={options} value={creatableValue} onChange={setCreatableValue} />
      ),
    },
    {
      label: 'Select Creatable Searchable',
      element: (
        <CommonSelect
          options={options}
          value={creatableSearchValue}
          onChange={setCreatableSearchValue}
        />
      ),
    },
    {
      label: 'Select Searchable with Load More',
      element: (
        <CommonSelect
          loadOptions={loadMoreOptions}
          value={loadMoreValue}
          onChange={setLoadMoreValue}
        />
      ),
    },

    {
      label: 'Drag & Drop Zone',
      element: <DragZone onDrop={(files: File[]) => console.log('Dropped files:', files)} />,
    },
    {
      label: 'Autocomplete',
      element: (
        <AutoComplete
          suggestions={['Red', 'Green', 'Blue', 'Yellow']}
          onSelect={(v) => console.log('Selected:', v)}
        />
      ),
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">Dropdown & Upload Components</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demoList.map((demo, i) => (
          <div key={i} className="space-y-2">
            <h3 className="font-medium">{demo.label}</h3>
            {demo.element}
          </div>
        ))}
      </div>
    </Card>
  );
}
