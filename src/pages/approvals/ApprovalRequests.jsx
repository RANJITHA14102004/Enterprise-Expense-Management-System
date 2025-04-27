import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchApprovalRequests, approveRequest, rejectRequest } from '../../services/api'; // Corrected import

const ApprovalRequests = () => {
  const [approvalRequests, setApprovalRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApprovalRequests = async () => {
      try {
        const data = await fetchApprovalRequests(); // Call the service function
        setApprovalRequests(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching approval requests:', err);
        setError('Failed to fetch approval requests.');
        setLoading(false);
      }
    };

    getApprovalRequests();
  }, []);

  const handleApprove = async (id) => {
    try {
      await approveRequest(id); // Call the approve function
      setApprovalRequests((prev) => prev.filter((req) => req.id !== id));
    } catch (err) {
      console.error('Error approving request:', err);
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectRequest(id); // Call the reject function
      setApprovalRequests((prev) => prev.filter((req) => req.id !== id));
    } catch (err) {
      console.error('Error rejecting request:', err);
    }
  };

  if (loading) return <Typography>Loading approval requests...</Typography>;
  if (error) return <Typography>{error}</Typography>;

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Pending Approval Requests</Typography>
      {approvalRequests.length === 0 ? (
        <Typography>No pending requests.</Typography>
      ) : (
        <Grid container spacing={3}>
          {approvalRequests.map((request) => (
            <Grid item xs={12} sm={6} md={4} key={request.id}>
              <Paper elevation={3} sx={{ padding: '20px' }}>
                <Typography variant="h6">{request.expenseTitle}</Typography>
                <Typography>Amount: ${request.amount}</Typography>
                <Typography>Date: {request.date}</Typography>
                <Typography>Submitted By: {request.employeeName}</Typography>

                <Box sx={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between' }}>
                  <Button variant="contained" color="success" onClick={() => handleApprove(request.id)}>
                    Approve
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleReject(request.id)}>
                    Reject
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ApprovalRequests;



