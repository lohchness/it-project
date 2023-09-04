import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordPage2.css";
const ForgotPasswordPage2 = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/forgot-password-page-3");
  }, [navigate]);

  return (
    <div className="forgot-password-page-2">
      <div className="forgot-password1">Forgot password?</div>
      <div className="email-field2">
        <img className="email-field-inner" alt="" src="/rectangle-2.svg" />
        <div className="resend-available">Resend available in 59 seconds.</div>
        <div className="resend">
          <span>{`Didn’t get an email? Check your spam folder or `}</span>
          <span className="resend1">resend</span>
          <span>.</span>
        </div>
        <div className="confirmation-code2">confirmation code</div>
        <img className="rectangle-icon" alt="" src="/rectangle-3.svg" />
        <div className="confirmation-code3">confirmation code</div>
      </div>
      <div className="login-button2" onClick={onLoginButtonContainerClick}>
        <div className="login-button-inner" />
        <div className="continue1">Continue</div>
      </div>
      <div className="event-of-wrong">(event of wrong confirmation code)</div>
    </div>
  );
};

export default ForgotPasswordPage2;
