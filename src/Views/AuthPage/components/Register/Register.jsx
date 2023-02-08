import("./Register.css");

import { useState } from "react";
import { apiRegister } from "../../../../Api/auth";
import { Paper, TextField, Button } from "@mui/material";

export default function RegisterForm(props) {
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const checkCredentials = () => {
    if (username.length < 4) {
      return setErrorMsg("Username minimum length 4");
    }
    if (password.length < 8) {
      return setErrorMsg("Password minimum length 8");
    } else {
      return true;
    }
  };

  const register = async () => {
    try {
      if (checkCredentials()) {
        const registerStatus = await apiRegister(username, password);

        props.setLoggedIn(registerStatus.success);
        setErrorMsg(registerStatus.message);
      }
    } catch (err) {
      setErrorMsg("Server error");
    }
  };

  return (
    <Paper elevation={3}>
      <div className="registerForm">
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
      </div>
      <Button
        variant="contained"
        size="large"
        sx={{ marginBottom: "20px" }}
        onClick={() => register()}
      >
        Register
      </Button>
      <div>{errorMsg}</div>
    </Paper>
  );
}
