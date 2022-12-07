import React from "react";
import { useHistory } from "react-router-dom";

function LoginButton() {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = '/login'; 
    history.push(path);
  }

  return (
    <>
      <button className="login-button"onClick={routeChange}>
        <span className='inner-login-button'>Log in</span>
      </button>
    </>
  );
}

export default LoginButton;