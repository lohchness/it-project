import styles from "./ForgotPasswordPage1.module.css";

const ForgotPasswordPage1 = () => {
  return (
    <div className={styles.forgotPasswordPage1}>
      <div className={styles.rectangle} />
      <button className={styles.continueButton}>
        <div className={styles.continue}>CONTINUE</div>
      </button>
      <input className={styles.emailField} placeholder="email" type="email" />
      <div className={styles.forgotPassword}>Forgot password?</div>
    </div>
  );
};

export default ForgotPasswordPage1;
