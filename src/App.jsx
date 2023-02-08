import "./App.css";

import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { authenticate } from "./Api/auth";
import AuthPage from "./Views/AuthPage/AuthPage";
import HomePage from "./Views/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const checkAuthStatus = async () => {
    try {
      const auth = await authenticate();
      setLoggedIn(auth.success);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  if (!loggedIn) {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/authenticate"
            element={<AuthPage setLoggedIn={setLoggedIn} />}
          />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
