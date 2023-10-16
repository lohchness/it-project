import { React, useCallback, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "universal-cookie";

import "./style.css";
import { SERVER_URL } from "../../index.js";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const tokenValue = cookies.get("token");

    const [email, setEmail] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [passwordResetStep, setPasswordResetStep] = useState(1);

    const { register, watch, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });

    const isValidEmail = email =>
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );

    // If token does not exist, redirect to login page
    useEffect(() => {
        if (tokenValue) {
            navigate("/dashboard");
        }
    }, []);

    const onSubmit = (e) => {
        let configuration;

        // Continue to next step of password reset process
        if (passwordResetStep < 3) {
            if (passwordResetStep == 1) {
                configuration = {
                    method: "post",
                    url: SERVER_URL + "/auth/request-password-reset",
                    data: {
                        email
                    },
                };

            } else if (passwordResetStep == 2) {
                configuration = {
                    method: "post",
                    url: SERVER_URL + "/auth/verify-confirmation-code",
                    data: {
                        confirmationCode
                    },
                };
            }

            // make the API call
            axios(configuration)
                .then((result) => {
                    console.log(result);
                    setPasswordResetStep(passwordResetStep + 1);
                })
                .catch((error) => {
                    setError(true);
                    console.log(error);
                });
        }

        else {
            configuration = {
                method: "post",
                url: SERVER_URL + "/auth/reset-password",
                data: {
                    email,
                    password
                },
            };

            // make the API call
            axios(configuration)
                .then((result) => {
                    console.log(result);
                    navigate("/login");
                })
                .catch((error) => {
                    setError(true);
                    console.log(error);
                });

        }
    }
    
    // Check to see if JWT token exists before laoding page
    if (tokenValue) {
        navigate("/dashboard");
    } else {
        return (
            <div className="forgot-password-container">
                <h1 className="forgot-password">Forgot password?</h1>

                {passwordResetStep == 1 && (
                    <>
                        <form className="reset-password-form" method="post" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className={`form-field ${(error || errors.email) ? 'error-form-field' : ''}`}
                                placeholder="Email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    validate: isValidEmail
                                })}
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setError(false) }}
                                required />
                            {errors.email && <label className="form-input-error-text">Email is not valid</label>}
                            {error && <label className="form-input-error-text">No account registered with this email</label>}
                            <button className="continue-button" type="submit">Continue</button>
                        </form>
                    </>
                )}

                {passwordResetStep == 2 && (
                    <>
                        <form className="reset-password-form" method="post" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className={`form-field ${(error) ? 'error-form-field' : ''}`}
                                placeholder="Confirmation code"
                                type="text"
                                value={confirmationCode}
                                onChange={(e) => { setConfirmationCode(e.target.value); setError(false) }}
                                required />
                            {error && <label className="form-input-error-text">Confirmation code is not valid</label>}
                            <button className="continue-button" type="submit">Continue</button>
                        </form>
                    </>
                )}

                {passwordResetStep == 3 && (
                    <>
                        <form className="reset-password-form" method="post" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="form-field"
                                value={email}
                                type="email"
                                readOnly />

                            <input
                                className={`form-field ${errors.password ? 'error-form-field' : ''}`}
                                placeholder="New password"
                                type="password"
                                {...register("password", {
                                    required: true, minLength: 5
                                })}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                            <button className="reset-password-button" type="submit">
                                Reset password
                            </button>
                        </form>
                    </>
                )}
            </div>
        );
    }
};

export default ForgotPassword;