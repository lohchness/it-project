import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPasswordPage3.module.css";

const ForgotPasswordPage3 = () => {
  const navigate = useNavigate();

  const onContinueButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.forgotPasswordPage3}>
      <div className={styles.rectangle} />
      <div className={styles.resetPasswordForm}>
        <button
          className={styles.continueButton}
          onClick={onContinueButtonClick}
        >
          <div className={styles.continue}>CONTINUE</div>
        </button>
        <input
          className={styles.confirmNewPasswordField}
          placeholder="confirm new password"
          type="password"
        />
        <input
          className={styles.newPasswordField}
          placeholder="new password"
          type="password"
        />
        <input
          className={styles.emailField}
          value="email (filled in)"
          type="email"
          defaultValue="email (filled in)"
        />
      </div>
      <div className={styles.forgotPassword}>Forgot password?</div>
    </div>
  );
};

export default ForgotPasswordPage3;
