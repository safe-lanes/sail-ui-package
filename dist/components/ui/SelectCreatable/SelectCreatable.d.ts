import React from "react";
import { SingleValue } from "react-select";
import { OptionType } from "../SelectBasic/SelectBasic";
interface SelectCreatableProps {
    options: OptionType[];
    value?: OptionType | null;
    onChange: (value: SingleValue<OptionType>) => void;
    placeholder?: string;
}
declare const SelectCreatable: React.FC<SelectCreatableProps>;
export default SelectCreatable;
