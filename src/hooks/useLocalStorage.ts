/**
 * Storage service wrapper for localStorage and sessionStorage
 */
class StorageService {
  /**
   * Set item in localStorage
   */
  setLocal<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting localStorage item "${key}":`, error);
    }
  }

  /**
   * Get item from localStorage
   */
  getLocal<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        return defaultValue ?? null;
      }
      return JSON.parse(item);
    } catch (error) {
      console.error(`Error getting localStorage item "${key}":`, error);
      return defaultValue ?? null;
    }
  }

  /**
   * Remove item from localStorage
   */
  removeLocal(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage item "${key}":`, error);
    }
  }

  /**
   * Clear all localStorage
   */
  clearLocal(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }

  /**
   * Set item in sessionStorage
   */
  setSession<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting sessionStorage item "${key}":`, error);
    }
  }

  /**
   * Get item from sessionStorage
   */
  getSession<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = sessionStorage.getItem(key);
      if (item === null) {
        return defaultValue ?? null;
      }
      return JSON.parse(item);
    } catch (error) {
      console.error(`Error getting sessionStorage item "${key}":`, error);
      return defaultValue ?? null;
    }
  }

  /**
   * Remove item from sessionStorage
   */
  removeSession(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing sessionStorage item "${key}":`, error);
    }
  }

  /**
   * Clear all sessionStorage
   */
  clearSession(): void {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing sessionStorage:', error);
    }
  }

  /**
   * Check if storage is available
   */
  isStorageAvailable(type: 'localStorage' | 'sessionStorage'): boolean {
    try {
      const storage = window[type];
      const test = '__storage_test__';
      storage.setItem(test, test);
      storage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get storage usage information
   */
  getStorageInfo(type: 'localStorage' | 'sessionStorage'): {
    used: number;
    remaining: number;
    total: number;
  } {
    if (!this.isStorageAvailable(type)) {
      return { used: 0, remaining: 0, total: 0 };
    }

    const storage = window[type];
    let used = 0;

    for (let key in storage) {
      if (storage.hasOwnProperty(key)) {
        used += storage[key].length + key.length;
      }
    }

    // Most browsers have a 5MB limit for localStorage
    const total = 5 * 1024 * 1024; // 5MB in bytes
    const remaining = total - used;

    return { used, remaining, total };
  }
}

export const storageService = new StorageService();
