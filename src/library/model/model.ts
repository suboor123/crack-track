export class Model<T> {

    private modelEntity:T;
    
    constructor(entity: T) {
        this.modelEntity = entity
     }

    pluck<K extends keyof T>(key: K) {
        return this.modelEntity[key]
    }

    pluckAll() {
        return this.modelEntity;
    }

    set<K extends keyof T>(key: K, value: T[K]) {
        this.modelEntity[key] = value
    }
}
