import React, { useState } from 'react';
import { TextField, Button, Link, Grid, Paper, Typography, Select, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './landingPage/NavBar';
import Footer from './landingPage/Footer';

const theme = createTheme();

const Register = () =>
{
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [age, setAge] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');



    const handleUsernameChange = (e) =>
    {
        setUsername(e.target.value);
    };
    const handleFullnameChange = (e) =>
    {
        setFullname(e.target.value);
    };
    const handlePhonenumberChange = (e) =>
    {
        setPhonenumber(e.target.value);
    };
    const handleAddressChange = (e) =>
    {
        setAddress(e.target.value);
    };
    const handleRoleChange = (e) =>
    {
        setRole(e.target.value);
    }
    const handleEmailChange = (e) =>
    {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) =>
    {
        setPassword(e.target.value);
    };
    const handleConfirmpasswordChange = (e) =>
    {
        setConfirmPassword(e.target.value);
    };
    const handleAgeChange = (e) =>
    {
        setAge(e.target.value);
    }



    const handleRegister = (e) =>
    {
        e.preventDefault();

        // Perform sign-up logic here
        console.log('Sign Up');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleLogin = () =>
    {
        // Handle login logic here
        console.log('Login');
    };

    return (
        <div>
            <NavBar />
            <ThemeProvider theme={theme}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={8}>
                        <Paper elevation={5} sx={{ padding: '20px', margin: '5rem auto' }}>
                            <Typography variant="h4" align="center" gutterBottom>
                                Register
                            </Typography>
                            <form onSubmit={handleRegister}>
                                <TextField
                                    label="Username"
                                    fullWidth
                                    value={username}
                                    onChange={handleUsernameChange}
                                    margin="normal"
                                    required

                                />
                                <TextField
                                    label="Full Name"
                                    fullWidth
                                    value={fullname}
                                    onChange={handleFullnameChange}
                                    margin="normal"
                                    required

                                />
                                <TextField
                                    type="email"
                                    label="Email"
                                    fullWidth
                                    value={email}
                                    onChange={handleEmailChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    label="Age"
                                    type="number"
                                    fullWidth
                                    value={age}
                                    onChange={handleAgeChange}
                                    margin="normal"
                                    required

                                />
                                <TextField
                                    label="Phone Number"
                                    type="number"
                                    fullWidth
                                    value={phonenumber}
                                    onChange={handlePhonenumberChange}
                                    margin="normal"
                                    required

                                />
                                <TextField
                                    label="Address"
                                    fullWidth
                                    value={address}
                                    onChange={handleAddressChange}
                                    margin="normal"
                                    required

                                />
                                <Select
                                    labelId="select-label"
                                    id="select-input"
                                    fullWidth
                                    value={role}
                                    onChange={handleRoleChange}
                                    label="Select_Role"
                                    required
                                >
                                    <MenuItem default value="option1">Select Role</MenuItem>
                                    <MenuItem value="option1">Option 1</MenuItem>
                                    <MenuItem value="option2">Option 2</MenuItem>
                                    <MenuItem value="option3">Option 3</MenuItem>
                                </Select>


                                <TextField
                                    type="password"
                                    label="Password"
                                    fullWidth
                                    value={password}
                                    onChange={handlePasswordChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    type="password"
                                    label="Confirm Password"
                                    fullWidth
                                    value={confirmpassword}
                                    onChange={handleConfirmpasswordChange}
                                    margin="normal"
                                    required
                                />
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Register
                                </Button>
                            </form>
                            <Typography variant="body2" align="center" marginTop="10px">
                                Already Registered?{' '}
                                <Link href="/sign-in">
                                    Login
                                </Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </ThemeProvider>
            <Footer />
        </div>
    );
};

export default Register;
