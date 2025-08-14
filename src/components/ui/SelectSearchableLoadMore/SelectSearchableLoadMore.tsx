import React from 'react';
import AsyncSelect from 'react-select/async';
import { OptionType } from '../SelectBasic/SelectBasic';

interface SelectSearchableLoadMoreProps {
  loadOptions: (inputValue: string, callback: (options: OptionType[]) => void) => void;
  value?: OptionType | null;
  onChange: (value: OptionType | null) => void;
  placeholder?: string;
}

const SelectSearchableLoadMore: React.FC<SelectSearchableLoadMoreProps> = ({
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
      value={value}
      onChange={onChange}
      placeholder={placeholder || 'Search with load more...'}
    />
  );
};

export default SelectSearchableLoadMore;
export type {SelectSearchableLoadMoreProps}