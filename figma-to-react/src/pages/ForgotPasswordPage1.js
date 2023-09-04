import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordPage1.css";
const ForgotPasswordPage1 = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/forgot-password-page-2");
  }, [navigate]);

  return (
    <div className="forgot-password-page-1">
      <div className="forgot-password2">Forgot password?</div>
      <div className="email-field3">
        <img className="email-field-child1" alt="" src="/rectangle-2.svg" />
        <div className="email4">email</div>
      </div>
      <div className="login-button3" onClick={onLoginButtonContainerClick}>
        <div className="login-button-child1" />
        <div className="continue2">Continue</div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage1;
