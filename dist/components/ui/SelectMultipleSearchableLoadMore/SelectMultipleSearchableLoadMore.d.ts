import React from 'react';
import { MultiValue } from 'react-select';
import { OptionType } from '../SelectBasic/SelectBasic';
export interface SelectMultipleSearchableLoadMoreProps {
    loadOptions: (inputValue: string, callback: (options: OptionType[]) => void) => void;
    value?: OptionType[];
    onChange: (value: MultiValue<OptionType>) => void;
    placeholder?: string;
}
export declare const SelectMultipleSearchableLoadMore: React.FC<SelectMultipleSearchableLoadMoreProps>;
