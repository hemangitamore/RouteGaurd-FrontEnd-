import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AdminDashBoard = () => {
  const [data, setData] = useState({
    driverCount: 0,
    vehicleCount: 0,
    tripCount: 0,
    ongoingTripCount: 0,
    latestCompletedTrips: [],
    ongoingTrips: []
  });

  useEffect(() => {
    // Fetch data from your API
    axios.get('/api/AdminDashBoard') // Replace with your API endpoint
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching dashboard data:', error));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Cards for Driver, Vehicle, Trip, and Ongoing Trip Details */}
        <DashboardCard title="Driver Details" value={data.driverCount} />
        <DashboardCard title="Vehicle Details" value={data.vehicleCount} />
        <DashboardCard title="Trip Details" value={data.tripCount} />
        <DashboardCard title="Ongoing Trips" value={data.ongoingTripCount} />
      </Grid>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Latest Completed Trips
          </Typography>
          <TripTable data={data.latestCompletedTrips} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Ongoing Trips
          </Typography>
          <TripTable data={data.ongoingTrips} />
        </Grid>
      </Grid>
    </Container>
  );
};

// DashboardCard Component using MUI Card
const DashboardCard = ({ title, value }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

// TripTable Component using MUI Table
const TripTable = ({ data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Trip ID</TableCell>
          <TableCell>Driver</TableCell>
          <TableCell>Vehicle</TableCell>
          <TableCell>Start Date</TableCell>
          <TableCell>End Date</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((trip) => (
          <TableRow key={trip.tripID}>
            <TableCell>{trip.tripID}</TableCell>
            <TableCell>{trip.driverName}</TableCell>
            <TableCell>{trip.vehicleModel}</TableCell>
            <TableCell>{new Date(trip.startDate).toLocaleDateString()}</TableCell>
            <TableCell>{trip.endDate ? new Date(trip.endDate).toLocaleDateString() : '-'}</TableCell>
            <TableCell>{trip.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default AdminDashBoard;
