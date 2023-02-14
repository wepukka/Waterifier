import "./NavBar.css";
import ShopIcon from "@mui/icons-material/Shop";
import CalculateIcon from "@mui/icons-material/Calculate";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <div className="brand-name">Waterifier</div>
      <button
        className="navigation-menu-button"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <MenuIcon sx={{ color: "white" }} />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li onClick={() => navigate("/shop")}>
            <p>shop</p>
            <ShopIcon sx={{ color: "#283b8b" }} />
          </li>
          <li onClick={() => navigate("/")}>
            <p>calculator</p>
            <CalculateIcon sx={{ color: "#283b8b" }} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
