import { Message } from '../../common/types';
import {MESSAGE_RECIEVED} from './actionTypes';

export const messageRecieved = (message: Message) => ({
    type: MESSAGE_RECIEVED,
    payload: message
})