import {SET_USERNAME} from '../actions/actionTypes';

const initialState: any = {
    username: window.localStorage.getItem('username') 
}

const userReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_USERNAME: {
            const {username} = action.payload;
            window.localStorage.setItem('username', username);
            return {
                ...state,
                username: username
            }
        }
        default:
            return state;
    }
}

export default userReducer; 