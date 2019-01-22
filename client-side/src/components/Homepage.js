import React from 'react';
import { Link } from 'react-router-dom';
import MessagesTimeline from './MessagesTimeline';

export default function Homepage({ currentUser }) {
  if (!currentUser.isAuthenticated) {
    return (
      <div className='home-hero'>
        <h1 className='ho'>What's happening? Share with us.</h1>
        <h4 className='ho'>Welcome to Middleman</h4>
        <Link to='/signup' className='btn btn-primary'>
          Sign up here!
        </Link>
      </div>
    );
  }
  return (
    <MessagesTimeline profileImageUrl={currentUser.user.profileImageUrl} />
  );
}
