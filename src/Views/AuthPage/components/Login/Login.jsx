import("./Login.css");
import { useState, useEffect } from "react";
import { apiLogin } from "../../../../Api/auth";
import { Paper, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const [errorMsg, setErrorMsg] = useState("");

  const login = async () => {
    try {
      const loginStatus = await apiLogin(username, password);
      props.setLoggedIn(loginStatus.success);

      setErrorMsg(loginStatus.message);
    } catch (err) {
      setErrorMsg("Server error");
    }
  };

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Paper elevation={3}>
      <form className="loginForm">
        <h2 style={{ alignSelf: "flex-start" }}>Login</h2>
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
      </form>
      <div>{errorMsg}</div>

      <Button
        variant="contained"
        size="large"
        sx={{ marginBottom: "20px" }}
        onClick={() => login(username, password)}
      >
        Login
      </Button>
    </Paper>
  );
}
