import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onForgotYourPasswordClick = useCallback(() => {
    navigate("/forgot-password-page-1");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <div className="login">
      <div className="rectangle4" />
      <div className="sign-up-redirect">
        <div className="dont-have-an1">Don’t have an account?</div>
        <Link className="sign-up4" to="/" onClick={onSignUpClick}>
          Sign up.
        </Link>
      </div>
      <div className="third-party-login">
        <button className="facebook-login-button">
          <div className="facebook-login-button-child" />
          <img className="bifacebook-icon" alt="" src="/undefined.png" />
        </button>
        <button className="github-login-button">
          <div className="facebook-login-button-child" />
          <img className="bifacebook-icon" alt="" src="/undefined1.png" />
        </button>
        <button className="google-login-button">
          <div className="facebook-login-button-child" />
          <img className="bifacebook-icon" alt="" src="/undefined2.png" />
        </button>
        <div className="or-continue-with">or continue with</div>
      </div>
      <Link
        className="forgot-your-password"
        to="/forgot-password-page-1"
        onClick={onForgotYourPasswordClick}
      >
        Forgot your password?
      </Link>
      <div className="login-form">
        <button className="login-button" onClick={onLoginButtonClick}>
          <div className="login1">LOGIN</div>
        </button>
        <input className="password-field1" placeholder="password" type="text" />
        <input className="password-field2" type="text" />
        <input className="email-field3" placeholder="email" type="text" />
      </div>
      <div className="log-in">Log in</div>
    </div>
  );
};

export default Login;
