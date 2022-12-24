import { store } from "../../../core/redux/store/store";
import {
  IQuestionForm,
  Question,
  QuestionTags,
} from "../../../domain/questions/model/Question";
import { UserState } from "../../../domain/user/redux/reducer/user.reducer";
import { Serializer } from "../serializer";

export class QuestionSerializer extends Serializer<IQuestionForm, Question> {
  /**
   * Makes an instance of question Serializer
   * @param formValues
   * @returns
   *
   */
  static for(formValues: IQuestionForm, uid?: string) {
    return new QuestionSerializer(formValues, uid);
  }

  /**
   * Serialize user and return serialized question object
   * @returns
   *
   */
  protected serializer(): Question {
    const question = this.formValues;
    const user: UserState = store.getState().user;
    return {
      title: question.title,
      content: question.content,
      topicId: question.topicId || '',
      createdBy: user.currentUser?.uid!,
      createdAt: new Date().toISOString(),
      tags: question.tags as unknown as QuestionTags[],
    };
  }
}
