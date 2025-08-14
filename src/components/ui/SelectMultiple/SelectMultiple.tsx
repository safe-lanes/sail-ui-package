import React from 'react';
import Select, { MultiValue } from 'react-select';
import { OptionType } from '../SelectBasic/SelectBasic';

interface SelectMultipleProps {
  options: OptionType[];
  value?: OptionType[];
  onChange: (value: MultiValue<OptionType>) => void;
  placeholder?: string;
}

const SelectMultiple: React.FC<SelectMultipleProps> = ({
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
      placeholder={placeholder || 'Select multiple...'}
    />
  );
};

export default SelectMultiple;
