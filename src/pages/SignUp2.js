import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp2.module.css";

const SignUp2 = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.signUp2}>
      <div className={styles.rectangle} />
      <div className={styles.signUpForm}>
        <button className={styles.finishSignUpButton}>
          <div className={styles.signUp}>SIGN UP</div>
        </button>
        <input
          className={styles.mainAppField}
          placeholder="confirm password"
          type="password"
        />
        <input
          className={styles.aboutMeField}
          placeholder="About me"
          type="text"
        />
        <input
          className={styles.phoneNumberField}
          placeholder="Phone number (option)"
          type="text"
        />
      </div>
      <div className={styles.signUp1}>Sign up</div>
      <div className={styles.loginRedirect}>
        <div className={styles.dontHaveAn}>Already have an account?</div>
        <Link className={styles.signUp3} to="/login" onClick={onSignUpClick}>
          Log in.
        </Link>
      </div>
    </div>
  );
};

export default SignUp2;
