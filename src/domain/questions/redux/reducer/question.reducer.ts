import { SELECT_QUESTION, SET_QUESTIONS } from "../constants/question.contant";
import { SET_CURRENT_USER } from "../../../user/redux/constants/user.constant";
import { Question } from "../../model/Question";

  
  export interface QuestionState {
    questions: Question[];
    selectedQuestion: Question | undefined
  }
  
  const INITIAL_STATE: QuestionState = {
    questions: [],
    selectedQuestion: undefined
  };
  
  type QuestionActions = {
    type: string;
    payload?: Partial<Question | Question[]> | undefined;
  };
  
  export const userReducer = (
    state: QuestionState = INITIAL_STATE,
    action: QuestionActions
  ) => {
    switch (action.type) {
      case SET_QUESTIONS:
        return {
          ...state,
          questions: action.payload,
        };
        case SELECT_QUESTION:
        return {
          ...state,
          selectedQuestion: action.payload,
        };

      default:
        return state;
    }
  };
  