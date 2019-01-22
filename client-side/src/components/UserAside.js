import React from 'react';
// import DefaultProfileImg from '../images/profile-image.png';

export default function UserAside({ profileImageUrl, username }) {
  return (
    <aside className='col-sm-2'>
      {/* <div className='panel panel-default'>
        <div className='panel-body'>
          <img
            src={profileImageUrl || DefaultProfileImg}
            alt={username}
            style={{
              marginLeft: '20px',
              width: '200px',
              height: 'auto'
            }}
            className='img-thumbnail'
          />
          <span>{username}</span>
        </div>
      </div> */}
    </aside>
  );
}
