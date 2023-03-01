import("./LoginForm.css");
import { useState, useEffect } from "react";
import { Paper, TextField, Button } from "@mui/material";
import { apiLogin } from "../../../../api/apiAuth";
import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await apiLogin(username, password);
    console.log(response);
    if (response.success) {
      props.setUser(response.username);
      navigate("/shop");
    }
    setErrorMsg(response.message);
  };

  return (
    <Paper elevation={3} className="loginForm">
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
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          login();
        }}
      >
        Login
      </Button>
      <div className="login-error">{errorMsg}</div>
    </Paper>
  );
}
