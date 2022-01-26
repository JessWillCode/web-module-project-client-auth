import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link, Switch, useHistory } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { push } = useHistory();
  const isLoggedIn = localStorage.getItem('token');
  const [friends, setFriends] = useState([]);


  return (
    <div className="App">
      <header>
          <h3>FRIENDS DATABASE</h3>
          <nav>
              <Link to='/login'>LOGIN</Link>
              <Link to='/friends-list'>FRIENDS LIST</Link>
              <Link to='/add-friend'>ADD FRIEND</Link>
              <Link to='/logout'>LOGOUT</Link>
          </nav>
      </header>
      <Switch>
        <Route path='/logout' component={Logout} />
        <PrivateRoute exact path='/add-friend' component={AddFriends} friends={friends} setFriends={setFriends} />
        <PrivateRoute exact path='/friends-list' component={FriendsList} friends={friends} setFriends={setFriends} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
