import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './DriverDetails.css';

const driverSchema = Yup.object().shape({
    phoneNumber: Yup.string().required('Phone number is required'),
    adharNumber: Yup.string().required('Adhar number is required'),
    panNumber: Yup.string().required('Pan number is required'),
    driverName: Yup.string().required('Driver name is required'),
    dob: Yup.date().required('Date of Birth is required'),
    address: Yup.string().required('Address is required'),
    nationality: Yup.string().required('Nationality is required'),
});

const DriverDetails = () => {
    const [rowData, setRowData] = useState([]);
    const [selectedDriver, setSelectedDriver] = useState(null);

    const columns = [
        { headerName: 'Phone Number', field: 'phoneNumber', sortable: true, filter: true },
        { headerName: 'Adhar Number', field: 'adharNumber', sortable: true, filter: true },
        { headerName: 'Pan Number', field: 'panNumber', sortable: true, filter: true },
        { headerName: 'Driver Name', field: 'driverName', sortable: true, filter: true },
        { headerName: 'DOB', field: 'dob', sortable: true, filter: true },
        { headerName: 'Address', field: 'address', sortable: true, filter: true },
        { headerName: 'Nationality', field: 'nationality', sortable: true, filter: true },
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
        // Example data (replace with actual data fetching logic)
        setRowData([
            {
                phoneNumber: '1234567890',
                adharNumber: 'XXXX-XXXX-XXXX',
                panNumber: 'ABCDE1234F',
                driverName: 'John Doe',
                dob: '1980-01-01',
                address: '123 Main St',
                nationality: 'Indian',
            },
        ]);
    }, []);

    const handleSubmit = (values, { resetForm }) => {
        if (selectedDriver) {
            setRowData((prevData) =>
                prevData.map((driver) =>
                    driver.phoneNumber === selectedDriver.phoneNumber ? values : driver
                )
            );
            setSelectedDriver(null);
        } else {
            setRowData((prevData) => [...prevData, values]);
        }
        resetForm();
    };

    const handleEdit = (driver) => {
        setSelectedDriver(driver);
    };

    const handleDelete = (driver) => {
        if (window.confirm('Are you sure you want to delete this driver?')) {
            setRowData((prevData) =>
                prevData.filter((d) => d.phoneNumber !== driver.phoneNumber)
            );
        }
    };

    return (
        <div className="driver-details">
            <h2>Driver Details</h2>

            {/* Form Card */}
            <div className="form-card">
                <h3>{selectedDriver ? 'Edit Driver' : 'Add Driver'}</h3>
                <Formik
                    initialValues={{
                        phoneNumber: selectedDriver?.phoneNumber || '',
                        adharNumber: selectedDriver?.adharNumber || '',
                        panNumber: selectedDriver?.panNumber || '',
                        driverName: selectedDriver?.driverName || '',
                        dob: selectedDriver?.dob || '',
                        address: selectedDriver?.address || '',
                        nationality: selectedDriver?.nationality || '',
                    }}
                    validationSchema={driverSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <Field name="phoneNumber" />
                                {errors.phoneNumber && touched.phoneNumber ? (
                                    <div className="error">{errors.phoneNumber}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Adhar Number</label>
                                <Field name="adharNumber" />
                                {errors.adharNumber && touched.adharNumber ? (
                                    <div className="error">{errors.adharNumber}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Pan Number</label>
                                <Field name="panNumber" />
                                {errors.panNumber && touched.panNumber ? (
                                    <div className="error">{errors.panNumber}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Driver Name</label>
                                <Field name="driverName" />
                                {errors.driverName && touched.driverName ? (
                                    <div className="error">{errors.driverName}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>DOB</label>
                                <Field name="dob" type="date" />
                                {errors.dob && touched.dob ? (
                                    <div className="error">{errors.dob}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <Field name="address" />
                                {errors.address && touched.address ? (
                                    <div className="error">{errors.address}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Nationality</label>
                                <Field name="nationality" />
                                {errors.nationality && touched.nationality ? (
                                    <div className="error">{errors.nationality}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="submit-button">
                                    {selectedDriver ? 'Update Driver' : 'Add Driver'}
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

export default DriverDetails;






