import React from 'react';
import { MultiValue } from 'react-select';
import { OptionType } from '../SelectBasic/SelectBasic';
interface SelectMultipleSearchableProps {
    options: OptionType[];
    value?: OptionType[];
    onChange: (value: MultiValue<OptionType>) => void;
    placeholder?: string;
}
declare const SelectMultipleSearchable: React.FC<SelectMultipleSearchableProps>;
export default SelectMultipleSearchable;
