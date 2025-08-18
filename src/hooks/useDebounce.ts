import { useState, useEffect } from "react";

/**
 * Hook to debounce a value
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook to debounce a callback function
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const [debouncedCallback, setDebouncedCallback] = useState<T>();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCallback(() => callback);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);

  return (debouncedCallback || callback) as T;
}

/**
 * Hook for debounced search functionality
 */
export function useDebouncedSearch(
  searchFn: (query: string) => void,
  delay: number = 300
) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, delay);

  useEffect(() => {
    if (debouncedQuery) {
      searchFn(debouncedQuery);
    }
  }, [debouncedQuery, searchFn]);

  return {
    query,
    setQuery,
    debouncedQuery,
  };
}
