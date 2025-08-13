import React from "react";
import { SingleValue } from "react-select";
import { OptionType } from "../SelectBasic/SelectBasic";
interface SelectCreatableSearchableProps {
    options: OptionType[];
    value?: OptionType | null;
    onChange: (value: SingleValue<OptionType>) => void;
    placeholder?: string;
}
declare const SelectCreatableSearchable: React.FC<SelectCreatableSearchableProps>;
export default SelectCreatableSearchable;
