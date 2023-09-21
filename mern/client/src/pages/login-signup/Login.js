import { React, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
const Login = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onLoginClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onForgotPasswordClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  // for submitting api requests to backend - logging in, signing up, etc.
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    console.log("logged in");
    alert("logged in");

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
  }

  return (
    <div className="login-container">
        <h1 className="title log-in">Log in</h1>
        <form className="login-form" method="post" onSubmit={handleSubmit}>
            <input className="form-field" placeholder="Email" type="email" required/>
            <input className="form-field" placeholder="Password" type="password" required/>
            <div className="forgot-password-link-container">
                <Link className="forgot-password-link" to="/forgot-password" onClick={onForgotPasswordClick}>
                    Forgot your password?
                </Link>
            </div>
            <button className="login-button" type="submit" onClick={onLoginClick}>
                Login
            </button>
        </form>
        {/* <div className="third-party-login-container">
            <div className="or-continue-with">or continue with</div>
            {/* <button className="facebook-login-button">
                <div className="facebook-login-button-child" />
                <img className="bifacebook-icon" alt="" src="/facebook-icon.png" />
            </button>
            <button className="github-login-button">
                <div className="facebook-login-button-child" />
                <img className="bifacebook-icon" alt="" src="/github-icon.png" />
            </button>
            <button className="google-login-button">
                <div className="facebook-login-button-child" />
                <img className="bifacebook-icon" alt="" src="/google-icon.png" />
            </button> 
             </div> */}
        <div className="sign-up-redirect">
            Don't have an account?
            <Link className="sign-up-link" to="/sign-up" onClick={onSignUpClick}>
                Sign up.
            </Link>
        </div>
    </div>
  )
};

export default Login;