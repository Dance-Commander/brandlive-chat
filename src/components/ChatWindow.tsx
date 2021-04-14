import type { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { ChatMessage } from './ChatMessage';
import { useState, useContext, useEffect, useRef, SyntheticEvent } from 'react';
import { WebSocketContext } from '../WebSocketProvider';
import { Container, Grid, TextField, IconButton, InputAdornment, Paper, Box } from '@material-ui/core';
import { AccountCircle, Send } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';

export const ChatWindow = () => {
    const ws = useContext(WebSocketContext);
    const [message, setMessage] = useState('');
    const messages = useSelector((state: RootState) => state.messages.messages);
    const chatHistoryRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        chatHistoryRef.current?.scrollIntoView({ behavior: 'smooth' });
    });

    const sendMessage = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(e);
        ws?.sendMessage(message);
        setMessage('');
    }

    return (
        <Container>
            <Grid container
                direction="column"
                justify="space-between"
                alignItems="flex-start"
                style={{ height: "98vh" }}
            >
                <Grid container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={1}
                    style={{ flex: 1, overflowY: 'auto', flexWrap: 'nowrap' }}
                >
                    {messages.map((message: any, index: number) => <ChatMessage message={message} key={index} />)}
                    <div ref={chatHistoryRef} />
                </Grid>
                <Box mt={2} style={{ width: '100%' }}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <AccountCircle style={{ color: red[500] }} />
                        </Grid>
                        <Grid item style={{ flexGrow: 1 }}>
                            <Paper>
                                <Box p={1}>
                                    <form onSubmit={sendMessage} className="ChatWindow-form">
                                        <TextField
                                            label="Message"
                                            fullWidth
                                            rowsMax={4}
                                            value={message}
                                            onChange={e => setMessage(e.target.value)}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <IconButton disabled={!message} type="submit" color="primary">
                                                        <Send />
                                                    </IconButton>
                                                </InputAdornment>
                                            }}
                                        />
                                    </form>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Container>
    )
}
