import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function FriendsList(props) {
const { friends, setFriends } = props;
    
useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

  return (
  <div>
      {/* <h1>FRIENDS LIST</h1> */}
      {
          friends.map(friend => {
            return (<div key={friend.id} className='friends'>
                <h3>-{friend.name}- {friend.email}</h3>
            </div>);
          })
      }
  </div>);
}
