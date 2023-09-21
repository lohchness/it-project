import { React, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpStep, setSignUpStep] = useState(1);

  const onSignUpClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);
  

  // for submitting api requests to backend - logging in, signing up, etc.
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    if (signUpStep<2){
        setSignUpStep(signUpStep+1);
    }
    else {
        console.log("signed up");
        navigate("/login");
    }
  }
  

  return (
    <div className="sign-up-container">
        <h1 className="title sign-up">Sign up</h1>
        
        {signUpStep == 1 && (
            <>
                <form className="sign-up-form" method="post" onSubmit={handleSubmit}>
                    <input className="form-field" placeholder="First name" type="text" required/>
                    <input className="form-field" placeholder="Last name" type="text" required/>
                    <input className="form-field" placeholder="Email" type="email" required/>
                    <input className="form-field" placeholder="Password" type="password" required/>
                    <input className="form-field" placeholder="Confirm password" type="password" required/>
                    <button className="continue-button" type="submit">
                        Continue
                    </button>
                </form>
                <div className="login-redirect">
                    Already have an account?
                    <Link className="sign-up-link" to="/login" onClick={onSignUpClick}>
                        Log in.
                    </Link>
                </div>
            </>
        )}

        {signUpStep == 2 && (
            <>
                 <form className="sign-up-form" method="post" onSubmit={handleSubmit}>
                    <textarea className="form-field" placeholder="About (optional)" type="text"/>
                    <input className="form-field" placeholder="Phone number (optional)" type="tel"/>
                    <button className="sign-up-button" type="submit">
                        Sign up
                    </button>
                </form>
            </>
        )}
    </div>
  );
};

export default SignUp;