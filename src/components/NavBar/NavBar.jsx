import "./NavBar.css";
import ShopIcon from "@mui/icons-material/Shop";
import CalculateIcon from "@mui/icons-material/Calculate";
import MenuIcon from "@mui/icons-material/Menu";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigateTo = (destination) => {
    setLoading(true);
    setTimeout(() => {
      navigate(destination);
      setLoading(false);
      setIsNavExpanded(false);
    }, 1000);
  };

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
          <li onClick={() => navigateTo("/shop")}>
            <p>shop</p>
            <ShopIcon sx={{ color: "#283b8b" }} />
          </li>
          <li onClick={() => navigateTo("/")}>
            <p>calculator</p>
            <CalculateIcon sx={{ color: "#283b8b" }} />
          </li>
          {loading ? (
            <li>
              <CircularProgress />
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </nav>
  );
}
