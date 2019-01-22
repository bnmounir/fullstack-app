import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/profile-image.png';

const MessageItem = ({
  date,
  profileImageUrl,
  text,
  username,
  removeMessage,
  isCorrectUser
}) => (
  <div>
    <li className='list-group-item'>
      <img
        src={profileImageUrl || DefaultProfileImg}
        alt='profile'
        height='100px'
        width='100px'
        className='timeline-image'
      />
      <div className='message-area' style={{ width: '90%' }}>
        <Link to='/'>{username} &nbsp;</Link>
        <span className='text-muted'>
          <Moment className='text-muted' fromNow={true}>
            {date}
          </Moment>
        </span>
        <p>{text}</p>
        {isCorrectUser && (
          <button
            type='button'
            onClick={removeMessage}
            className='btn btn-outline-danger btn-sm'
          >
            DELETE
          </button>
        )}
      </div>
    </li>
  </div>
);

export default MessageItem;
