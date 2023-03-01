import "./NavBar.css";
import ShopIcon from "@mui/icons-material/Shop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CalculateIcon from "@mui/icons-material/Calculate";
import MenuIcon from "@mui/icons-material/Menu";
import CircularProgress from "@mui/material/CircularProgress";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { clearTokens } from "../../../session";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
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
          {!props.user ? (
            <li onClick={() => navigateTo("/auth")}>
              <p>Login</p>
              <LoginIcon sx={{ color: "#283b8b" }} />
            </li>
          ) : (
            <li
              className="navigation-user"
              onClick={() => navigateTo("/profile")}
            >
              <p>Hello {props.user}!</p>
              <PersonIcon sx={{ color: "#283b8b" }} />
              <div className="navigation-user-hover-menu">
                <p
                  onClick={(e) => e.stopPropagation() + navigateTo("/profile")}
                >
                  <PersonIcon sx={{ color: "#283b8b" }} />
                  Profile
                </p>
                <p
                  onClick={(e) =>
                    e.stopPropagation() + clearTokens() + props.setUser(null)
                  }
                >
                  <LogoutIcon sx={{ color: "#283b8b" }} />
                  Logout
                </p>
              </div>
            </li>
          )}
          <li onClick={() => navigateTo("/")}>
            <p>calculator</p>
            <CalculateIcon sx={{ color: "#283b8b" }} />
          </li>
          <li onClick={() => navigateTo("/shop")}>
            <p>shop</p>
            <ShopIcon sx={{ color: "#283b8b" }} />
          </li>
          <li onClick={() => navigateTo("/cart")}>
            <p>cart</p>
            <ShoppingCartIcon sx={{ color: "#283b8b" }} />
          </li>
          {loading && (
            <li>
              <CircularProgress />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
