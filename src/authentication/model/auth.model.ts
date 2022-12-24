import { User, UserForm } from '../../domain/user/model/user';
import { ResponseType } from '../../core/firebase/auth/auth.model';
import { Firebase } from '../../core/firebase/firebase';
import { Toastr } from '../../library/notifier/toastr';
import { UserModel } from '../../domain/user/model/user.model';

export class AuthModel {
    /**
     * Handles user creation
     * @param values
     *
     */
    static async createUser(values: UserForm): Promise<User | undefined> {
        const { email, password } = values;
        const registerUser = await Firebase.auth.register(email, password);

        if (registerUser.status === ResponseType.failure) {
            Toastr.fire(
                registerUser.message || 'Something went wrong!'
            ).error();
        }

        if (registerUser && registerUser.uid) {
            const user = UserModel.serializer(values, registerUser.uid);
            Firebase.database<User>(UserModel.path).create(user);
            await UserModel.setCurrentUser(user);
            return user;
        }
    }

    /**
     * Authenticate user
     * @param email
     * @param password
     * @returns
     *
     */
    public static async authenticateUser(email: string, password: string) {
        if (!email || !password) return;
        //Firebase authentication
        const loggedinUser = await Firebase.auth.login(email, password);
        if (loggedinUser.status === 'failure') {
            Toastr.fire(
                loggedinUser.message || 'Something went wrong!'
            ).error();
            return;
        }

        const user = await UserModel.syncUser(loggedinUser.uid!);
        await UserModel.setCurrentUser(user);
        return user;
    }
}
