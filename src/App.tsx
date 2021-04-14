import './App.scss';
import {LoginComponent} from './components/Login';
import {ChatWindow} from './components/ChatWindow';
import type { RootState } from './redux/store';
import { useSelector } from 'react-redux';

function App() {
  const username = useSelector((state: RootState) => state.user.username);
  return (
    <div>
        {username ? <ChatWindow />: <LoginComponent />}
    </div>
  );
}

export default App;
