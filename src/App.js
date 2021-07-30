import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
function App() {
  
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height="100vh"
      projectID="a2fff590-7ee8-4f29-9b7f-f53cec487682"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
    />
  );
}

export default App;
