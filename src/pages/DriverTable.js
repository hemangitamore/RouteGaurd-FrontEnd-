import React, { useState, useEffect } from 'react';
import { getAllDrivers } from '../services/user-services'; // Import the service function
import { formatDriverData } from '../helpers/driver-helpers'; // Import the helper function if needed
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const DriverTable = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      let data = await getAllDrivers();
      data = formatDriverData(data); // Format the data using the helper function if needed
      setDrivers(data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  return (
    <Container maxWidth="lg" className="driver-table-container" data-aos="zoom-in-down">
      <Typography variant="h4" gutterBottom>
        Registered Drivers
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Aadhar Number</TableCell>
              <TableCell>PAN Number</TableCell>
              <TableCell>Driver Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Nationality</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Modified By</TableCell>
              <TableCell>Modified At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver.id}>
                <TableCell>{driver.id}</TableCell>
                <TableCell>{driver.phoneNumber}</TableCell>
                <TableCell>{driver.adharNumber}</TableCell>
                <TableCell>{driver.panNumber}</TableCell>
                <TableCell>{driver.driverName}</TableCell>
                <TableCell>{driver.dob}</TableCell>
                <TableCell>{driver.address}</TableCell>
                <TableCell>{driver.nationality}</TableCell>
                <TableCell>{driver.createdBy}</TableCell>
                <TableCell>{driver.createdAt}</TableCell>
                <TableCell>{driver.modifiedBy}</TableCell>
                <TableCell>{driver.modifiedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DriverTable;