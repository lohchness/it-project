import { useState, React, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./style.css";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [passwordResetStep, setPasswordResetStep] = useState(1);
    const [email, setEmail] = useState("");

    const { register, watch, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });

    const isValidEmail = email =>
    // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );

    function onSubmit(e) {
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Continue to next step of password reset process
        if (passwordResetStep < 3) {
            setPasswordResetStep(passwordResetStep + 1);
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
                <form className="reset-password-form" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className={`form-field ${errors.email ? 'error-form-field' : ''}`}
                        placeholder="Email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: isValidEmail
                        })}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required />
                    {errors.email && <label className="form-input-error-text">Email is not valid</label>}
                    <button className="continue-button" type="submit">Continue</button>
                </form>
            )}

            {passwordResetStep == 2 && (
                <form className="reset-password-form" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-field" placeholder="Confirmation code" type="text" required />
                    <button className="continue-button" type="submit">Continue</button>
                </form>
            )}

            {passwordResetStep == 3 && (
                <form className="reset-password-form" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-field" value={email} type="email" readOnly />
                    <input
                        className={`form-field ${errors.password ? 'error-form-field' : ''}`}
                        placeholder="New password"
                        type="password"
                        {...register("password", {
                            required: true, minLength: 5
                        })}
                        required />
                    {errors.password && <label className="form-input-error-text">Password is too short (minimum 5 characters)</label>}

                    <input
                        className={`form-field ${errors.confirmPassword ? 'error-form-field' : ''}`}
                        placeholder="Confirm password"
                        type="password"
                        {...register("confirmPassword", {
                            required: true,
                            validate: (val) => {
                                if (watch('password') != val) {
                                    return "Your passwords do not match";
                                }
                            },
                        })}
                        required />
                    {errors.confirmPassword && <label className="form-input-error-text">Passwords do not match</label>}

                    <button className="reset-password-button" type="submit">Reset password</button>
                </form>
            )}
        </div>
    );
};

export default ForgotPassword;
