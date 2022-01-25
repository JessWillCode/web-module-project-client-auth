import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
const [friends, setFriends] = useState([]);

  return (
    <div className="App">
      <header>
          <h3>FRIENDS DATABASE</h3>
          <nav>
              <Link to='/login'>LOGIN</Link>
              <Link to='/friends-list'>FRIENDS LIST</Link>
              <button>ADD FRIEND</button>
              <button>LOGOUT</button>
          </nav>
      </header>
      <Switch>
      <Route path='/friends-list' render={() =>(<FriendsList friends={friends} setFriends={setFriends}/>)} />
      <Route path='/login' component={Login} />
      <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
