import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordPage3.css";
const ForgotPasswordPage3 = () => {
  const navigate = useNavigate();

  const onRectangle3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="forgot-password-page-3">
      <div className="forgot-password">Forgot password?</div>
      <div className="reset-password">
        <div className="confirm-new-password">
          <img
            className="confirm-new-password-child"
            alt=""
            src="/rectangle-2.svg"
          />
          <div className="confirmation-code">confirm new password</div>
        </div>
        <div className="new-password">
          <img
            className="confirm-new-password-child"
            alt=""
            src="/rectangle-2.svg"
          />
          <div className="confirmation-code">new password</div>
        </div>
        <div className="email2">
          <img
            className="confirm-new-password-child"
            alt=""
            src="/rectangle-2.svg"
          />
          <div className="confirmation-code">email (filled in)</div>
        </div>
        <div className="rectangle-parent">
          <div className="group-child" onClick={onRectangle3Click} />
          <div className="continue">Continue</div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage3;
