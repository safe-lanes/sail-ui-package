import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { SingleValue } from 'react-select';
import { OptionType } from '../SelectBasic/SelectBasic';

interface SelectCreatableSearchableProps {
  options: OptionType[];
  value?: OptionType | null;
  onChange: (value: SingleValue<OptionType>) => void;
  placeholder?: string;
}

const SelectCreatableSearchable: React.FC<SelectCreatableSearchableProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <CreatableSelect
      options={options}
      value={value}
      onChange={onChange}
      isSearchable
      placeholder={placeholder || 'Search, create or select...'}
    />
  );
};

export default SelectCreatableSearchable;
