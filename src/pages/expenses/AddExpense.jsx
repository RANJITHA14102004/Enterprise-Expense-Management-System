import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const AddExpense = () => {
  const [expense, setExpense] = useState({
    title: '',
    date: '',
    category: '',
    amount: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/expenses', expense);
      navigate('/expenses');
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>Add New Expense</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Title" name="title" value={expense.title} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Date" type="date" name="date" value={expense.date} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
        <TextField label="Category" name="category" value={expense.category} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Amount" name="amount" value={expense.amount} onChange={handleChange} fullWidth margin="normal" type="number" />
        <TextField label="Description" name="description" value={expense.description} onChange={handleChange} fullWidth margin="normal" multiline rows={4} />

        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Submit Expense
        </Button>
      </form>
    </Box>
  );
};

export default AddExpense;
