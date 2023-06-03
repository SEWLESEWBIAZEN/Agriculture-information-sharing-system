import React, { useRef, useState, useEffect } from 'react';
import { TextField, Checkbox, Button, FormControlLabel, Grid, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NavBar from './landingPage/NavBar';
import Footer from './landingPage/Footer';
import useAuth from '../hooks/useAuth';
import { toast } from "react-toastify";

import axios from '../api/axios';
//const LOGIN_URL = '/auth';

const theme = createTheme();

const Login = () =>
{
    const { setAuth } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() =>
    {
        userRef.current.focus();
    }, [])

    useEffect(() =>
    {
        setErrMsg('');
    }, [email, password])

    const handleEmailChange = (e) =>
    {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) =>
    {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e) =>
    {
        setRememberMe(e.target.checked);
    };

    const handleForgotPassword = () =>
    {
        // Handle forgot password logic here
        console.log('Forgot password');
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        // axios.post("https://wide-eyed-bat-nightgown.cyclic.app/login", {
        //     email: email,
        //     password: password
        // }).then((response) =>
        // {
        //     console.log(response.data)
        //     alert("successfully loggedin")
        // }).catch((err) =>
        // {
        //     console.log(err);
        //     console.log(err.response)
        //     toast.error(err.response.data.message)
        // })
        // Perform authentication logic here (e.g., calling an API)
        // Assume successful authentication for simplicity
        try
        {
            const response = await axios.post("https://wide-eyed-bat-nightgown.cyclic.app/login",
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, password });
            setEmail('');
            setPassword('');
            navigate(from, { replace: true });
        } catch (err)
        {
            if (!err?.response)
            {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400)
            {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401)
            {
                setErrMsg('Unauthorized');
            } else
            {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

        // Perform login authentication logic here

    };

    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6} md={4} >
                    <Paper elevation={5} sx={{ padding: '20px', margin: '5rem auto' }}>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <Typography variant="h4" align="center" gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                fullWidth
                                ref={userRef}
                                value={email}
                                onChange={handleEmailChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                type="password"
                                label="Password"
                                fullWidth
                                value={password}
                                onChange={handlePasswordChange}
                                margin="normal"
                                required
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={rememberMe}
                                        onChange={handleRememberMeChange}
                                        color="primary"
                                    />
                                }
                                label="Remember Me"
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Login
                            </Button>
                        </form>
                        <Link to="#" onClick={handleForgotPassword} variant="body2" align="center"
                            style={{ marginRight: '2rem', textDecoration: 'none' }}>
                            Forgot Password?
                        </Link>
                        <Link to="/sign-up" variant="body2" align="center"
                            style={{ marginLeft: '0.1rem', textDecoration: 'none' }}>
                            No Account? Register
                        </Link>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </ThemeProvider>
    );
};

export default Login;
