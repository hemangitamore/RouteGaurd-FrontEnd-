
// src/components/DriverRegistration.jsx

import React, { useState } from 'react';
import { Card, CardContent, CardActions, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const DriverRegistration = () => {
  const [formData, setFormData] = useState({
    driverName: '',
    licenseNumber: '',
    tripDetails: '',
    vehicleType: '',
    vehicleNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log('Form Data:', formData);
  };

  return (
    <div className="registration-card" data-aos="zoom-in-down">
      <Card sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
        <CardContent>
          <h2>Driver Registration</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Driver Name"
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="License Number"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Trip Details"
              name="tripDetails"
              value={formData.tripDetails}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Vehicle Type</InputLabel>
              <Select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                label="Vehicle Type"
              >
                <MenuItem value="Car">Car</MenuItem>
                <MenuItem value="Truck">Truck</MenuItem>
                <MenuItem value="Van">Van</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
            <TextField
              label="Vehicle Number"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </form>
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
            Register
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default DriverRegistration;
