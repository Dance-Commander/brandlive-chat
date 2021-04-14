import socket from 'socket.io-client';
import { Message } from './common/types';
import { createContext } from 'react'
import { useDispatch } from 'react-redux';
import { messageRecieved } from './redux/actions/messages';

const WebSocketContext = createContext<{connection: SocketIOClient.Socket, sendMessage: Function} | null>(null);

export { WebSocketContext }

const WebSocketProvider = ({ children }: any) => {
    const channel = 'code-test';
    let connection: SocketIOClient.Socket;
    let ws;

    const dispatch = useDispatch();


    const sendMessage = (text: string) => {
        const message: Message = {
            text: text,
            username: localStorage.getItem('username') || '',
            timestamp: Date.now()
        }
        connection.emit('message', message, channel);
    }

    connection = socket.connect('wss://codechallenge.brand.live');

    connection.on('connect', () => {
        connection.emit('join-channel', channel);
    });

    connection.on('error', (e: any) => {
        console.error(e);
    })

    connection.on('message', (message: Message) => {
        console.log('MESSAGE RECIEVED', message);
        dispatch(messageRecieved(message));
    })

    ws = {
        connection: connection,
        sendMessage
    }

     return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}

export default WebSocketProvider; 