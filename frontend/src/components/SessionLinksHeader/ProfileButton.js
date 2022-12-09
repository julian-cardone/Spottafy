import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ sessionUser }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className='profile-button'>
      <button onClick={openMenu} className='profile-icon'>
        <figure className="figure-pro">
          <div className="wrapper-pro">
            <div className="wrapper-pro-two"></div>
              <svg role="img"height="16"width="16"viewBox="0 0 16 16"className="user-icon">
                <path d="M 6.233 0.371 a 4.388 4.388 0 0 1 5.002 1.052 c 0.421 0.459 0.713 0.992 0.904 1.554 c 0.143 0.421 0.263 1.173 0.22 1.894 c -0.078 1.322 -0.638 2.408 -1.399 3.316 l -0.127 0.152 a 0.75 0.75 0 0 0 0.201 1.13 l 2.209 1.275 a 4.75 4.75 0 0 1 2.375 4.114 V 16 H 0.382 v -1.143 a 4.75 4.75 0 0 1 2.375 -4.113 l 2.209 -1.275 a 0.75 0.75 0 0 0 0.201 -1.13 l -0.126 -0.152 c -0.761 -0.908 -1.322 -1.994 -1.4 -3.316 c -0.043 -0.721 0.077 -1.473 0.22 -1.894 a 4.346 4.346 0 0 1 0.904 -1.554 c 0.411 -0.448 0.91 -0.807 1.468 -1.052 Z M 8 1.5 a 2.888 2.888 0 0 0 -2.13 0.937 a 2.85 2.85 0 0 0 -0.588 1.022 c -0.077 0.226 -0.175 0.783 -0.143 1.323 c 0.054 0.921 0.44 1.712 1.051 2.442 l 0.002 0.001 l 0.127 0.153 a 2.25 2.25 0 0 1 -0.603 3.39 l -2.209 1.275 A 3.25 3.25 0 0 0 1.902 14.5 h 12.196 a 3.25 3.25 0 0 0 -1.605 -2.457 l -2.209 -1.275 a 2.25 2.25 0 0 1 -0.603 -3.39 l 0.127 -0.153 l 0.002 -0.001 c 0.612 -0.73 0.997 -1.52 1.052 -2.442 c 0.032 -0.54 -0.067 -1.097 -0.144 -1.323 a 2.85 2.85 0 0 0 -0.588 -1.022 A 2.888 2.888 0 0 0 8 1.5 Z"></path>
              </svg>
          </div>
        </figure>
        <span className="span-pro-dropdown">{sessionUser.sessionUser.username}</span>
        <svg role="img"height="16"width="16"className="svg-arrow-dropdown"viewBox="2 0 16 16">
          <path d="M 14 6 l -6 6 l -6 -6 h 12 Z"></path>
        </svg>
      </button>
      {showMenu && (
      <div className="dropdown-root">
        <div className="dropdown-container">
          <ul className="profile-dropdown">
            <li>{sessionUser.username}</li>
            <li>{sessionUser.email}</li>
            <li>
              <button onClick={logout}className="logout-dropdown-button">
                Log Out
                </button>
            </li>
          </ul>
        </div>
      </div>
      )}
    </div>
  );
}

export default ProfileButton;
