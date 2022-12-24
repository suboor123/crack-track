import { Question } from '../../../domain/questions/model/Question';
import { QuestionModel } from '../../../domain/questions/model/question.model';
import { UserModel } from '../../../domain/user/model/user.model';
import { CanMake, Deserializer, DeserializerStack } from '../deserializer';

export class QuestionDeserializer extends Deserializer<
    Question,
    QuestionModel
> {
    static make(
        question: Question,
        makeModel: CanMake<Question, QuestionModel>
    ) {
        return new QuestionDeserializer(question, makeModel);
    }

    protected deserializers: DeserializerStack<QuestionModel> = {};
}
