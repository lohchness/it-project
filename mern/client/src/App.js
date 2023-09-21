import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
//import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

import Login from "./pages/login-signup/Login";
import SignUp from "./pages/login-signup/SignUp";
import ForgotPassword from "./pages/login-signup/ForgotPassword";
import Dashboard from "./pages/dashboard-calendar/Dashboard";
import Calendar from "./pages/dashboard-calendar/Calendar";

const App = () => {
  return (
      <Routes>
        <Route exact path="/record-list" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar/>}/>
        
      </Routes>
  );
};

export default App;
