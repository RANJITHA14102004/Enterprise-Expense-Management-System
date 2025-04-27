import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={4}>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 200, backgroundColor: '#FFF8E1', cursor: 'pointer' }} onClick={() => navigate('/manage-users')}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Manage Users
              </Typography>
              <Typography variant="body2">
                View, add, or remove employees and managers.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 200, backgroundColor: '#FCE4EC', cursor: 'pointer' }} onClick={() => navigate('/all-expenses')}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                View All Expenses
              </Typography>
              <Typography variant="body2">
                Full company expense reports and details.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 200, backgroundColor: '#E8F5E9', cursor: 'pointer' }} onClick={() => navigate('/admin-analytics')}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Company Analytics
              </Typography>
              <Typography variant="body2">
                Company-wide expense analytics and charts.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 200, backgroundColor: '#E1F5FE', cursor: 'pointer' }} onClick={() => navigate('/audit-logs')}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Audit Logs
              </Typography>
              <Typography variant="body2">
                View all system changes for security audits.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 4 }}
        onClick={() => {
          localStorage.removeItem('token');
          navigate('/');
        }}
      >
        Logout
      </Button>

    </Container>
  );
};

export default AdminDashboard;
