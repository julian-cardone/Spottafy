import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input } from "../Forms";

function SignupForm({ onSuccess }) {
  const [email, onEmailChange] = useInput("");
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const [errors, onSubmit] = useSubmit({ 
    onSuccess,
    action: sessionActions.signup({ email, username, password }),
    validate: () => {
      if (password !== confirmPassword) {
        return ['Confirm Password field must be the same as the Password field'];
      }
    }
  });

  return (
    <form onSubmit={onSubmit} className="form">
      <FormErrors errors={errors}/>
      <Input 
        label="Email"
        value={email}
        onChange={onEmailChange}
        required
      />
      <Input 
        label="Username"
        value={username}
        onChange={onUsernameChange}
        required
      />
      <Input 
        label="Password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        required
      />
      <Input 
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        required
      />
      <button type="submit" className="button">Sign Up</button>
    </form>
  );
}

export default SignupForm;