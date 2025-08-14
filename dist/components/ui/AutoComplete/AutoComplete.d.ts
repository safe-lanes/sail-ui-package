import React from 'react';
interface AutoCompleteProps {
    suggestions: string[];
    onSelect: (value: string) => void;
}
declare const AutoComplete: React.FC<AutoCompleteProps>;
export default AutoComplete;
