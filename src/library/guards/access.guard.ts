import { User } from '../../domain/user/model/user';
import { UserModel } from '../../domain/user/model/user.model';
import { store } from '../../core/redux/store/store';

export class AccessGuard {
    private constructor() {}

    private static get currentUserModel(): UserModel | undefined {
        const { currentUser } = store.getState().user;
        return currentUser ? UserModel.make(currentUser as User) : currentUser;
    }

    public static get levelAdmin(): boolean {
        return (
            this.currentUserModel !== undefined && this.currentUserModel.isAdmin
        );
    }

    public static get levelUser(): boolean {
        return this.currentUserModel !== undefined;
    }
}
