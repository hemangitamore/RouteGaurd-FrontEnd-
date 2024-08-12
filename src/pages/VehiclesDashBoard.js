import React, { useState, useEffect } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const VehiclesDashBoard = () => {
  const [vehicle, setVehicle] = useState({
    id: null,
    vehicleNumber: '',
    vehicleName: '',
    vehicleModelNumber: '',
    puc: '',
    accidentHistory: '',
    carryingCapacity: '',
    createdBy: '',
    createdAt: '',
    modifiedBy: '',
    modifiedAt: '',
  });
  const [vehicles, setVehicles] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch initial vehicle data
    axios.get('/api/vehicles')
      .then(response => setVehicles(response.data))
      .catch(error => console.error('Error fetching vehicles:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update vehicle
      axios.put(`/api/vehicles/${vehicle.id}`, vehicle)
        .then(response => {
          setVehicles(vehicles.map(v => (v.id === vehicle.id ? response.data : v)));
          setEditMode(false);
          resetForm();
        })
        .catch(error => console.error('Error updating vehicle:', error));
    } else {
      // Create new vehicle
      axios.post('/api/vehicles', vehicle)
        .then(response => {
          setVehicles([...vehicles, response.data]);
          resetForm();
        })
        .catch(error => console.error('Error creating vehicle:', error));
    }
  };

  const handleEdit = (vehicle) => {
    setVehicle(vehicle);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/vehicles/${id}`)
      .then(() => setVehicles(vehicles.filter(v => v.id !== id)))
      .catch(error => console.error('Error deleting vehicle:', error));
  };

  const resetForm = () => {
    setVehicle({
      id: null,
      vehicleNumber: '',
      vehicleName: '',
      vehicleModelNumber: '',
      puc: '',
      accidentHistory: '',
      carryingCapacity: '',
      createdBy: '',
      createdAt: '',
      modifiedBy: '',
      modifiedAt: '',
    });
  };

  // AG Grid Column Definitions
  const columnDefs = [
    { headerName: "Vehicle Number", field: "vehicleNumber" },
    { headerName: "Vehicle Name", field: "vehicleName" },
    { headerName: "Vehicle Model Number", field: "vehicleModelNumber" },
    { headerName: "PUC", field: "puc" },
    { headerName: "Accident History", field: "accidentHistory" },
    { headerName: "Carrying Capacity", field: "carryingCapacity" },
    { headerName: "Created By", field: "createdBy" },
    { headerName: "Created At", field: "createdAt", valueFormatter: params => new Date(params.value).toLocaleString() },
    { headerName: "Modified By", field: "modifiedBy" },
    { headerName: "Modified At", field: "modifiedAt", valueFormatter: params => params.value ? new Date(params.value).toLocaleString() : '-' },
    {
      headerName: "Actions",
      field: "actions",
      cellRendererFramework: (params) => (
        <div>
          <Button onClick={() => handleEdit(params.data)} color="primary">
            <Edit />
          </Button>
          <Button onClick={() => handleDelete(params.data.id)} color="secondary">
            <Delete />
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="container mt-4">
      <h2>Vehicle Management</h2>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Vehicle Number"
              name="vehicleNumber"
              value={vehicle.vehicleNumber}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Vehicle Name"
              name="vehicleName"
              value={vehicle.vehicleName}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Vehicle Model Number"
              name="vehicleModelNumber"
              value={vehicle.vehicleModelNumber}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="PUC"
              name="puc"
              value={vehicle.puc}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Accident History"
              name="accidentHistory"
              value={vehicle.accidentHistory}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Carrying Capacity"
              name="carryingCapacity"
              value={vehicle.carryingCapacity}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Created By"
              name="createdBy"
              value={vehicle.createdBy}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Created At"
              type="datetime-local"
              name="createdAt"
              value={vehicle.createdAt}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Modified By"
              name="modifiedBy"
              value={vehicle.modifiedBy}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Modified At"
              type="datetime-local"
              name="modifiedAt"
              value={vehicle.modifiedAt}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {editMode ? 'Update' : 'Add'} Vehicle
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="ag-theme-alpine" style={{ height: '600px', width: '100%' }}>
        <AgGridReact
          rowData={vehicles}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};

export default VehiclesDashBoard;
