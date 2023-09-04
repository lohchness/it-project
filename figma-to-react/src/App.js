import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import DashboardAddTask from "./pages/DashboardAddTask";
import SignUp from "./pages/SignUp";
import ForgotPasswordPage3 from "./pages/ForgotPasswordPage3";
import ForgotPasswordPage2 from "./pages/ForgotPasswordPage2";
import ForgotPasswordPage1 from "./pages/ForgotPasswordPage1";
import Group from "./pages/Group";
import ProfileInfo2 from "./pages/ProfileInfo2";
import Messaging from "./pages/Messaging";
import Connections from "./pages/Connections";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-add-task":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/group-2":
        title = "";
        metaDescription = "";
        break;
      case "/profile-info-2":
        title = "";
        metaDescription = "";
        break;
      case "/messaging":
        title = "";
        metaDescription = "";
        break;
      case "/connections":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/calendar":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard-add-task" element={<DashboardAddTask />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password-page-3" element={<ForgotPasswordPage3 />} />
      <Route path="/forgot-password-page-2" element={<ForgotPasswordPage2 />} />
      <Route path="/forgot-password-page-1" element={<ForgotPasswordPage1 />} />
      <Route path="/group-2" element={<Group />} />
      <Route path="/profile-info-2" element={<ProfileInfo2 />} />
      <Route path="/messaging" element={<Messaging />} />
      <Route path="/connections" element={<Connections />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}
export default App;
