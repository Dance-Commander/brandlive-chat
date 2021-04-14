import React from 'react';
import type { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { Message } from "../common/types"
import { Grid, Paper, Tooltip, Box} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';

export const ChatMessage: React.FC<{message: Message}> = ({message}) => {
  const username = useSelector((state: RootState) => state.user.username);
  const isCurrentUser = username === message.username;
    return (
        <Grid item>
            <Grid container spacing={2}>
                <Grid item>
                    <Tooltip title={message.username}>
                        {isCurrentUser ? <AccountCircle style={{ color: red[500] }}/> : <AccountCircle style={{ color: '#A6FF79' }} />}
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Paper color="primary">
                        <Box p={1}>
                            {message.text}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}
