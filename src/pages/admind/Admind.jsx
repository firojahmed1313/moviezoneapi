import React, { useState } from "react";
import "./admind.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import AdminUserSection from "./AdminUserSection";

const Admind = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [name, setName] = useState({
    username: "",
    password: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;

    setName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleLogin = () => {
    if (name.username === "admin" && name.password === "admin") {
      navigate("/crud");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <div className="contaner">
        
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="Adminsignin">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="input">
              <TextField
                id="outlined-disabled"
                label="username"
                name="username"
                value={name.username}
                onChange={inputEvent}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                name="password"
                value={name.password}
                onChange={inputEvent}
              />
            </div>
          </Box>
          <Button onClick={handleLogin} variant="contained">
            <SendIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Admind;
