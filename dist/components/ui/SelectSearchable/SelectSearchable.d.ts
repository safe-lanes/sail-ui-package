import React from "react";
import { SingleValue } from "react-select";
import { OptionType } from "../SelectBasic/SelectBasic";
interface SelectSearchableProps {
    options: OptionType[];
    value?: OptionType | null;
    onChange: (value: SingleValue<OptionType>) => void;
    placeholder?: string;
}
declare const SelectSearchable: React.FC<SelectSearchableProps>;
export default SelectSearchable;
