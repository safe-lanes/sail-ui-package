import React from 'react';
import Select, { SingleValue } from 'react-select';

export interface OptionType {
  value: string;
  label: string;
}

interface SelectBasicProps {
  options: OptionType[];
  value?: OptionType | null;
  onChange: (value: SingleValue<OptionType>) => void;
  placeholder?: string;
}

const SelectBasic: React.FC<SelectBasicProps> = ({ options, value, onChange, placeholder }) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder || 'Select...'}
    />
  );
};

export default SelectBasic;
