import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPasswordPage3 from "./pages/ForgotPasswordPage3";
import ForgotPasswordPage2 from "./pages/ForgotPasswordPage2";
import ForgotPasswordPage1 from "./pages/ForgotPasswordPage1";
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
      case "/":
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
      <Route path="/" element={<SignUp />} />
      <Route path="/forgot-password-page-3" element={<ForgotPasswordPage3 />} />
      <Route path="/forgot-password-page-2" element={<ForgotPasswordPage2 />} />
      <Route path="/forgot-password-page-1" element={<ForgotPasswordPage1 />} />
    </Routes>
  );
}
export default App;
