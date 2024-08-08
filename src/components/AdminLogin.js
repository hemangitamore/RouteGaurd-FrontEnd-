// src/components/AdminLogin.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import './AdminLogin.css';  // Import the CSS file for styling

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/admin/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // Redirect to admin dashboard or handle successful login
        console.log('Login successful');
        // For example: window.location.href = '/admin/dashboard';
      }
    } catch (error) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Card sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Admin Login
          </Typography>
          {error && <Typography color="error" variant="body2">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{ marginTop: 2 }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
