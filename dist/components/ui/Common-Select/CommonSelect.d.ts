import { Props as SelectProps } from 'react-select';
export type OptionType = {
    label: string;
    value: string;
};
export type SelectVariant = 'select-basic' | 'select-searchable' | 'select-creatable' | 'select-multiple' | 'select-multiple-searchable' | 'select-creatable-multiple' | 'select-load-more';
export interface CommonSelectProps<IsMulti extends boolean = false> extends Omit<SelectProps<OptionType, IsMulti>, 'options' | 'onChange'> {
    variant?: SelectVariant;
    options?: OptionType[];
    onChange: (value: IsMulti extends true ? OptionType[] | null : OptionType | null) => void;
    loadMoreOptions?: () => Promise<OptionType[]>;
    [key: string]: unknown;
}
/**
 * Fully typed and configurable select
 */
export declare const CommonSelect: <IsMulti extends boolean = false>({ variant, options, onChange, loadMoreOptions, ...rest }: CommonSelectProps<IsMulti>) => import("react/jsx-runtime").JSX.Element;
