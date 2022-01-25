import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const { push } = useHistory();
    const [state, setState] = useState({
        credentials: {
            username: '',
            password: ''
        }
    });

    const handleChange = e => {
        setState({
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(state.credentials);
        axios.post('http://localhost:9000/api/login', state.credentials)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            push('/friendsList');

        })
        .catch(err => {
            console.log(err);
        })
    }

  return <div>
      <header>
          <h3>FRIENDS DATABASE</h3>
          <nav>
              <Link to='/login'>LOGIN</Link>
              <button>FRIENDS LIST</button>
              <button>ADD FRIEND</button>
              <button>LOGOUT</button>
          </nav>
      </header>
      <h1>LOGIN</h1>
      <form onSubmit={handleLogin}>
          <input 
            type='text'
            name='username'
            value={state.credentials.username}
            onChange={handleChange}
            />
             <input 
            type='password'
            name='password'
            value={state.credentials.password}
            onChange={handleChange}
            />
            <button>SUBMIT</button>
      </form>
  </div>;
}