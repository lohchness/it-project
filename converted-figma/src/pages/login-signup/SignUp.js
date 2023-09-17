import { React, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onSignUpButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  // for submitting api requests to backend - logging in, signing up, etc.
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    console.log("signed up");
    alert("signed up");

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
  }

  return (
    <div className="sign-up-container">
        <h1 className="title sign-up">Sign up</h1>
        <form className="sign-up-form" method="post" onSubmit={handleSubmit}>
            <input className="form-field" placeholder="first name" type="text" required/>
            <input className="form-field" placeholder="last name" type="text" required/>
            <input className="form-field" placeholder="email" type="email" required/>
            <input className="form-field" placeholder="password" type="password" required/>
            <input className="form-field" placeholder="confirm password" type="password" required/>
            <button className="sign-up-button" type="submit">
                Sign up
            </button>
        </form>
        <div className="login-redirect">
            Already have an account?
            <Link className="sign-up-link" to="/login" onClick={onSignUpClick}>
                Log in.
            </Link>
        </div>
    </div>
  );
};

export default SignUp;
