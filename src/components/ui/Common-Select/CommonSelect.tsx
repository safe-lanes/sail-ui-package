// components/Selects.tsx
import Select, { Props as SelectProps } from "react-select";
import CreatableSelect from "react-select/creatable";

export type OptionType = {
    label: string;
    value: string;
};

export type SelectVariant =
    | "select-basic"
    | "select-searchable"
    | "select-creatable"
    | "select-multiple"
    | "select-multiple-searchable"
    | "select-creatable-multiple"
    | "select-load-more";

export interface CommonSelectProps<IsMulti extends boolean = false>
    extends Omit<SelectProps<OptionType, IsMulti>, "options" | "onChange"> {
    variant?: SelectVariant;
    options?: OptionType[];
    onChange: (
        value: IsMulti extends true
            ? OptionType[] | null
            : OptionType | null
    ) => void;
    loadMoreOptions?: () => Promise<OptionType[]>; // for load more
    [key: string]: unknown; // allow extra props
}

/**
 * Fully typed and configurable select
 */
export const CommonSelect = <IsMulti extends boolean = false>({
    variant = "select-basic",
    options,
    onChange,
    loadMoreOptions,
    ...rest
}: CommonSelectProps<IsMulti>) => {
    const isMulti = variant.includes("select-multiple") as IsMulti;

    const baseProps: SelectProps<OptionType, IsMulti> = {
        isMulti,
        options,
        isSearchable: variant.includes("select-searchable"),
        onChange: (val) =>
            onChange(val as IsMulti extends true
                ? OptionType[] | null
                : OptionType | null),
        ...rest,
    };

    if (variant.includes("select-creatable")) {
        return <CreatableSelect {...baseProps} />;
    }

    if (variant.includes("select-load-more") && loadMoreOptions) {
        return (
            <Select
                {...baseProps}
                onMenuScrollToBottom={async () => {
                    const newOptions = await loadMoreOptions();
                    baseProps.options = [
                        ...(baseProps.options || []),
                        ...newOptions,
                    ];
                }}
            />
        );
    }

    return <Select {...baseProps} />;
};
