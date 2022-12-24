import { TAG_PATH } from "../../../../components/Tags/tag.model";
import { ResponseParser } from "../../../../core/firebase/database/responseParser";
import { Firebase } from "../../../../core/firebase/firebase";
import { store } from "../../../../core/redux/store/store";
import { PLACEHOLDER_IMAGE } from "../../../../library/constant/app.constant";
import { Topic } from "../../../topics/model/topic";
import { TopicState } from "../../../topics/redux/reducer/topic.reducer";
import { UserModel } from "../../../user/model/user.model";
import { UserState } from "../../../user/redux/reducer/user.reducer";
import { Question } from "../../model/Question";
import { Comment } from "../../model/Question";

export class QuestionMiddleware {
  /**
   * Attaches user's object
   * @param question
   * @returns
   */
  static async attachPublishBy(question: Question) {
    const userId = question.createdBy;
    const user = await UserModel.syncUser(userId);
    if (user) question.publishedBy = user;
    return user;
  }

  /**
   * Attached tag names
   * @param questions
   */
  static async attachTags(questions: Question[]) {
    const tagsList = (await Firebase.database(TAG_PATH).syncAll()) as any;
    questions.map((question) => {
      question.tags.map((tagId, index) => {
        question.tags[index] =
          tagsList.find((tag: any) => tag.uid === tagId).tagName || "";
      });
    });
  }

  static attachTopicImage(questions: Question[]) {
    const topicsState: TopicState = store.getState().topics;
    const topicList: Topic[] = topicsState.topicList;
    questions.forEach((question) => {
      question.topicImage =
        topicList.find((topic) => topic.uid === question.topicId)?.imageUrl ||
        PLACEHOLDER_IMAGE;
    });
  }

  static async restructureComments(questions: Question[]) {
    questions.forEach((question) => {
      if (question.comments) {
        question.comments = new ResponseParser(question.comments).parse();
      }
    });

    await Promise.all(
      questions.map(async (question) => {
        await this.attachUserToComments(question.comments || []);
        return question;
      })
    );
  }

  static async attachUserToComments(comments: Comment[]) {
    await UserModel.syncAll();
    const userState: UserState = store.getState().user;
    comments.forEach((comment) => {
      comment.commentByUser = userState.users.find(
        (user) => user.uid === comment.commentedBy
      );
    });
  }
}
