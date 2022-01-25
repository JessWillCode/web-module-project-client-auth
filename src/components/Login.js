import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const { push } = useHistory();
    const [state, setState] = useState({
        credentials: {
            username: 'Bloom',
            password: 'Tech'
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
        axios.post('http://localhost:9000/api/login', state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            push('/friends-list');

        })
        .catch(err => {
            console.log(err);
        })
    }

  return <div>
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