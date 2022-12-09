import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors } from "../Forms";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function LoginForm({ onSuccess }) {
  const [credential, onCredentialChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [errors, onSubmit] = useSubmit({
    onSuccess,
    action: sessionActions.login({ credential, password }),
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleDemo = () => { 
    dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }))
    history.replace('/');
  }

  return ( 
    <form onSubmit={onSubmit} className="login-form-inputs"id="loginform">
      <FormErrors errors={errors} />
      
      <div className="email-or-user-container">
        <div className="user-label-container">
          <label className="user-label" htmlFor="username">
            Email address or username
          </label>
        </div>
          <input label="username"className="log-input"value={credential}onChange={onCredentialChange}placeholder="Email address or username"required></input>
      </div>
 
      <div className="password-login-container">
        <div className="password-label-container">
          <label className="password-login-label" htmlFor="password">
            Password
          </label>
        </div>
          <input label="password"className="log-input"type="password"value={password}onChange={onPasswordChange}placeholder="Password"required></input>
      </div>

    <div className="login-button-container">

    <div className="demo-login-button-li-page">
      <button onClick={handleDemo}className="demo-login-button-li-page"form="loginform2">
        <div className="inner-demo-login-li-page">
          <p className="demo-log-in-text-li-page">DEMO USER</p>
        </div>
      </button>
      </div>

      <div className="login-button-li-page">
      <button type="submit"form="loginform"className="login-button-li-page">
        <div className="inner-login-li-page">
          <p className="log-in-text-li-page">LOG IN</p>
        </div>
      </button>
      </div>

    </div>
    </form>
  );
}

export default LoginForm;
