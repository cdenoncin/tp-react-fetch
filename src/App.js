import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PostList from './PostList';
import CreatePost from './CreatePost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <SignIn></SignIn>
      <SignUp></SignUp>
      <CreatePost></CreatePost>
      <PostList></PostList>
    </div>
  );
}

export default App;
