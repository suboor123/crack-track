
export enum LocalStorageItems {
    user_id = "uid"
}


//TODO: Find better solution

export class LocalStore {

    /**
     * Set item in local storgae
     * @param name 
     * @param data 
     * 
     */
    static set(
        name: LocalStorageItems,
        data: string
    ) {
        localStorage.setItem(name, data)
    }


    /**
     * Get item from local storage
     * @param name 
     * @returns 
     * 
     */
    static get(name: LocalStorageItems) {
        return localStorage.getItem(name)
    }


    /**
     * Remove item from local storage
     * @param name 
     * 
     */
    static remove(name: LocalStorageItems) {
        localStorage.removeItem(name)
    }
}