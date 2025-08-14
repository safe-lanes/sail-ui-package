import React from 'react';
import { SingleValue } from 'react-select';
import { OptionType } from '../SelectBasic/SelectBasic';
export interface SelectCreatableSearchableProps {
    options: OptionType[];
    value?: OptionType | null;
    onChange: (value: SingleValue<OptionType>) => void;
    placeholder?: string;
}
export declare const SelectCreatableSearchable: React.FC<SelectCreatableSearchableProps>;
