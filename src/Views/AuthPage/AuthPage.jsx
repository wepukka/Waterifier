import "./AuthPage.css";
import { useState, useEffect } from "react";
import LoginForm from "./components/Login/Login";
import RegisterForm from "./components/Register/Register";

export default function AuthPage(props) {
  const [isMember, setIsMember] = useState(true);
  const [registerText, setRegisterText] = useState(
    "Not a member yet? Register"
  );

  const toggleMemberState = () => {
    setIsMember((prev) => !prev);

    isMember
      ? setRegisterText("Already a member? Login")
      : setRegisterText("Not a member yet? Register");
  };

  return (
    <div className="authPage">
      {isMember ? <LoginForm {...props} /> : <RegisterForm {...props} />}
      <a className="text-white" onClick={() => toggleMemberState()}>
        {registerText}
      </a>
    </div>
  );
}
