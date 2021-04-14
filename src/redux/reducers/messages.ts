import { Message } from '../../common/types';
import { MESSAGE_RECIEVED } from '../actions/actionTypes';

const MESSAGES = 'messages';

function getMessages(): Array<Message> {
    return JSON.parse(window.localStorage.getItem(MESSAGES) || '[]');
}

function getNotExpiredMessages() {
    let messages = getMessages();
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() - 1)
    const expiryTimestamp = currentDate.getTime();

    messages = messages.filter(message => message.timestamp >= expiryTimestamp);
    window.localStorage.setItem(MESSAGES, JSON.stringify(messages));

    return messages;
}


const initialState: any = {
    messages: getNotExpiredMessages()
}

const messageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case MESSAGE_RECIEVED: {
            const message = action.payload;
            const messages = getMessages();

            messages.push(message);
            window.localStorage.setItem(MESSAGES, JSON.stringify(messages));

            return {
                ...state,
                messages: messages
            }
        }
        default:
            return state;
    }
}
export default messageReducer;