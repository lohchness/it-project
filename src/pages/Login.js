import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onForgotYourPasswordClick = useCallback(() => {
    navigate("/forgot-password-page-1");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.rectangle} />
      <div className={styles.signUpRedirect}>
        <div className={styles.dontHaveAn}>Don’t have an account?</div>
        <Link className={styles.signUp} to="/sign-up" onClick={onSignUpClick}>
          Sign up.
        </Link>
      </div>
      <div className={styles.thirdPartyLogin}>
        <button className={styles.facebookLoginButton}>
          <div className={styles.facebookLoginButtonChild} />
          <img className={styles.bifacebookIcon} alt="" src="/bifacebook.svg" />
        </button>
        <button className={styles.githubLoginButton}>
          <div className={styles.facebookLoginButtonChild} />
          <img
            className={styles.bifacebookIcon}
            alt=""
            src="/akariconsgithubfill.svg"
          />
        </button>
        <button className={styles.googleLoginButton}>
          <div className={styles.facebookLoginButtonChild} />
          <img
            className={styles.bifacebookIcon}
            alt=""
            src="/flatcoloriconsgoogle.svg"
          />
        </button>
        <div className={styles.orContinueWith}>or continue with</div>
      </div>
      <Link
        className={styles.forgotYourPassword}
        to="/forgot-password-page-1"
        onClick={onForgotYourPasswordClick}
      >
        Forgot your password?
      </Link>
      <div className={styles.loginForm}>
        <button className={styles.loginButton} onClick={onLoginButtonClick}>
          <div className={styles.login1}>LOGIN</div>
        </button>
        <input
          className={styles.passwordField}
          placeholder="password"
          type="text"
        />
        <input className={styles.passwordField1} type="text" />
        <input className={styles.emailField} placeholder="email" type="text" />
      </div>
      <div className={styles.logIn}>Log in</div>
    </div>
  );
};

export default Login;
