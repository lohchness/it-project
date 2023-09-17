import { useState, React, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [passwordResetStep, setPasswordResetStep] = useState(1);

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Continue to next step of password reset process
        if (passwordResetStep<3){
            setPasswordResetStep(passwordResetStep+1);
        }
        else {
            console.log("password reset");
            navigate("/login");
        }
    }
    
    return (
        <div className="forgot-password-container">
            <h1 className="forgot-password">Forgot password?</h1>
            
            {passwordResetStep == 1 && (
                <form className="reset-password-form"  method="post" onSubmit={handleSubmit}>
                    <input className="form-field" placeholder="Email" type="email" required/>
                    <button className="continue-button" type="submit">Continue</button>
                </form>
            )}

            {passwordResetStep == 2 && (
                <form className="reset-password-form"  method="post" onSubmit={handleSubmit}>
                    <input className="form-field" placeholder="Confirmation code" type="text" required/>
                    <button className="continue-button" type="submit">Continue</button>
                </form>
            )}

            {passwordResetStep == 3 && (
                <form className="reset-password-form"  method="post" onSubmit={handleSubmit}>
                    <input className="form-field email" value="example@email.com" type="email" readOnly/>
                    <input className="form-field new-password" placeholder="New password" type="password" required/>
                    <input className="form-field confirm-password" placeholder="Vonfirm new password" type="password" required/>
                    <button className="continue-button" type="submit">Continue</button>
                </form>
            )}
        </div>
    );
};

export default ForgotPassword;
