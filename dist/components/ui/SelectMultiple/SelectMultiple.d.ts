import React from 'react';
import { MultiValue } from 'react-select';
import { OptionType } from '../SelectBasic/SelectBasic';
export interface SelectMultipleProps {
    options: OptionType[];
    value?: OptionType[];
    onChange: (value: MultiValue<OptionType>) => void;
    placeholder?: string;
}
export declare const SelectMultiple: React.FC<SelectMultipleProps>;
