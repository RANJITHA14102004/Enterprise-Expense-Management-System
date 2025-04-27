import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Alert } from '@mui/material';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', role: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user profile details from backend
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load profile');
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      await api.put('/user/update-profile', user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess('Profile updated successfully!');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to update profile');
      setSuccess('');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>My Profile</Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <TextField
        fullWidth
        label="Name"
        margin="normal"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={user.email}
        disabled
      />
      <TextField
        fullWidth
        label="Role"
        margin="normal"
        value={user.role}
        disabled
      />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={handleUpdate}
      >
        Update Profile
      </Button>

      <Button
        fullWidth
        variant="outlined"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={() => navigate(-1)}  // Go back
      >
        Back
      </Button>
    </Container>
  );
};

export default Profile;
