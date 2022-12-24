import { FirebaseApp } from 'firebase/app';
import {
    Database,
    getDatabase,
    ref,
    set,
    get,
    child,
    push,
    update,
    query,
    orderByChild,
    equalTo,
    remove,
} from 'firebase/database';
import { ResponseParser } from './responseParser';

type RealtimeDatabase = Database;

interface HasUid {
    uid?: string;
}

export class FirebaseDatabase<T extends HasUid> {
    /**
     * Holds the instance of firebase realtime database
     */
    database: RealtimeDatabase;

    constructor(private firebaseApp: FirebaseApp, private path: string) {
        this.database = getDatabase(this.firebaseApp);
    }

    /**
     * Insert a record in firebase realtime database
     * @param entity
     *
     */
    create(entity: T) {
        if (entity.uid) {
            set(ref(this.database, this.path + '/' + entity.uid), entity);
        } else {
            push(ref(this.database, this.path), entity);
        }
    }

    /**
     * Insert multiple records in firebase realtime database
     * @param enities
     */
    createMultiple(enities: T[]) {
        enities.forEach((entity) => {
            this.create(entity);
        });
    }

    /**
     * updates the value of particular property in a collection
     * @param entity
     *
     */
    set<K extends keyof T>(uid: string, key: K, entity: T[K]) {
        if (uid) {
            set(ref(this.database, this.path + '/' + uid + '/' + key), entity);
        }
    }

    /**
     * Updates mutliple values in a collection
     * @param uid
     * @param entity
     *
     */
    update<K extends keyof T>(uid: string, entity: Partial<T>) {
        if (uid) {
            const valuesToUpdate: K[] = Object.keys(entity) as K[];
            valuesToUpdate.forEach((key: K) => {
                this.set(uid, key, entity[key] as any);
            });
        }
    }

    delete(uid: string) {
        remove(ref(this.database, this.path + '/' + uid));
    }

    deleteChild(enetityId: string, childId: string) {
        const path = this.path + '/' + childId;
        remove(ref(this.database, path));
    }

    /**
     * Sync data from a collection by its id
     * @param id
     * @returns
     */
    async sync(id: string) {
        const refs = ref(this.database);
        const path = `${this.path}/${id}`;
        const snapshot = await get(child(refs, path));
        if (snapshot.exists()) {
            return snapshot.val();
        }
        return undefined;
    }

    /**
     * Sync entity collection by a given condition
     * @param key
     * @returns
     */
    syncWhere<K extends keyof T>(key: K) {
        const refs = ref(this.database, `${this.path}/`);
        const childRef = `${key}`;
        return {
            equalsTo: '',
            equalTo: function (val: string) {
                this.equalsTo = val;
                return this._exec();
            },
            _exec: async function () {
                const queryConstraints = [
                    orderByChild(childRef),
                    equalTo(this.equalsTo as any),
                ];
                const snapshot = await get(query(refs, ...queryConstraints));
                if (snapshot.exists()) {
                    return new ResponseParser(snapshot.val()).parse();
                }
                return undefined;
            },
        };
    }

    /**
     * Sync the collection of entity
     * @returns
     */
    async syncAll(): Promise<T[]> {
        const refs = ref(this.database);
        const path = `${this.path}/`;
        const snapshot = await get(child(refs, path));
        if (snapshot.exists()) {
            return new ResponseParser(snapshot.val()).parse();
        }
        return [];
    }
}
