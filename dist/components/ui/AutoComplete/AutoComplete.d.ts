import React from 'react';
export interface AutoCompleteProps {
    suggestions: string[];
    onSelect: (value: string) => void;
}
export declare const AutoComplete: React.FC<AutoCompleteProps>;
