import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Manager Dashboard
      </Typography>

      <Grid container spacing={4}>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 200, backgroundColor: '#F3E5F5', cursor: 'pointer' }} onClick={() => navigate('/pending-approvals')}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pending Approvals
              </Typography>
              <Typography variant="body2">
                Review employee expense reports and approve or reject them.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: 200, backgroundColor: '#E0F7FA', cursor: 'pointer' }} onClick={() => navigate('/manager-analytics')}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Expense Analytics
              </Typography>
              <Typography variant="body2">
                Analyze spending trends across teams.
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

export default ManagerDashboard;
