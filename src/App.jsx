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
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="*" element={<HomePage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
