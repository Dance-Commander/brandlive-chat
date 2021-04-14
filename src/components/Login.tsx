import { useAppDispatch } from '../hooks';
import type { AppDispatch } from '../redux/store';
import { setUsername } from '../redux/actions/user';
import { SyntheticEvent, useState } from 'react'
import { TextField, Paper, } from '@material-ui/core';

export const LoginComponent = () => {
    const [username, setUser] = useState('');
    const dispatch: AppDispatch = useAppDispatch();

    const login = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(setUsername(username));
    }

    return (
        <div className="Login">
            <Paper style={{ width: '70%' }}>
                <form onSubmit={login}>
                    <TextField
                        label="Username"
                        fullWidth
                        value={username}
                        onChange={e => setUser(e.target.value)}
                    />
                </form>
            </Paper>
        </div>
    )
}
