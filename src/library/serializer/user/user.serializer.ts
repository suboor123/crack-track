import { User, UserForm, UserRole } from "../../../domain/user/model/user";
import { Serializer } from "../serializer";

export class UserSerializer extends Serializer<UserForm, User> {
  /**
   * Makes an instance of user Serializer
   * @param formValues
   * @returns
   *
   */
  static for(formValues: UserForm, uid?: string) {
    return new UserSerializer(formValues, uid);
  }

  /**
   * Serialize user and return serialized user object
   * @returns
   *
   */
  protected serializer(): User {
    const { email, aboutMe, username, experience, programmingLanguages } =
      this.formValues;
    return {
      uid: this.id,
      email,
      aboutMe,
      username,
      experience: parseInt(experience as string),
      programmingLanguages,
      role: UserRole.User,
      image: "",
    };
  }
}
