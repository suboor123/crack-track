import { Firebase } from '../../../core/firebase/firebase';
import { Model } from '../../../library/model/model';
import { QuestionSerializer } from '../../../library/serializer/question/question.serializer';
import { QuestionMiddleware } from '../redux/middleware/question.middleware';
import { IQuestionForm, Question } from './Question';

export class QuestionModel extends Model<Question> {
    public static readonly path = 'question';

    private static get questionCollection() {
        return Firebase.database<Question>(QuestionModel.path);
    }
    /**
     * Makes an instance of question model
     * @param question
     * @returns
     */
    static make(question: Question) {
        return new QuestionModel(question);
    }

    /**
     * Inserts new question to firebase realtime database
     * @param question
     */
    static async createQuestion(question: IQuestionForm) {
        const serializedQuestion = QuestionSerializer.for(question).serialize();
        await this.questionCollection.create(serializedQuestion);
    }

    /**
     * Sync question by topic
     * @param topicId
     * @returns
     */
    static async syncQuestionsByTopicId(
        topicId: string
    ): Promise<QuestionModel[]> {
        let questions = await this.questionCollection
            .syncWhere('topicId')
            .equalTo(topicId);
        if (questions) {
            QuestionMiddleware.attachTopicImage(questions);
            await QuestionMiddleware.attachTags(questions);
            await Promise.all(
                questions!.map(async (question) => {
                    await QuestionMiddleware.attachPublishBy(question);
                    return question;
                })
            );
            return questions.map((question) => QuestionModel.make(question));
        }
        return [];
    }

    /**
     * Sync question by ID
     * @param id
     * @returns
     */
    static async syncById(id: string) {
        let question = await this.questionCollection.sync(id);
        QuestionMiddleware.attachTopicImage([question]);
        await QuestionMiddleware.restructureComments([question]);
        await QuestionMiddleware.attachTags([question]);
        await QuestionMiddleware.attachPublishBy(question);
        return this.make({ ...question, uid: id });
    }

    /**
     * Sync question by user
     * @param topicId
     * @returns
     */
    static async syncQuestionsByUserId(
        userId: string
    ): Promise<QuestionModel[]> {
        let questions = await this.questionCollection
            .syncWhere('createdBy')
            .equalTo(userId);
        if (questions) {
            QuestionMiddleware.attachTopicImage(questions);
            await QuestionMiddleware.attachTags(questions);
            await Promise.all(
                questions!.map(async (question) => {
                    await QuestionMiddleware.attachPublishBy(question);
                    return question;
                })
            );
            return questions.map((question) => QuestionModel.make(question));
        }
        return [];
    }
}
