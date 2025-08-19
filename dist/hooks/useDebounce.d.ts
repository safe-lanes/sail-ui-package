/**
 * Hook to debounce a value
 */
export declare function useDebounce<T>(value: T, delay: number): T;
/**
 * Hook to debounce a callback function
 */
export declare function useDebouncedCallback<T extends (...args: any[]) => any>(callback: T, delay: number): T;
/**
 * Hook for debounced search functionality
 */
export declare function useDebouncedSearch(searchFn: (query: string) => void, delay?: number): {
    query: string;
    setQuery: import("react").Dispatch<import("react").SetStateAction<string>>;
    debouncedQuery: string;
};
