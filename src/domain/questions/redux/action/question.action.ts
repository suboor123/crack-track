import { Question } from '../../model/Question';
import { SELECT_QUESTION, SET_QUESTIONS } from '../constants/question.contant';

export const setQuestions = (questions: Question[]) => ({
    type: SET_QUESTIONS,
    payload: questions,
});

export const selectQuestion = (question: Question) => ({
    type: SELECT_QUESTION,
    payload: question,
});
