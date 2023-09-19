import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
/*import Signup from "./pages/signup";*/
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
    </div>
  );
}
export default App;
