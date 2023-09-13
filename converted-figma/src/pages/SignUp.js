import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();

  const onSignUpButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="sign-up">
      <div className="rectangle" />
      <div className="sign-up-form">
        <button className="sign-up-button" onClick={onSignUpButtonClick}>
          <div className="sign-up1">SIGN UP</div>
        </button>
        <input
          className="confirm-password-field"
          placeholder="confirm password"
          type="password"
        />
        <input
          className="password-field"
          placeholder="password"
          type="password"
        />
        <input className="email-field" placeholder="email" type="email" />
        <input
          className="last-name-field"
          placeholder="last name"
          type="text"
        />
        <input
          className="first-name-field"
          placeholder="first name"
          type="text"
        />
      </div>
      <div className="sign-up2">Sign up</div>
      <div className="login-redirect">
        <div className="dont-have-an">Already have an account?</div>
        <Link className="sign-up3" to="/login" onClick={onSignUpClick}>
          Log in.
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
