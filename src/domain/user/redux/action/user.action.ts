import { REMOVE_CURRENT_USER, SET_CURRENT_USER, SET_USERS, UPDATE_CURRENT_USER } from "../constants/user.constant"
import { User } from "../../model/user"

export const setUser = (user: User) => ({
    type: SET_CURRENT_USER,
    payload: user
});

export const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
})

export const updateCurrentUser = (user: Partial<User>) => ({
    type: UPDATE_CURRENT_USER,
    payload: user
})

export const setUsers = (users: User[]) => ({
    type: SET_USERS,
    payload: users
});