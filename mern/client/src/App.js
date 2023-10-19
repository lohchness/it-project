import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/login-signup/Login";
import SignUp from "./pages/login-signup/SignUp";
import ForgotPassword from "./pages/login-signup/ForgotPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Calendar from "./pages/calendar/Calendar";
import Profile from "./pages/profile/Profile";
import Connections from "./pages/connections/Connections";
import Messaging from "./pages/messenger/Messaging";

const App = () => {
  return (
      <Routes>
        {/* Should only be accessible when not signed in */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>

        {/* Should only be accessible when user is logged in */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/profile" element={<Profile/>}/>
          <Route path="/connections" element={<Connections />} />
          <Route path="/messaging" element={<Messaging />} />
      </Routes>
  );
};

export default App;
