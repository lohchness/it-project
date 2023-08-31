import React, { useState, useEffect } from "react";

function Login() {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        alert("logged in");
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
      }
    
    return (
        <div className="login-container">
            <h1>Log in</h1>
            <form className="authentication-form" method="post" onSubmit={handleSubmit}>
                <input className="form-field" type="email" placeholder="email" required></input>
                <input className="form-field" type="password" placeholder="password" required></input>
                <a id="forgot-password">Forgot your password?</a>
                <button type="submit" className="login-button">Login</button>
            </form>
            <div id="signup-link">Don't have an account? <a>Sign up.</a></div>
        </div>
    );
}

export default Login;
