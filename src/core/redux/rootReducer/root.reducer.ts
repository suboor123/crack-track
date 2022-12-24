import { combineReducers } from 'redux';
import { topicReducer } from '../../../domain/topics/redux/reducer/topic.reducer';
import { userReducer } from '../../../domain/user/redux/reducer/user.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    topics: topicReducer,
});
