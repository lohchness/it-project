import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { SERVER_URL } from "./index.js";
import Cookies from "universal-cookie";
import Login from "./pages/login-signup/Login";
import SignUp from "./pages/login-signup/SignUp";
import ForgotPassword from "./pages/login-signup/ForgotPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Calendar from "./pages/calendar/Calendar";
import Profile from "./pages/profile/Profile";
import Connections from "./pages/connections/Connections";
import Messaging from "./pages/messenger/Messaging";

const App = () => {
  const [userEmail, setUserEmail] = useState(null);

  const navigate = useNavigate();
  const cookies = new Cookies();
  const tokenValue = cookies.get("token");
  const location = useLocation(); // Get the current location

  const setProfileUserEmail = (email) => {
    setUserEmail(email);
  };

  const fetchUserEmail = async () => {
    try {
      const emailResponse = await fetch(`${SERVER_URL}/user/get-current-user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${tokenValue}`
        }
      });
      const emailData = await emailResponse.json();
      const userEmail_tmp = emailData.user.userEmail;
      setUserEmail(userEmail_tmp);
    } catch (error) {
      console.error("Error fetching user email:", error);
    }
  };

  // Listen for route changes and set userEmail to the current user's email for all paths except "profile"
  useEffect(() => {
    if (tokenValue) {
      fetchUserEmail();
    }
  }, [tokenValue]);

  useEffect(() => {
    if (location.pathname !== '/profile') {
      fetchUserEmail();
    }
  }, [location]);

  // const handleLogout = () => {
  //   cookies.remove("token");
  //   setUserEmail(null);
  //   navigate("/login");
  // };

  return (
    <Routes>
      {/* Should only be accessible when not signed in */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Should only be accessible when the user is logged in */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/profile" element={<Profile userEmail={userEmail} setProfileUserEmail={setProfileUserEmail} />} />
      <Route path="/connections" element={<Connections setProfileUserEmail={setProfileUserEmail} />} />
      <Route path="/messaging" element={<Messaging />} />
    </Routes>
  );
};

export default App;
