import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

const EditExpense = () => {
  const { id } = useParams();
  const [expense, setExpense] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchExpense();
  }, []);

  const fetchExpense = async () => {
    try {
      const response = await api.get(`/expenses/${id}`);
      setExpense(response.data);
    } catch (error) {
      console.error('Error fetching expense:', error);
    }
  };

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/expenses/${id}`, expense);
      navigate('/expenses');
    } catch (error) {
      console.error('Error updating expense:', error);
    }
  };

  if (!expense) return <Typography>Loading...</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>Edit Expense</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Title" name="title" value={expense.title} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Date" type="date" name="date" value={expense.date} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
        <TextField label="Category" name="category" value={expense.category} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Amount" name="amount" value={expense.amount} onChange={handleChange} fullWidth margin="normal" type="number" />
        <TextField label="Description" name="description" value={expense.description} onChange={handleChange} fullWidth margin="normal" multiline rows={4} />

        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Update Expense
        </Button>
      </form>
    </Box>
  );
};

export default EditExpense;
