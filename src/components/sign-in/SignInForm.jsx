import React, { useState } from "react";
import {
  signInWithGooglePopup,
  createUserFromAuth,
  signInUserWithEmail,
} from "../../utils/firebase/firebase.js";
import Button from "../button/Button.jsx";
import FormInput from "../form-input/FormInput.jsx";

import "./SignInForm.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  // google
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserFromAuth(response.user);
  };
  // e&p
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => setFormFields(defaultFormFields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = signInUserWithEmail(email, password);
      console.log(result);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
      </form>

      <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType={"google"} onClick={logGoogleUser}>
          Google Sign In
        </Button>
      </div>
    </div>
  );
};
export default SignInForm;
