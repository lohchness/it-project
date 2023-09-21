import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onSignUpButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <div className={styles.rectangle} />
      <div className={styles.signUpForm}>
        <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
          <div className={styles.signUp1}>SIGN UP</div>
        </button>
        <input
          className={styles.confirmPasswordField}
          placeholder="confirm password"
          type="password"
        />
        <input
          className={styles.passwordField}
          placeholder="password"
          type="password"
        />
        <input className={styles.emailField} placeholder="email" type="email" />
        <input
          className={styles.lastNameField}
          placeholder="last name"
          type="text"
        />
        <input
          className={styles.firstNameField}
          placeholder="first name"
          type="text"
        />
      </div>
      <div className={styles.signUp2}>Sign up</div>
      <div className={styles.loginRedirect}>
        <div className={styles.dontHaveAn}>Already have an account?</div>
        <Link className={styles.signUp3} to="/login" onClick={onSignUpClick}>
          Log in.
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
