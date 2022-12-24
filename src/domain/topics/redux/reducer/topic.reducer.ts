import { Topic } from '../../model/topic';
import { ADD_TOPIC, SET_TOPICS } from '../constants/topic.constant';

export interface TopicState {
    topicList: Topic[];
}

const INITIAL_STATE: TopicState = {
    topicList: [],
};

type TopicActions = { type: string; payload?: Partial<Topic | Topic[]> };

export const topicReducer = (
    state: TopicState = INITIAL_STATE,
    action: TopicActions
) => {
    switch (action.type) {
        case SET_TOPICS:
            return {
                ...state,
                topicList: action.payload,
            };
        case ADD_TOPIC:
            return {
                ...state,
                topicList: [...state.topicList, action.payload],
            };
        default:
            return state;
    }
};
