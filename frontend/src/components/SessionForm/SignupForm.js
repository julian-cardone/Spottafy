import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors } from "../Forms";
import { Link, Redirect } from "react-router-dom";

function SignupForm({ onSuccess, sessionUser }) {
  const [email, onEmailChange] = useInput("");
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmEmail, onConfirmEmailChange] = useInput("");
  const [errors, onSubmit] = useSubmit({
    onSuccess,
    action: sessionActions.signup({ email, username, password }),
    validate: () => {
      if (confirmEmail !== email) {
        return ["The emails do not match."];
      }
    },
  });

  // const sessionUser = sessionStorage.getItem("currentUser");

  // const history = useHistory();

  // const redirectHome = () =>{
  //   history.replace("/");
  // }

  return sessionUser ? (
    <Redirect to="/" />
  ) : (
    <form onSubmit={onSubmit} className="form">
      <FormErrors errors={errors} />

      <div className="email-container">
        <div className="email-label-container">
          <label className="email-label" htmlFor="email">
            What's your email?
          </label>
        </div>
        <input
          label="email"
          value={email}
          onChange={onEmailChange}
          required
          placeholder="Enter your email."
        ></input>
      </div>

      <div className="confirm-email-container">
        <div className="confirm-email-label-container">
          <label className="confirm-email-label" htmlFor="confirm-email">
            Confirm your email
          </label>
        </div>
        <input
          label="confirm-email"
          value={confirmEmail}
          onChange={onConfirmEmailChange}
          required
          placeholder="Enter your email again."
        ></input>
      </div>

      <div className="password-container">
        <div className="password-label-container">
          <label className="password-label" htmlFor="password">
            What's your password?
          </label>
        </div>
        <input
          label="password"
          value={password}
          onChange={onPasswordChange}
          type="password"
          required
          placeholder="Create a Password."
        ></input>
      </div>

      <div className="username-container">
        <div className="username-label-container">
          <label className="username-label" htmlFor="username">
            What should we call you?
          </label>
        </div>
        <input
          label="username"
          value={username}
          onChange={onUsernameChange}
          required
          placeholder="Enter a profile name."
        ></input>
        <div className="this-appears-profile">
          This appears on your profile.
        </div>
      </div>

      <div className="tos-and-signup">
        <p className="tos-p-tag">
          <span className="tos-span">
            By clicking these links, you agree to be redirected to my&nbsp;
            <a href="https://github.com/julian-cardone">GitHub</a> or&nbsp;
            <a href="https://www.linkedin.com/in/juliancardone/">LinkedIn</a>.
          </span>
        </p>
        <p className="tos-p-tag">
          <span className="tos-span">
            To learn more about a random topic, click this link&nbsp;
            <a href="https://en.wikipedia.org/wiki/Special:Random">
              Random Wiki Page
            </a>
          </span>
        </p>

        <div className="signup-button-container">
          <button type="submit" className="signup-form-button">
            <div className="inner-button">Sign up</div>
          </button>
        </div>
        <p className="account-link-p">
          <span className="account-link-span">
            Have an account?&nbsp;
            <Link to="/login">Log in</Link>
          </span>
        </p>
      </div>
    </form>
  );
}

export default SignupForm;
