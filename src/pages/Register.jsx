import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../services/api'; // make sure api.js exists

const Register = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    try {
      const response = await api.post('/auth/register', { name, email, password });
      console.log(response.data);

      setSuccess('Registration Successful!');
      setError('');

      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (err) {
      console.error(err);
      setError('Registration Failed!');
      setSuccess('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Register</Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <TextField 
        fullWidth 
        label="Name" 
        margin="normal" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
        onClick={handleRegister}
        sx={{ mt: 2 }}
      >
        Register
      </Button>
    </Container>
  );
};

export default Register;
