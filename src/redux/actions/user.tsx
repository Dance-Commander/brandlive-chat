import {SET_USERNAME} from './actionTypes';

export const setUsername = (username: string) => ({
    type: SET_USERNAME,
    payload: {
        username
    }
})