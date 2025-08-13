import React from "react";
import { SingleValue } from "react-select";
export interface OptionType {
    value: string;
    label: string;
}
interface SelectBasicProps {
    options: OptionType[];
    value?: OptionType | null;
    onChange: (value: SingleValue<OptionType>) => void;
    placeholder?: string;
}
declare const SelectBasic: React.FC<SelectBasicProps>;
export default SelectBasic;
