import React from "react";
import { MultiValue } from "react-select";
import { OptionType } from "../SelectBasic/SelectBasic";
interface SelectMultipleProps {
    options: OptionType[];
    value?: OptionType[];
    onChange: (value: MultiValue<OptionType>) => void;
    placeholder?: string;
}
declare const SelectMultiple: React.FC<SelectMultipleProps>;
export default SelectMultiple;
