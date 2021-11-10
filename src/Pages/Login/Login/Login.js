import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {user,login,autherror, isloading}=useAuth()
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const hndlesubmitlogin = (e) => {
    e.preventDefault();
    login(loginData.email, loginData.password)
  };
  return (
    <Container>
      <Grid sx={{ mt: 2 }} container spacing={2}>
        <Grid sx={{ mt: 16 }} item xs={12} md={6}>
          <Typography variant="h6">Login</Typography>
          <form onSubmit={hndlesubmitlogin}>
            <TextField
              sx={{ width: '75%', m: '2', py: 4 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnchange}
              variant="standard"
            />
            <TextField
              sx={{ width: '75%', m: '2', py: 4 }}
              id="standard-basic"
              type="password"
              label="Password"
              name="password"
              onChange={handleOnchange}
              variant="standard"
            />

            <Button
              type="submit"
              sx={{ mt: 3, backgroundColor: '#1ac6ff', width: '75%', px: 4 }}
              variant="contained"
            >
              Login
            </Button>

            <Typography variant="h6">OR</Typography>
            <NavLink style={{ textDecoration: 'none' }} to="/register">
              <Button
                sx={{ backgroundColor: '#1ac6ff', width: '75%', px: 4 }}
                variant="contained"
              >
                Register
              </Button>
            </NavLink>
          </form>
          {isloading && <CircularProgress />}
          {user?.email && <Alert severity="success">login is success</Alert>}
          {autherror && <Alert severity="error">{autherror}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
