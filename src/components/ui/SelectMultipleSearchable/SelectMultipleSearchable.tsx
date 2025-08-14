import React from 'react';
import Select, { MultiValue } from 'react-select';
import { OptionType } from '../SelectBasic/SelectBasic';

interface SelectMultipleSearchableProps {
  options: OptionType[];
  value?: OptionType[];
  onChange: (value: MultiValue<OptionType>) => void;
  placeholder?: string;
}

const SelectMultipleSearchable: React.FC<SelectMultipleSearchableProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      isMulti
      isSearchable
      placeholder={placeholder || 'Search & select multiple...'}
    />
  );
};

export default SelectMultipleSearchable;
