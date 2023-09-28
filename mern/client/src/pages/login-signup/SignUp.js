import { React, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./style.css";

const SignUp = () => {
    const navigate = useNavigate();
    const [signUpStep, setSignUpStep] = useState(1);

    const { register, watch, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });

    const isValidEmail = email =>
    // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );

    const onSignUpClick = useCallback(() => {
        navigate("/login");
    }, [navigate]);

    const onSubmit = (e) => {

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        if (signUpStep < 2) {
            setSignUpStep(signUpStep + 1);
        }
        else {
            console.log("signed up");
            navigate("/login");
        }
    }


    return (
        <div className="sign-up-container">
            <h1 className="title sign-up">Sign up</h1>

            {signUpStep == 1 && (
                <>
                    <form className="sign-up-form" method="post" onSubmit={handleSubmit(onSubmit)}>

                        <input
                            className={`form-field ${errors.firstName ? 'error-form-field':''}`}
                            placeholder="First name"
                            type="text"
                            {...register("firstName", {
                                required: true,
                                minLength: 2,
                                maxLength: 20
                            })}
                            required />
                        {errors.firstName && <label className="form-input-error-text">First name must be between 2 and 20 characters long</label>}

                        <input
                            className={`form-field ${errors.lastName ? 'error-form-field':''}`}
                            placeholder="Last name"
                            type="text" {...register("lastName", {
                                required: true,
                                minLength: 2,
                                maxLength: 20
                            })}
                            required />
                        {errors.lastName && <label className="form-input-error-text">Last name must be between 2 and 20 characters long</label>}

                        <input
                            className={`form-field ${errors.email ? 'error-form-field':''}`}
                            placeholder="Email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: isValidEmail
                            })}
                            required />
                        {errors.email && <label className="form-input-error-text">Email is not valid</label>}

                        <input
                            className={`form-field ${errors.password ? 'error-form-field':''}`}
                            placeholder="Password"
                            type="password"
                            {...register("password", {
                                required: true, minLength: 5
                            })}
                            required />
                        {errors.password && <label className="form-input-error-text">Password is too short (minimum 5 characters)</label>}

                        <input
                            className={`form-field ${errors.confirmPassword ? 'error-form-field':''}`}
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

                        <button className="continue-button" type="submit">
                            Continue
                        </button>
                    </form>
                    <div className="login-redirect">
                        Already have an account?
                        <Link className="sign-up-link" to="/login" onClick={onSignUpClick}>
                            Log in.
                        </Link>
                    </div>
                </>
            )}

            {signUpStep == 2 && (
                <>
                    <form className="sign-up-form" method="post" onSubmit={handleSubmit(onSubmit)}>
                        <textarea className="form-field" placeholder="About (optional)" type="text" />
                        <input className="form-field" placeholder="Phone number (optional)" type="tel" />
                        <button className="sign-up-button" type="submit">
                            Sign up
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default SignUp;
