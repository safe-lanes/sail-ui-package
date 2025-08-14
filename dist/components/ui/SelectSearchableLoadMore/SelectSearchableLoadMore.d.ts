import React from 'react';
import { OptionType } from '../SelectBasic/SelectBasic';
export interface SelectSearchableLoadMoreProps {
    loadOptions: (inputValue: string, callback: (options: OptionType[]) => void) => void;
    value?: OptionType | null;
    onChange: (value: OptionType | null) => void;
    placeholder?: string;
}
export declare const SelectSearchableLoadMore: React.FC<SelectSearchableLoadMoreProps>;
