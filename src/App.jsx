import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  redirect,
} from "react-router-dom";

import HomePage from "./Views/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import WaterShop from "./Views/WaterShop/waterShop";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="*" element={<HomePage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<WaterShop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
