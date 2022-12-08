import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors } from "../Forms";

function LoginForm({ onSuccess }) {
  const [credential, onCredentialChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [errors, onSubmit] = useSubmit({
    onSuccess,
    action: sessionActions.login({ credential, password }),
  });

  return (
    <form onSubmit={onSubmit} className="login-form-inputs">
      <FormErrors errors={errors} />
      
      <div className="email-or-user-container">
        <div className="user-label-container">
          <label className="user-label" for="username">
            Email address or username
          </label>
        </div>
          <input label="username"value={credential}onChange={onCredentialChange}placeholder="Email Address or username"required></input>
      </div>
 
      <div className="password-login-container">
        <div className="password-label-container">
          <label className="password-login-label" for="password">
            Password
          </label>
        </div>
          <input label="password"value={password}onChange={onPasswordChange}placeholder="Password"required></input>
      </div>

    <div className="login-button-container">
      <div className="login-button-li-page">
      <button type="submit" className="login-button-li-page">
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
