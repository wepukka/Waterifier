import("./Authentication.css");
import { useState } from "react";
import RegisterForm from "./Components/Register/RegisterForm";
import LoginForm from "./Components/Login/LoginForm";

export default function Authentication(props) {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleRegistering = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="authentication">
      {isRegistering ? <RegisterForm {...props} /> : <LoginForm {...props} />}
      <p className="authentication-text" onClick={() => toggleRegistering()}>
        {isRegistering ? "Already a member? Login" : "Not a member? Register"}
      </p>
    </div>
  );
}
