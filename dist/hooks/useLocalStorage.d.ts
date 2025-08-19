/**
 * Storage service wrapper for localStorage and sessionStorage
 */
declare class StorageService {
    /**
     * Set item in localStorage
     */
    setLocal<T>(key: string, value: T): void;
    /**
     * Get item from localStorage
     */
    getLocal<T>(key: string, defaultValue?: T): T | null;
    /**
     * Remove item from localStorage
     */
    removeLocal(key: string): void;
    /**
     * Clear all localStorage
     */
    clearLocal(): void;
    /**
     * Set item in sessionStorage
     */
    setSession<T>(key: string, value: T): void;
    /**
     * Get item from sessionStorage
     */
    getSession<T>(key: string, defaultValue?: T): T | null;
    /**
     * Remove item from sessionStorage
     */
    removeSession(key: string): void;
    /**
     * Clear all sessionStorage
     */
    clearSession(): void;
    /**
     * Check if storage is available
     */
    isStorageAvailable(type: 'localStorage' | 'sessionStorage'): boolean;
    /**
     * Get storage usage information
     */
    getStorageInfo(type: 'localStorage' | 'sessionStorage'): {
        used: number;
        remaining: number;
        total: number;
    };
}
export declare const storageService: StorageService;
export {};
