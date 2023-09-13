import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordPage3.css";
const ForgotPasswordPage3 = () => {
  const navigate = useNavigate();

  const onContinueButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="forgot-password-page-3">
      <div className="rectangle1" />
      <div className="reset-password-form">
        <button className="continue-button" onClick={onContinueButtonClick}>
          <div className="continue">CONTINUE</div>
        </button>
        <input
          className="confirm-new-password-field"
          placeholder="confirm new password"
          type="password"
        />
        <input
          className="new-password-field"
          placeholder="new password"
          type="password"
        />
        <input
          className="email-field1"
          value="email (filled in)"
          type="email"
        />
      </div>
      <div className="forgot-password">Forgot password?</div>
    </div>
  );
};

export default ForgotPasswordPage3;
