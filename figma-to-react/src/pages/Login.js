import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onForgotYourPasswordClick = useCallback(() => {
    navigate("/forgot-password-page-1");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="login">
      <div className="login-child" />
      <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
        <span>{`Don’t have an account? `}</span>
        <span className="sign-up">Sign up.</span>
      </div>
      <div className="forgot-your-password" onClick={onForgotYourPasswordClick}>
        Forgot your password?
      </div>
      <div className="log-in">Log in</div>
      <div className="password-field">
        <img className="password-field-child" alt="" src="/rectangle-2.svg" />
        <div className="password">password</div>
      </div>
      <div className="email-field">
        <img className="password-field-child" alt="" src="/rectangle-2.svg" />
        <div className="email">email</div>
      </div>
      <div className="login-button" onClick={onLoginButtonContainerClick}>
        <div className="login-button-child" />
        <div className="login1">LOGIN</div>
      </div>
      <img className="login-item" alt="" src="/group-2255.svg" />
      <div className="or-continue-with">or continue with</div>
    </div>
  );
};

export default Login;
