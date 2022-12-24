import { Firebase } from "../../../core/firebase/firebase";
import { Callback } from "../../../library/model/eventEmitter";
import { Model } from "../../../library/model/model";
import { Toastr } from "../../../library/notifier/toastr";
import { UserSerializer } from "../../../library/serializer/user/user.serializer";
import { store } from "../../../core/redux/store/store";
import {
  removeCurrentUser,
  setUser,
  setUsers,
  updateCurrentUser,
} from "../redux/action/user.action";
import { User, UserForm, UserRole } from "./user";

export class UserModel extends Model<User> {
  public static readonly path = "user";

  /**
   * Makes an instance of user model
   * @param user
   * @returns
   */
  static make(user: User): UserModel {
    return new UserModel(user);
  }

  /**
   * Serializes user object
   * @param formValues
   * @param uid
   * @returns
   */
  static serializer(formValues: UserForm, uid: string): User {
    return UserSerializer.for(formValues, uid).serialize();
  }

  /***
   * Set current user to redux state and local storage
   */
  public static async setCurrentUser(user: User) {
    localStorage.setItem("uid", user.uid!);
    store.dispatch(setUser(user));
  }

  /**
   * Sync user details
   * @param id
   * @returns
   */
  public static async syncUser(id: string): Promise<User> {
    const user = await Firebase.database(this.path).sync(id);
    return user;
  }

  /**
   * Describes current user authenticated state
   * @returns {boolean}
   */
  public static isUserAuthenticated = (): boolean => {
    const uid = localStorage.getItem("uid");
    return uid !== undefined;
  };

  public uploadImage(file: File, callback: Callback) {
    return Firebase.storage(UserModel.path + "/" + this.pluck("uid")).upload(
      file,
      callback
    );
  }

  async updateUserImage(imageUrl: string) {
    if (!this.pluck("uid")) {
      Toastr.fire("You are unauthenticated").error();
      return;
    }

    /** Update image url on firebase database  */
    Firebase.database<User>(UserModel.path).set(
      this.pluck("uid")!,
      "image",
      imageUrl
    );

    /** Update image url in redux state  */
    store.dispatch(
      updateCurrentUser({
        image: imageUrl,
      })
    );
  }

  async updateMe(userData: Partial<User>) {
    if (!this.pluck("uid")) {
      Toastr.fire("You are unauthenticated").error();
      return;
    }

    Firebase.database<User>(UserModel.path).update(this.pluck("uid")!, {
      ...userData,
    });

    store.dispatch(
      updateCurrentUser({
        ...userData,
      })
    );
  }

  static async syncAll() {
    const users = await Firebase.database<User>(UserModel.path).syncAll();
    store.dispatch(
      setUsers(users) as any
    );
  }

  public static async logoutMe() {
    localStorage.removeItem("uid");
    store.dispatch(removeCurrentUser());
  }

  get firstName() {
    return this.pluck("username").split(" ")[0];
  }

  get isAdmin() {
    return this.pluck("role") === UserRole.Admin;
  }

  get hasProfileImage() {
    return this.pluck("image") && this.pluck("image") !== "";
  }
}
