import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="sign-up1">
      <div className="already-have-an-container">
        <span>{`Already have an account? `}</span>
        <span className="log-in1">Log in.</span>
      </div>
      <div className="sign-up2">Sign up</div>
      <div className="last-name-field">
        <img className="last-name-field-child" alt="" src="/rectangle-2.svg" />
        <div className="last-name">last name</div>
      </div>
      <div className="confirm-password-field">
        <img className="last-name-field-child" alt="" src="/rectangle-2.svg" />
        <div className="last-name">confirm password</div>
      </div>
      <div className="password-field1">
        <img className="last-name-field-child" alt="" src="/rectangle-2.svg" />
        <div className="last-name">password</div>
      </div>
      <div className="email-field1">
        <img className="last-name-field-child" alt="" src="/rectangle-2.svg" />
        <div className="last-name">email</div>
      </div>
      <div className="first-name-field">
        <img className="last-name-field-child" alt="" src="/rectangle-2.svg" />
        <div className="first-name">first name</div>
      </div>
      <div className="login-button1" onClick={onLoginButtonContainerClick}>
        <div className="login-button-item" />
        <div className="sign-up3">SIGN UP</div>
      </div>
    </div>
  );
};

export default SignUp;
