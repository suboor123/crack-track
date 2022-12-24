import { Firebase } from "../../../core/firebase/firebase";
import { Model } from "../../../library/model/model";
import { Comment } from "./Question";
import { QuestionModel } from "./question.model";

export class CommentModel extends Model<Comment> {
  public static readonly path = "comments";

  private static buildPath(questionId: string): string {
    return `${QuestionModel.path}/${questionId}/${CommentModel.path}`;
  }

  private static commentCollection(questionId: string) {
    return Firebase.database<Comment>(this.buildPath(questionId));
  }

  /**
   * Makes an instance of comment model
   * @param comment
   * @returns
   */
  static make(comment: Comment) {
    return new CommentModel(comment);
  }

  /**
   * Insert a comment to question
   * @param questionId
   * @param comment
   */
  static async addComment(questionId: string, comment: Comment) {
    await this.commentCollection(questionId).create(comment);
  }

  static async deleteComment(questionId: string, commentId: string) {
    await this.commentCollection(questionId).deleteChild(questionId, commentId);
  }
}
