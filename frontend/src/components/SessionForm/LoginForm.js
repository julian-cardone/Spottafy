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
          <input label="username"value={credential}onChange={onCredentialChange}placeholder="Email Address or username"required></input>
        </div>
      </div>

      <div className="password-login-container">
        <div className="password-label-container">
          <label className="password-login-label" for="password">
            Password
          </label>
          <input label="password"value={password}onChange={onPasswordChange}placeholder="Password"required></input>
        </div>
      </div>

    <div className="remember-me-container">
      <div className="remember-me">
        <div className="remember-me-checkbox">
          <input type="checkbox"id="login-remember"name="remember"className="remember-checkbox"></input>
          <label for="login-remember">
            <span className="indicator"></span>
            <span className="text-label-checkbox">
              <p className="remember-me-p">Remember me</p>
            </span>
          </label>
        </div>
      </div>
    </div>
      <button type="submit" className="button">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
