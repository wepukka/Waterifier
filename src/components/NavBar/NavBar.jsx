import "./NavBar.css";

import { useNavigate } from "react-router-dom";
import { clearTokens } from "../../session";

export default function NavBar(props) {
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn } = props;

  const logOut = () => {
    setLoggedIn(false);
    clearTokens();
  };

  return (
    <div className="navBar">
      <div className="site-title">Waterifier</div>
      <div className="navBar-button-margin">
        {loggedIn ? (
          <button onClick={() => logOut()}>LOGOUT</button>
        ) : (
          <button onClick={() => navigate("/authenticate")}>LOGIN</button>
        )}
      </div>
    </div>
  );
}
