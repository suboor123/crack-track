import {
    REMOVE_CURRENT_USER,
    SET_CURRENT_USER,
    SET_USERS,
    UPDATE_CURRENT_USER,
} from '../constants/user.constant';
import { User } from '../../model/user';

export interface UserState {
    currentUser: User | undefined;
    users: User[];
}

const INITIAL_STATE: UserState = {
    currentUser: undefined,
    users: [],
};

type UserActions = {
    type: string;
    payload?: Partial<User | User[]> | undefined;
};

export const userReducer = (
    state: UserState = INITIAL_STATE,
    action: UserActions
) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case REMOVE_CURRENT_USER:
            return {
                ...state,
                currentUser: undefined,
            };
        case UPDATE_CURRENT_USER:
            return {
                ...state,
                currentUser: { ...state.currentUser, ...action.payload },
            };
        case SET_USERS:
            return {
                ...state,
                users: [...(action.payload as any)],
            };
        default:
            return state;
    }
};
