import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { SingleValue } from 'react-select';
import { OptionType } from '../SelectBasic/SelectBasic';

export interface SelectCreatableProps {
  options: OptionType[];
  value?: OptionType | null;
  onChange: (value: SingleValue<OptionType>) => void;
  placeholder?: string;
}

export const SelectCreatable: React.FC<SelectCreatableProps> = ({
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
      placeholder={placeholder || 'Create or select...'}
    />
  );
};
