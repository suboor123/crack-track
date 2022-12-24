import { Topic } from '../../model/topic';
import { ADD_TOPIC, SET_TOPICS } from '../constants/topic.constant';

export const setTopics = (topics: Topic[]) => ({
    type: SET_TOPICS,
    payload: topics,
});

export const addTopic = (topic: Topic) => ({
    type: ADD_TOPIC,
    payload: topic,
});
