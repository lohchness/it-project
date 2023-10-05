import { React, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "universal-cookie";

import "./style.css";

const Login = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);

    const { register, watch, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit" });

    const onSignUpClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const onForgotPasswordClick = useCallback(() => {
        navigate("/forgot-password");
    }, [navigate]);

    function onSubmit(e) {
        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:5050/auth/login",
            data: {
                email,
                password,
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                // set the cookie
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                });

                console.log("logged in");
                alert("logged in");
                
                // Redirect to dashboard
            })
            .catch((error) => {
                error = new Error();
                setLoginError(true);
            });

    }

    return (
        <div className="login-container">
            <h1 className="title log-in">Log in</h1>
            <form className="login-form" method="post" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className={`form-field ${errors.email ? 'error-form-field' : ''}`}
                    placeholder="Email"
                    type="email"
                    {...register("email", {
                        required: true,
                    })}
                    value={email}
                    onChange={(e) => {setEmail(e.target.value); setLoginError(false)}}
                    required />

                <input
                    className={`form-field ${errors.password ? 'error-form-field' : ''}`}
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                        required: true,
                    })}
                    value={password}
                    onChange={(e) => {setPassword(e.target.value); setLoginError(false)}}
                    required />
                

                <div className="forgot-password-link-container">
                    <Link className="forgot-password-link" to="/forgot-password" onClick={onForgotPasswordClick}>
                        Forgot your password?
                    </Link>
                </div>

                {loginError && <div className="form-input-error-text login-error">Incorrect email address or password</div>}

                <button className="login-button" type="submit">
                    Login
                </button>
            </form>
            {/* <div className="third-party-login-container">
            <div className="or-continue-with">or continue with</div>
            {/* <button className="facebook-login-button">
                <div className="facebook-login-button-child" />
                <img className="bifacebook-icon" alt="" src="/facebook-icon.png" />
            </button>
            <button className="github-login-button">
                <div className="facebook-login-button-child" />
                <img className="bifacebook-icon" alt="" src="/github-icon.png" />
            </button>
            <button className="google-login-button">
                <div className="facebook-login-button-child" />
                <img className="bifacebook-icon" alt="" src="/google-icon.png" />
            </button> 
             </div> */}
            <div className="sign-up-redirect">
                Don't have an account?
                <Link className="sign-up-link" to="/sign-up" onClick={onSignUpClick}>
                    Sign up.
                </Link>
            </div>
        </div>
    )
};

export default Login;
