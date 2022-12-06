import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginButton from './LoginButton';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <div className='header-wrapper'>
      <header className="session-links">
        <NavLink to="/signup" className="signup-button">Sign Up</NavLink>
        <LoginButton />
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
      <div className="session-links-header">
        {sessionLinks}
      </div>
    // </header>
  );
}

export default Navigation;
