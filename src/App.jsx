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
import Cart from "./Views/Cart/Cart";
import NotReady from "./Views/NotReady/NotReady";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="*" element={<NotReady />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
