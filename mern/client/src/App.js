import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/login-signup/Login";
import SignUp from "./pages/login-signup/SignUp";
import ForgotPassword from "./pages/login-signup/ForgotPassword";
import ProfileInfo2 from "./pages/profile/ProfileInfo2";

const App = () => {
  return (
      <Routes>        
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/profile" element={<ProfileInfo2/>}/>
      </Routes>
  );
};

export default App;
