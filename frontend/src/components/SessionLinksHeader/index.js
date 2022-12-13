import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import ProfileButton from '../SessionLinksHeader/ProfileButton';
import LoginButton from './LoginButton';
import './Navigation.css';

function SessionLinks({ sessionUser }) {

  let sessionLinks;
  if (sessionUser.sessionUser) {
    sessionLinks = (
      <header className="session-links-logged-in">
      <div className='header-wrapper-logged-in'>
      <ProfileButton sessionUser={ sessionUser } />
      </div>
    </header>
    );

  } else {
    sessionLinks = (
      <>
      <div className="session-links-header">
      <header className="session-links">
        <div className='header-wrapper'>
        <NavLink to="/signup" className="signup-button">Sign up</NavLink>
        <LoginButton />
        </div>
      </header>
      </div>
      </>
    );
  }

  return (
    // <header className="site-header">
    //   <NavLink exact to="/" className="nav-title">
    //     <h1>Spottafy</h1>
    //   </NavLink>
    <>
      <div className="session-links-header">
          {sessionLinks}
      </div>
      <div className='background-dark-theme'></div> 
    </> 
    // </header>
  );
}

export default SessionLinks;
