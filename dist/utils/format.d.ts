/**
 * Format a date into a readable string
 */
export declare function formatDate(date: Date | string, pattern?: string): string;
/**
 * Format a date relative to now (e.g., "2 hours ago")
 */
export declare function formatRelativeTime(date: Date | string): string;
/**
 * Format a number with thousand separators
 */
export declare function formatNumber(num: number, locale?: string): string;
/**
 * Format a number as currency
 */
export declare function formatCurrency(amount: number, currency?: string, locale?: string): string;
/**
 * Format bytes into human readable format
 */
export declare function formatBytes(bytes: number, decimals?: number): string;
/**
 * Truncate text with ellipsis
 */
export declare function truncateText(text: string, maxLength: number): string;
