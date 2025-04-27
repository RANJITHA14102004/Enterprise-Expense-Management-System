import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Employee Dashboard
      </Typography>

      <Grid container spacing={4}>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 200, backgroundColor: '#E3F2FD', cursor: 'pointer' }} onClick={() => navigate('/create-expense')}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Create New Expense
              </Typography>
              <Typography variant="body2">
                Add new expense report with receipts and categories.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 200, backgroundColor: '#E8F5E9', cursor: 'pointer' }} onClick={() => navigate('/view-expenses')}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                View My Expenses
              </Typography>
              <Typography variant="body2">
                Check status of your submitted expenses.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 200, backgroundColor: '#FFF3E0', cursor: 'pointer' }} onClick={() => navigate('/analytics')}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Expense Analytics
              </Typography>
              <Typography variant="body2">
                View charts & graphs of your expenses.
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

export default EmployeeDashboard;
