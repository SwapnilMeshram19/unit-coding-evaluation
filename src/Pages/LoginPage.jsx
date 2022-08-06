import { Label } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import {Navigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginError, loginSuccess } from "../store/auth/action";

export const Login = () => {
  const {token} = useSelector((state) => state);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = () => {
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: loginData,
    })
      .then((res) => {
        dispatch(loginSuccess(res.data.token));
      })
      .catch((error) => {
        dispatch(loginError());
      });
  };

  if(token){
    return <Navigate to="/"/>
  }
  return (
    <Box
      variant="div"
      className="login"
      sx={{ width: "400px", margin: "auto", marginTop: "50px" }}
    >
      <Typography variant="h4" sx={{ margin: "10px", fontWeight: "700" }}>
        LOGIN
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        label="Email"
        name="email"
        value={loginData.email}
        onChange={handleChange}
        sx={{ margin: "10px" }}
      />
      <br />
      <TextField
        variant="outlined"
        size="small"
        label="Password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        sx={{ margin: "10px" }}
      />
      <br />
      <Button onClick={()=>handleLogin()} variant="contained" sx={{ margin: "10px" }}>
        Login
      </Button>
    </Box>
  );
};
