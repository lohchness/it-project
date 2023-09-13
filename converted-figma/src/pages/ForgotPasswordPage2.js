import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordPage2.css";
const ForgotPasswordPage2 = () => {
  const navigate = useNavigate();

  const onContinueButtonClick = useCallback(() => {
    navigate("/forgot-password-page-3");
  }, [navigate]);

  return (
    <div className="forgot-password-page-2">
      <div className="rectangle2" />
      <input
        className="confirmation-code-field-2"
        placeholder="confirmation code"
        type="text"
      />
      <div className="event-of-wrong">(event of wrong confirmation code)</div>
      <div className="text">
        <div className="resend-available">Resend available in 59 seconds.</div>
        <div className="resend">
          <span>{`Didn’t get an email? Check your spam folder or `}</span>
          <span className="resend1">resend</span>
          <span>.</span>
        </div>
      </div>
      <div className="send-confirmation-code-form">
        <button className="continue-button1" onClick={onContinueButtonClick}>
          <div className="continue1">CONTINUE</div>
        </button>
        <input
          className="confirmation-code-field"
          placeholder="confirmation code"
          type="text"
        />
      </div>
      <div className="forgot-password1">Forgot password?</div>
    </div>
  );
};

export default ForgotPasswordPage2;
