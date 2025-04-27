import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      console.log(response);

      // Save token to localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.role);  // assuming backend returns role

      setSuccess('Login Successful!');
      setError('');

      // Navigate based on role
      if (response.role === 'EMPLOYEE') {
        navigate('/employee');
      } else if (response.role === 'MANAGER') {
        navigate('/manager');
      } else if (response.role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate('/dashboard');  // fallback
      }

    } catch (err) {
      console.error(err);
      setError('Invalid email or password');
      setSuccess('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login</Typography>
      
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <TextField 
        fullWidth 
        label="Email" 
        margin="normal" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField 
        fullWidth 
        label="Password" 
        type="password" 
        margin="normal" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button 
        fullWidth 
        variant="contained" 
        color="primary" 
        onClick={handleLogin}
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;
