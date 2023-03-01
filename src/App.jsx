import "./App.css";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WaterCalculator from "./Views/WaterCalculator/WaterCalculator";
import NavBar from "./components/NavBar/NavBar";
import Shop from "./Views/Shop/Shop";
import Cart from "./Views/Cart/Cart";
import NotReady from "./Views/NotReady/NotReady";
import Authentication from "./Views/Authentication/Authentication";
import { authenticate } from "./api/apiAuth";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const checkAuthStatus = async () => {
    const response = await authenticate();
    if (response.success) {
      setUser(response.user.username);
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route exact path="*" element={<NotReady />} />
          <Route exact path="/" element={<WaterCalculator />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route
            exact
            path="/auth"
            element={<Authentication setUser={setUser} />}
          />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
