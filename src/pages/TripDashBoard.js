import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Grid, IconButton
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TripDashBoard = () => {
  const [trip, setTrip] = useState({
    id: null,
    driver: null,
    vehicle: null,
    startDate: '',
    endDate: '',
    route: '',
    status: 'Planned',
  });
  const [trips, setTrips] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch initial trip data
    axios.get('/api/trips')
      .then(response => setTrips(response.data))
      .catch(error => console.error('Error fetching trips:', error));

    // Fetch driver options for auto-suggestion
    axios.get('/api/drivers')
      .then(response => setDrivers(response.data))
      .catch(error => console.error('Error fetching drivers:', error));

    // Fetch vehicle options for auto-suggestion
    axios.get('/api/vehicles')
      .then(response => setVehicles(response.data))
      .catch(error => console.error('Error fetching vehicles:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrip({ ...trip, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update trip
      axios.put(`/api/trips/${trip.id}`, trip)
        .then(response => {
          setTrips(trips.map(t => (t.id === trip.id ? response.data : t)));
          setEditMode(false);
          resetForm();
        })
        .catch(error => console.error('Error updating trip:', error));
    } else {
      // Create new trip
      axios.post('/api/trips', trip)
        .then(response => {
          setTrips([...trips, response.data]);
          resetForm();
        })
        .catch(error => console.error('Error creating trip:', error));
    }
  };

  const handleEdit = (trip) => {
    setTrip(trip);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/trips/${id}`)
      .then(() => setTrips(trips.filter(t => t.id !== id)))
      .catch(error => console.error('Error deleting trip:', error));
  };

  const resetForm = () => {
    setTrip({
      id: null,
      driver: null,
      vehicle: null,
      startDate: '',
      endDate: '',
      route: '',
      status: 'Planned',
    });
  };

  // Define column definitions for AG Grid
  const columns = [
    { headerName: 'Driver', field: 'driverName' },
    { headerName: 'Vehicle', field: 'vehicleModel' },
    { headerName: 'Route', field: 'route' },
    { headerName: 'Start Date', field: 'startDate', valueFormatter: params => new Date(params.value).toLocaleDateString() },
    { headerName: 'End Date', field: 'endDate', valueFormatter: params => params.value ? new Date(params.value).toLocaleDateString() : '-' },
    { headerName: 'Status', field: 'status' },
    {
      headerName: 'Actions', 
      cellRendererFramework: (params) => (
        <div>
          <IconButton onClick={() => handleEdit(params.data)} color="primary">
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.data.id)} color="secondary">
            <Delete />
          </IconButton>
        </div>
      )
    }
  ];

  // Map data for AG Grid
  const rowData = trips.map(trip => ({
    ...trip,
    driverName: trip.driver ? trip.driver.name : '',
    vehicleModel: trip.vehicle ? trip.vehicle.model : '',
  }));

  return (
    <div className="container mt-4">
      <h2>Trip Management</h2>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={4}>
            <Autocomplete
              options={drivers}
              getOptionLabel={(option) => option.name}
              value={trip.driver}
              onChange={(event, newValue) => setTrip({ ...trip, driver: newValue })}
              renderInput={(params) => <TextField {...params} label="Select Driver" required />}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Autocomplete
              options={vehicles}
              getOptionLabel={(option) => option.model}
              value={trip.vehicle}
              onChange={(event, newValue) => setTrip({ ...trip, vehicle: newValue })}
              renderInput={(params) => <TextField {...params} label="Select Vehicle" required />}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Route"
              name="route"
              value={trip.route}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Start Date"
              type="date"
              name="startDate"
              value={trip.startDate}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="End Date"
              type="date"
              name="endDate"
              value={trip.endDate}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {editMode ? 'Update' : 'Add'} Trip
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="ag-theme-alpine" style={{ height: '600px', width: '100%' }}>
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};

export default TripDashBoard;
