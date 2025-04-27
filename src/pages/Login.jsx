import { Button, TextField, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <Button fullWidth variant="contained" color="primary">Login</Button>
      <Typography variant="body2" sx={{ mt: 2 }}>
             Don't have an account? <Link to="/register">Register Here</Link>
      </Typography>
    </Container>
  );
};

export default Login;
