import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input } from "../Forms";

function LoginForm({ onSuccess }) {
  const [credential, onCredentialChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [errors, onSubmit] = useSubmit({ 
    onSuccess,
    action: sessionActions.login({ credential, password })
  });

  return (
    <form onSubmit={onSubmit} className="form">
      <FormErrors errors={errors}/>
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
      <button type="submit" className="button">Log In</button>
    </form>
  );
}

export default LoginForm;