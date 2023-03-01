import("./RegisterForm.css");

import { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import { apiRegister } from "../../../../api/apiAuth";
import { useNavigate } from "react-router-dom";

export default function RegisterForm(props) {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const checkCredentials = () => {
    if (username.length < 4) {
      return setErrorMsg("Username minimum length 4");
    }
    if (password.length < 8) {
      return setErrorMsg("Password minimum length 8");
    }
    if (!email.includes("@") || !email.includes(".")) {
      return setErrorMsg("Invalid email");
    } else {
      return true;
    }
  };

  const register = async () => {
    if (checkCredentials()) {
      const response = await apiRegister(username, password, email);
      if (response.success) {
        props.setUser(response.username);
        navigate("/shop");
      }
      setErrorMsg(response.message);
    }
  };

  return (
    <Paper elevation={3} className="registerForm">
      <h2 style={{ alignSelf: "flex-start" }}>Register</h2>
      <TextField
        variant="standard"
        id="username"
        label="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        variant="standard"
        id="password"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextField
        variant="standard"
        id="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={() => register()}>
        Register
      </Button>
      <div className="register-error">{errorMsg}</div>
    </Paper>
  );
}
