import React from 'react';
import AsyncSelect from 'react-select/async';
import { MultiValue } from 'react-select';
import { OptionType } from '../SelectBasic/SelectBasic';

export interface SelectMultipleSearchableLoadMoreProps {
  loadOptions: (inputValue: string, callback: (options: OptionType[]) => void) => void;
  value?: OptionType[];
  onChange: (value: MultiValue<OptionType>) => void;
  placeholder?: string;
}

export const SelectMultipleSearchableLoadMore: React.FC<SelectMultipleSearchableLoadMoreProps> = ({
  loadOptions,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      isMulti
      value={value}
      onChange={onChange}
      placeholder={placeholder || 'Search & select multiple with load more...'}
    />
  );
};
