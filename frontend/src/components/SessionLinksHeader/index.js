import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchPage/SearchBar";
// import { useSelector } from 'react-redux';
import ProfileButton from "../SessionLinksHeader/ProfileButton";
import LoginButton from "./LoginButton";
import "./Navigation.css";

function SessionLinks({ sessionUser }) {
  const location = useLocation();

  let sessionLinks;
  if (sessionUser.sessionUser) {
    sessionLinks = (
      <>
        <div className="session-links-header-2">
          <header className="session-links-logged-in">
            <div className="header-wrapper-logged-in">
              {location.pathname === "/search" && <SearchBar />}
              <ProfileButton sessionUser={sessionUser} />
            </div>
          </header>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="session-links-header">
          <header className="session-links">
            <div className="header-wrapper">
              <NavLink to="/signup" className="signup-button">
                Sign up
              </NavLink>
              <LoginButton />
            </div>
          </header>
        </div>
      </>
    );
  }

  return <>{sessionLinks}</>;
}

export default SessionLinks;
