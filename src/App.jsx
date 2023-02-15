import "./App.css";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  redirect,
} from "react-router-dom";

import HomePage from "./Views/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Shop from "./Views/Shop/Shop";

function App() {
  const [isShopping, setIsShopping] = useState(false);
  return (
    <div className="App">
      <Router>
        <NavBar shopping={isShopping} />
        <Routes>
          <Route exact path="*" element={<HomePage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/shop"
            element={<Shop setIsShopping={setIsShopping} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
