import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input } from "../Forms";

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
          <input></input>
        </div>
      </div>

      <Input
        label="Username or Email"
        value={credential}
        onChange={onCredentialChange}
        required
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        required
      />
      <button type="submit" className="button">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
