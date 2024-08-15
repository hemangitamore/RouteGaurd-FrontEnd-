import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addVehicle } from '../services/user-services'; // Make sure this service is defined
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
//import './VehicleDetails.css';

const vehicleSchema = Yup.object().shape({
    vehicleNumber: Yup.string().required('Vehicle number is required'),
    vehicleName: Yup.string().required('Vehicle name is required'),
    vehicleModelNumber: Yup.string().required('Vehicle model number is required'),
    puc: Yup.string().required('PUC is required'),
    accidentHistory: Yup.string().required('Accident history is required'),
    carryingCapacity: Yup.string().required('Carrying capacity is required'),
});

const VehicleDetails = () => {
    const [rowData, setRowData] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const columns = [
        { headerName: 'Vehicle Number', field: 'vehicleNumber', sortable: true, filter: true },
        { headerName: 'Vehicle Name', field: 'vehicleName', sortable: true, filter: true },
        { headerName: 'Vehicle Model Number', field: 'vehicleModelNumber', sortable: true, filter: true },
        { headerName: 'PUC', field: 'puc', sortable: true, filter: true },
        { headerName: 'Accident History', field: 'accidentHistory', sortable: true, filter: true },
        { headerName: 'Carrying Capacity', field: 'carryingCapacity', sortable: true, filter: true },
        {
            headerName: 'Actions',
            field: 'actions',
            width: 200,
            cellRendererFramework: (params) => (
                <span className="actions">
                    <button onClick={() => handleEdit(params.data)}>Edit</button>
                    <button onClick={() => handleDelete(params.data)}>Delete</button>
                </span>
            ),
        },
    ];

    useEffect(() => {
        // Fetch vehicles from API (replace with actual API call)
        setRowData([
            {
                vehicleNumber: 'MH12AB1234',
                vehicleName: 'Tata Truck',
                vehicleModelNumber: 'T1234',
                puc: 'Valid',
                accidentHistory: 'None',
                carryingCapacity: '1000kg',
            },
        ]);
    }, []);

    const handleSubmit = (values, { resetForm }) => {
        if (selectedVehicle) {
            // Edit existing vehicle logic
            setRowData((prevData) =>
                prevData.map((vehicle) =>
                    vehicle.vehicleNumber === selectedVehicle.vehicleNumber ? values : vehicle
                )
            );
            setSelectedVehicle(null);
        } else {
            // Add new vehicle logic
            addVehicle(values)
                .then((newVehicle) => {
                    setRowData((prevData) => [...prevData, newVehicle]);
                })
                .catch((error) => {
                    console.error('Error adding vehicle:', error);
                    alert('Failed to add vehicle. Please try again.');
                });
        }
        resetForm();
    };

    const handleEdit = (vehicle) => {
        setSelectedVehicle(vehicle);
    };

    const handleDelete = (vehicle) => {
        if (window.confirm('Are you sure you want to delete this vehicle?')) {
            setRowData((prevData) =>
                prevData.filter((v) => v.vehicleNumber !== vehicle.vehicleNumber)
            );
        }
    };

    return (
        <div className="vehicle-details">
            <h2>Vehicle Details</h2>

            {/* Form Card */}
            <div className="form-card">
                <h3>{selectedVehicle ? 'Edit Vehicle' : 'Add Vehicle'}</h3>
                <Formik
                    initialValues={{
                        vehicleNumber: selectedVehicle?.vehicleNumber || '',
                        vehicleName: selectedVehicle?.vehicleName || '',
                        vehicleModelNumber: selectedVehicle?.vehicleModelNumber || '',
                        puc: selectedVehicle?.puc || '',
                        accidentHistory: selectedVehicle?.accidentHistory || '',
                        carryingCapacity: selectedVehicle?.carryingCapacity || '',
                    }}
                    validationSchema={vehicleSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label>Vehicle Number</label>
                                <Field name="vehicleNumber" />
                                {errors.vehicleNumber && touched.vehicleNumber ? (
                                    <div className="error">{errors.vehicleNumber}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Vehicle Name</label>
                                <Field name="vehicleName" />
                                {errors.vehicleName && touched.vehicleName ? (
                                    <div className="error">{errors.vehicleName}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Vehicle Model Number</label>
                                <Field name="vehicleModelNumber" />
                                {errors.vehicleModelNumber && touched.vehicleModelNumber ? (
                                    <div className="error">{errors.vehicleModelNumber}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>PUC</label>
                                <Field name="puc" />
                                {errors.puc && touched.puc ? (
                                    <div className="error">{errors.puc}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Accident History</label>
                                <Field name="accidentHistory" />
                                {errors.accidentHistory && touched.accidentHistory ? (
                                    <div className="error">{errors.accidentHistory}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Carrying Capacity</label>
                                <Field name="carryingCapacity" />
                                {errors.carryingCapacity && touched.carryingCapacity ? (
                                    <div className="error">{errors.carryingCapacity}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="submit-button">
                                    {selectedVehicle ? 'Update Vehicle' : 'Add Vehicle'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* Table Card */}
            <div className="table-card">
                <div
                    className="ag-theme-alpine"
                    style={{ height: 400, width: '100%' }}
                >
                    <AgGridReact
                        columnDefs={columns}
                        rowData={rowData}
                        domLayout="autoHeight"
                        suppressRowClickSelection={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails;





// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";// Adjust the path as necessary
// import { addVehicle } from '../services/user-services';

// const VehicleForm = () => {
//   const [vehicle, setVehicle] = useState({
//     vehicleNumber: "",
//     vehicleName: "",
//     vehicleModelNumber: "",
//     puc: "",
//     accidentHistory: "",
//     carryingCapacity: "",
//     createdBy: "",
//     createdAt: "",
//     modifiedBy: "",
//     modifiedAt: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVehicle((prevVehicle) => ({
//       ...prevVehicle,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addVehicle(vehicle)
//       .then((response) => {
//         console.log("Vehicle added successfully:", response);
//         // Handle success (e.g., show success message, clear the form, etc.)
//       })
//       .catch((error) => {
//         console.error("There was an error adding the vehicle:", error);
//         // Handle error (e.g., show error message)
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="container mt-4">
//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label">Vehicle Number:</label>
//           <input
//             type="text"
//             name="vehicleNumber"
//             value={vehicle.vehicleNumber}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">Vehicle Name:</label>
//           <input
//             type="text"
//             name="vehicleName"
//             value={vehicle.vehicleName}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label">Vehicle Model Number:</label>
//           <input
//             type="text"
//             name="vehicleModelNumber"
//             value={vehicle.vehicleModelNumber}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">PUC:</label>
//           <input
//             type="text"
//             name="puc"
//             value={vehicle.puc}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label">Accident History:</label>
//           <input
//             type="text"
//             name="accidentHistory"
//             value={vehicle.accidentHistory}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">Carrying Capacity:</label>
//           <input
//             type="text"
//             name="carryingCapacity"
//             value={vehicle.carryingCapacity}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label">Created By:</label>
//           <input
//             type="text"
//             name="createdBy"
//             value={vehicle.createdBy}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">Created At:</label>
//           <input
//             type="datetime-local"
//             name="createdAt"
//             value={vehicle.createdAt}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label">Modified By:</label>
//           <input
//             type="text"
//             name="modifiedBy"
//             value={vehicle.modifiedBy}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">Modified At:</label>
//           <input
//             type="datetime-local"
//             name="modifiedAt"
//             value={vehicle.modifiedAt}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//       </div>

//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default VehicleForm;




// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const VehicleForm = () => {
//   const [vehicle, setVehicle] = useState({
//     vehicleNumber: "",
//     vehicleName: "",
//     vehicleModelNumber: "",
//     puc: "",
//     accidentHistory: "",
//     carryingCapacity: "",
//     createdBy: "",
//     createdAt: "",
//     modifiedBy: "",
//     modifiedAt: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVehicle((prevVehicle) => ({
//       ...prevVehicle,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(vehicle);
//     // Submit the form data to the backend here
//   };

//   return (
//     <form onSubmit={handleSubmit} className="container mt-4">
//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label">Vehicle Number:</label>
//           <input
//             type="text"
//             name="vehicleNumber"
//             value={vehicle.vehicleNumber}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">Vehicle Name:</label>
//           <input
//             type="text"
//             name="vehicleName"
//             value={vehicle.vehicleName}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label">Vehicle Model Number:</label>
//           <input
//             type="text"
//             name="vehicleModelNumber"
//             value={vehicle.vehicleModelNumber}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">PUC:</label>
//           <input
//             type="text"
//             name="puc"
//             value={vehicle.puc}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label">Accident History:</label>
//           <input
//             type="text"
//             name="accidentHistory"
//             value={vehicle.accidentHistory}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">Carrying Capacity:</label>
//           <input
//             type="text"
//             name="carryingCapacity"
//             value={vehicle.carryingCapacity}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label">Created By:</label>
//           <input
//             type="text"
//             name="createdBy"
//             value={vehicle.createdBy}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">Created At:</label>
//           <input
//             type="datetime-local"
//             name="createdAt"
//             value={vehicle.createdAt}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label">Modified By:</label>
//           <input
//             type="text"
//             name="modifiedBy"
//             value={vehicle.modifiedBy}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label">Modified At:</label>
//           <input
//             type="datetime-local"
//             name="modifiedAt"
//             value={vehicle.modifiedAt}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//       </div>

//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default VehicleForm;


// import React, { useState, useEffect } from 'react';
// import { Grid, Button, TextField } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';
// import axios from 'axios';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

// const VehiclesDashBoard = () => {
//   const [vehicle, setVehicle] = useState({
//     id: null,
//     vehicleNumber: '',
//     vehicleName: '',
//     vehicleModelNumber: '',
//     puc: '',
//     accidentHistory: '',
//     carryingCapacity: '',
//     createdBy: '',
//     createdAt: '',
//     modifiedBy: '',
//     modifiedAt: '',
//   });
//   const [vehicles, setVehicles] = useState([]);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     // Fetch initial vehicle data
//     axios.get('/api/vehicles')
//       .then(response => setVehicles(response.data))
//       .catch(error => console.error('Error fetching vehicles:', error));
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setVehicle({ ...vehicle, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editMode) {
//       // Update vehicle
//       axios.put(`/api/vehicles/${vehicle.id}`, vehicle)
//         .then(response => {
//           setVehicles(vehicles.map(v => (v.id === vehicle.id ? response.data : v)));
//           setEditMode(false);
//           resetForm();
//         })
//         .catch(error => console.error('Error updating vehicle:', error));
//     } else {
//       // Create new vehicle
//       axios.post('/api/vehicles', vehicle)
//         .then(response => {
//           setVehicles([...vehicles, response.data]);
//           resetForm();
//         })
//         .catch(error => console.error('Error creating vehicle:', error));
//     }
//   };

//   const handleEdit = (vehicle) => {
//     setVehicle(vehicle);
//     setEditMode(true);
//   };

//   const handleDelete = (id) => {
//     axios.delete(`/api/vehicles/${id}`)
//       .then(() => setVehicles(vehicles.filter(v => v.id !== id)))
//       .catch(error => console.error('Error deleting vehicle:', error));
//   };

//   const resetForm = () => {
//     setVehicle({
//       id: null,
//       vehicleNumber: '',
//       vehicleName: '',
//       vehicleModelNumber: '',
//       puc: '',
//       accidentHistory: '',
//       carryingCapacity: '',
//       createdBy: '',
//       createdAt: '',
//       modifiedBy: '',
//       modifiedAt: '',
//     });
//   };

//   // AG Grid Column Definitions
//   const columnDefs = [
//     { headerName: "Vehicle Number", field: "vehicleNumber" },
//     { headerName: "Vehicle Name", field: "vehicleName" },
//     { headerName: "Vehicle Model Number", field: "vehicleModelNumber" },
//     { headerName: "PUC", field: "puc" },
//     { headerName: "Accident History", field: "accidentHistory" },
//     { headerName: "Carrying Capacity", field: "carryingCapacity" },
//     { headerName: "Created By", field: "createdBy" },
//     { headerName: "Created At", field: "createdAt", valueFormatter: params => new Date(params.value).toLocaleString() },
//     { headerName: "Modified By", field: "modifiedBy" },
//     { headerName: "Modified At", field: "modifiedAt", valueFormatter: params => params.value ? new Date(params.value).toLocaleString() : '-' },
//     {
//       headerName: "Actions",
//       field: "actions",
//       cellRendererFramework: (params) => (
//         <div>
//           <Button onClick={() => handleEdit(params.data)} color="primary">
//             <Edit />
//           </Button>
//           <Button onClick={() => handleDelete(params.data.id)} color="secondary">
//             <Delete />
//           </Button>
//         </div>
//       )
//     }
//   ];

//   return (
//     <div className="container mt-4">
//       <h2>Vehicle Management</h2>

//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2} sx={{ mb: 2 }}>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               label="Vehicle Number"
//               name="vehicleNumber"
//               value={vehicle.vehicleNumber}
//               onChange={handleInputChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               label="Vehicle Name"
//               name="vehicleName"
//               value={vehicle.vehicleName}
//               onChange={handleInputChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               label="Vehicle Model Number"
//               name="vehicleModelNumber"
//               value={vehicle.vehicleModelNumber}
//               onChange={handleInputChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               label="PUC"
//               name="puc"
//               value={vehicle.puc}
//               onChange={handleInputChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               label="Accident History"
//               name="accidentHistory"
//               value={vehicle.accidentHistory}
//               onChange={handleInputChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               label="Carrying Capacity"
//               name="carryingCapacity"
//               value={vehicle.carryingCapacity}
//               onChange={handleInputChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               label="Created By"
//               name="createdBy"
//               value={vehicle.createdBy}
//               onChange={handleInputChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               label="Created At"
//               type="datetime-local"
//               name="createdAt"
//               value={vehicle.createdAt}
//               onChange={handleInputChange}
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               label="Modified By"
//               name="modifiedBy"
//               value={vehicle.modifiedBy}
//               onChange={handleInputChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               label="Modified At"
//               type="datetime-local"
//               name="modifiedAt"
//               value={vehicle.modifiedAt}
//               onChange={handleInputChange}
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               {editMode ? 'Update' : 'Add'} Vehicle
//             </Button>
//           </Grid>
//         </Grid>
//       </form>

//       <div className="ag-theme-alpine" style={{ height: '600px', width: '100%' }}>
//         <AgGridReact
//           rowData={vehicles}
//           columnDefs={columnDefs}
//           pagination={true}
//           paginationPageSize={10}
//         />
//       </div>
//     </div>
//   );
// };

// export default VehiclesDashBoard;
