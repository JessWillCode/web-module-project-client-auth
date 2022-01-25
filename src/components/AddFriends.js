import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function AddFriends(props) {
    const { push } = useHistory();
    const { friends, setFriends } = props;
    const [newFriend, setNewFriend] = useState(
        {
            name: 'Harry',
            email: 'Potterhead@hogwarts.com'
        }
    );

    const handleChange = e => {
        setNewFriend( {
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleAddFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => {
            console.log(res);
            setFriends([
                ...friends,
                res.data
            ]);
            push('/friends-list');
        })
        .catch(err => {
            console.log(err);
        })
    }

  return <div>
      <h1>ADD FRIEND</h1>
      <form onSubmit={handleAddFriend}>
          <input 
            type='text'
            name='FRIEND NAME'
            value={newFriend.name}
            onChange={handleChange}
            />
             <input 
            type='text'
            name='FRIEND EMAIL'
            value={newFriend.email}
            onChange={handleChange}
            />
            <button>SUBMIT</button>
      </form>
  </div>;
}
