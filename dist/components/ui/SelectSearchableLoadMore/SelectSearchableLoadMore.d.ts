import React from "react";
import { OptionType } from "../SelectBasic/SelectBasic";
interface SelectSearchableLoadMoreProps {
    loadOptions: (inputValue: string, callback: (options: OptionType[]) => void) => void;
    value?: OptionType | null;
    onChange: (value: OptionType | null) => void;
    placeholder?: string;
}
declare const SelectSearchableLoadMore: React.FC<SelectSearchableLoadMoreProps>;
export default SelectSearchableLoadMore;
