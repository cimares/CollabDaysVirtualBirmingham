import { KeyValuePair } from "../models/KeyValuePair";
import { StorageType } from "../models/StorageType";

export interface IStoreObject<T> {
  value: T;
  expiration: string;
}

export class ClientStorageService {
  private static localStore = window.localStorage;
  private static sessionStore = window.sessionStorage;

  /**
   * Retrieve an item from the storage
   * @param key
   * @param type
   */
  public static get<T>(key: string, type: StorageType = StorageType.localStorage): T | undefined {
    // Check if local storage exists
    if (!this.localStore && type === StorageType.localStorage) {
      return undefined;
    }

    // Check if session storage exists
    if (!this.sessionStore && type === StorageType.sessionStorage) {
      return undefined;
    }

    // Retrieve object and check if it exists
    const o: string | null = type === StorageType.localStorage ? this.localStore.getItem(key) : this.sessionStore.getItem(key);
    if (o === null) {
      return undefined;
    }

    const storeObj: IStoreObject<T> = JSON.parse(o);
    if (new Date(storeObj.expiration) <= new Date()) {
      this.delete(key, type);
      return undefined;
    } else {
      return storeObj.value as T;
    }
  }

  /**
   * Create a new item in the store
   * @param key
   * @param o
   * @param type
   * @param expire
   */
  public static put(key: string, o: any, type: StorageType = StorageType.localStorage, expire?: Date): void {
    try {
      if (this.localStore && type === StorageType.localStorage) {
        this.localStore.setItem(key, this.createPersistable(o, expire));
      }

      if (this.sessionStore && type === StorageType.sessionStorage) {
        this.sessionStore.setItem(key, this.createPersistable(o, expire));
      }
    } catch (err) {
      console.error(`[ClientStorageService]: Err='${err.message}'`);
    }
  }

  /**
   * Delete an item from the storage
   * @param key
   * @param type
   */
  public static delete(key: string, type: StorageType = StorageType.localStorage): void {
    if (this.localStore && type === StorageType.localStorage) {
      this.localStore.removeItem(key);
    }

    if (this.sessionStore && type === StorageType.sessionStorage) {
      this.sessionStore.removeItem(key);
    }
  }

  /**
   * Retrieve all the storage keys starting with a key
   *
   * @param key
   * @param type
   */
  public static getAllKeysStartingWith(key: string, type: StorageType = StorageType.localStorage): KeyValuePair[] {
    const storage = type === StorageType.localStorage ? this.localStore : this.sessionStore;

    if (storage) {
      let allKeys = [];
      for (let i = 0; i < storage.length; i++) {
        const crntKey = storage.key(i);
        // Check if key starts with "Valo:SecuredLinks
        if (crntKey && crntKey.indexOf(key) === 0) {
          allKeys.push({
            key: crntKey,
            value: storage.getItem(crntKey)
          });
        }
      }
      return allKeys;
    }
    return [];
  }

  /**
   * Delete all keys starting with a string
   *
   * @param key
   * @param type
   */
  public static deleteKeysStartingWith(key: string, type: StorageType = StorageType.localStorage): any {
    if (this.localStore && type === StorageType.localStorage) {
      let removeKeys = [];
      for (let i = 0; i < this.localStore.length; i++) {
        const crntKey = localStorage.key(i);
        // Check if key starts with "Valo:SecuredLinks
        if (crntKey && crntKey.indexOf(key) === 0) {
          removeKeys.push(crntKey);
        }
      }
      // Remove all the keys
      for (const rKey of removeKeys) {
        this.localStore.removeItem(rKey);
      }
    }

    if (this.sessionStore && type === StorageType.sessionStorage) {
      let removeKeys = [];
      for (let i = 0; i < this.sessionStore.length; i++) {
        const crntKey = this.sessionStore.key(i);
        // Check if key starts with "Valo:SecuredLinks
        if (crntKey && crntKey.indexOf(key) === 0) {
          removeKeys.push(crntKey);
        }
      }
      // Remove all the keys
      for (const rKey of removeKeys) {
        this.sessionStore.removeItem(rKey);
      }
    }
  }

  /**
   * Creates a presistable object for the store
   * @param o
   * @param expire
   */
  private static createPersistable(o: any, expire?: Date): string {
    if (typeof expire === "undefined") {
      // Create expiration date - 1 hour
      expire = new Date();
      expire.setTime(expire.getTime() + 1 * 3600000);
    }

    return JSON.stringify({ expiration: expire, value: o });
  }
}
