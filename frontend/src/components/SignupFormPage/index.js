import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignupForm } from "../SessionForm";

function SignupFormPage() {
  const sessionUser = useSelector((state) => state.session.user);

  return sessionUser ? (
    <Redirect to="/" />
  ) : (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <SignupForm />
    </div>
  );
}


export default SignupFormPage;