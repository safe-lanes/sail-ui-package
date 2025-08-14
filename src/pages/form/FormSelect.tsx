import { useState } from 'react';
import SelectBasic from '../../components/ui/SelectBasic/SelectBasic';
import SelectSearchable from '../../components/ui/SelectSearchable/SelectSearchable';
import SelectMultiple from '../../components/ui/SelectMultiple/SelectMultiple';
import SelectMultipleSearchable from '../../components/ui/SelectMultipleSearchable/SelectMultipleSearchable';
import SelectCreatable from '../../components/ui/SelectCreatable/SelectCreatable';
import SelectCreatableSearchable from '../../components/ui/SelectCreatableSearchable/SelectCreatableSearchable';
import SelectSearchableLoadMore from '../../components/ui/SelectSearchableLoadMore/SelectSearchableLoadMore';
import SelectMultipleSearchableLoadMore from '../../components/ui/SelectMultipleSearchableLoadMore/SelectMultipleSearchableLoadMore';
import DragZone from '../../components/ui/DragZone/DragZone';
import AutoComplete from '../../components/ui/AutoComplete/AutoComplete';
import Card from '../../components/ui/Card';

type OptionType = {
  value: string;
  label: string;
};

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
  const [multiLoadMoreValue, setMultiLoadMoreValue] = useState<OptionType[]>([]);

  const demoList = [
    {
      label: 'Select Basic',
      element: <SelectBasic options={options} value={basicValue} onChange={setBasicValue} />,
    },
    {
      label: 'Select Searchable',
      element: (
        <SelectSearchable options={options} value={searchableValue} onChange={setSearchableValue} />
      ),
    },
    {
      label: 'Select Multiple',
      element: (
        <SelectMultiple
          options={options}
          value={multiValue}
          onChange={(value) => setMultiValue([...value])}
        />
      ),
    },
    {
      label: 'Select Multiple Searchable',
      element: (
        <SelectMultipleSearchable
          options={options}
          value={multiSearchValue}
          onChange={(value) => setMultiSearchValue([...value])}
        />
      ),
    },
    {
      label: 'Select Creatable',
      element: (
        <SelectCreatable options={options} value={creatableValue} onChange={setCreatableValue} />
      ),
    },
    {
      label: 'Select Creatable Searchable',
      element: (
        <SelectCreatableSearchable
          options={options}
          value={creatableSearchValue}
          onChange={setCreatableSearchValue}
        />
      ),
    },
    {
      label: 'Select Searchable with Load More',
      element: (
        <SelectSearchableLoadMore
          loadOptions={loadMoreOptions}
          value={loadMoreValue}
          onChange={setLoadMoreValue}
        />
      ),
    },
    {
      label: 'Select Multiple Searchable with Load More',
      element: (
        <SelectMultipleSearchableLoadMore
          loadOptions={loadMoreOptions}
          value={multiLoadMoreValue}
          onChange={(value) => setMultiLoadMoreValue(Array.from(value))}
        />
      ),
    },
    {
      label: 'Drag & Drop Zone',
      element: <DragZone onDrop={(files: any) => console.log('Dropped files:', files)} />,
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
