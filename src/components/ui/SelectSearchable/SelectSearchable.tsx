import React from 'react';
import Select, { SingleValue } from 'react-select';
import { OptionType } from '../SelectBasic/SelectBasic';

interface SelectSearchableProps {
  options: OptionType[];
  value?: OptionType | null;
  onChange: (value: SingleValue<OptionType>) => void;
  placeholder?: string;
}

const SelectSearchable: React.FC<SelectSearchableProps> = ({
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
      isSearchable
      placeholder={placeholder || 'Search...'}
    />
  );
};

export default SelectSearchable;
