import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPasswordPage2.module.css";

const ForgotPasswordPage2 = () => {
  const navigate = useNavigate();

  const onContinueButtonClick = useCallback(() => {
    navigate("/forgot-password-page-3");
  }, [navigate]);

  return (
    <div className={styles.forgotPasswordPage2}>
      <div className={styles.rectangle} />
      <input
        className={styles.confirmationCodeField2}
        placeholder="confirmation code"
        type="text"
      />
      <div className={styles.eventOfWrong}>
        (event of wrong confirmation code)
      </div>
      <div className={styles.text}>
        <div className={styles.resendAvailable}>
          Resend available in 59 seconds.
        </div>
        <div className={styles.resend}>
          <span>{`Didn’t get an email? Check your spam folder or `}</span>
          <span className={styles.resend1}>resend</span>
          <span>.</span>
        </div>
      </div>
      <div className={styles.sendConfirmationCodeForm}>
        <button
          className={styles.continueButton}
          onClick={onContinueButtonClick}
        >
          <div className={styles.continue}>CONTINUE</div>
        </button>
        <input
          className={styles.confirmationCodeField}
          placeholder="confirmation code"
          type="text"
        />
      </div>
      <div className={styles.forgotPassword}>Forgot password?</div>
    </div>
  );
};

export default ForgotPasswordPage2;
