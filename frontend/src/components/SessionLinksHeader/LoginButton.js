import React from "react";
import { useHistory } from "react-router-dom";

function LoginButton() {
  const history = useHistory();

  const routeChange = () => {
    let path = "/login";
    setTimeout(() => history.push(path), 200);
  };

  return (
    <>
      <button className="login-button" onClick={routeChange}>
        <span className="inner-login-button">Log in</span>
      </button>
    </>
  );
}

export default LoginButton;
