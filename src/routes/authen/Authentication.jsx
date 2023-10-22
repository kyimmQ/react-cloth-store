import React from "react";
import SignUpForm from "../../components/sign-up/SignUpForm.jsx";
import SignInWithGoogle from "../../components/sign-in/SignInForm.jsx";
import "./Authentication.styles.scss";
const Auth = () => {
  return (
    <div className="authentication-container">
      <SignInWithGoogle />
      <SignUpForm />
    </div>
  );
};
export default Auth;
