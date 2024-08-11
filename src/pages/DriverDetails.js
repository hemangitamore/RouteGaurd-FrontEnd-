import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './DriverDetails.css'; // Ensure you have a CSS file for custom styles

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
            cellRendererFramework: (params) => (
                <div>
                    <button onClick={() => handleEdit(params.data)}>Edit</button>
                    <button onClick={() => handleDelete(params.data)}>Delete</button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        // This is just an example of loading initial data
        // Replace with actual data fetching logic if necessary
        setRowData([
            // Example data
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
        setRowData((prevData) =>
            prevData.filter((d) => d.phoneNumber !== driver.phoneNumber)
        );
    };

    return (
        <div>
            <h2>Driver Details</h2>
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

            <div
                className="ag-theme-alpine"
                style={{ height: 400, width: '100%', marginTop: '20px' }}
            >
                <AgGridReact
                    columnDefs={columns}
                    rowData={rowData}
                    domLayout="autoHeight"
                    suppressRowClickSelection={true}
                />
            </div>
        </div>
    );
};

export default DriverDetails;







// import React, { useState, useMemo } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

// const DriverDetails = () => {
//     const [drivers, setDrivers] = useState([]);

//     const validationSchema = Yup.object({
//         name: Yup.string()
//             .required('Driver name is required')
//             .min(2, 'Name must be at least 2 characters long'),
//         phone: Yup.string()
//             .required('Phone number is required')
//             .matches(/^[6-9]\d{9}$/, 'Phone number is not valid'),
//         adhar: Yup.string()
//             .required('Adhar number is required')
//             .length(12, 'Adhar number must be 12 digits long'),
//         pan: Yup.string()
//             .required('PAN number is required')
//             .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, 'PAN number is not valid'),
//         dob: Yup.date()
//             .required('Date of birth is required')
//             .nullable(),
//         address: Yup.string()
//             .required('Address is required')
//             .min(10, 'Address must be at least 10 characters long'),
//         nationality: Yup.string()
//             .required('Nationality is required'),
//     });

//     const formik = useFormik({
//         initialValues: {
//             id: null,
//             name: '',
//             phone: '',
//             adhar: '',
//             pan: '',
//             dob: '',
//             address: '',
//             nationality: '',
//         },
//         validationSchema: validationSchema,
//         onSubmit: (values) => {
//             if (values.id !== null) {
//                 setDrivers(
//                     drivers.map((driver) =>
//                         driver.id === values.id ? values : driver
//                     )
//                 );
//             } else {
//                 setDrivers([
//                     ...drivers,
//                     {
//                         ...values,
//                         id: drivers.length ? drivers[drivers.length - 1].id + 1 : 1,
//                     },
//                 ]);
//             }
//             formik.resetForm();
//         },
//         enableReinitialize: true,
//     });

//     const handleEdit = (id) => {
//         const driver = drivers.find((driver) => driver.id === id);
//         if (driver) {
//             formik.setValues(driver);
//         }
//     };

//     const handleDelete = (id) => {
//         setDrivers(drivers.filter((driver) => driver.id !== id));
//     };

//     // Columns definition for AG Grid
//     const columnDefs = useMemo(() => [
//         { headerName: 'ID', field: 'id' },
//         { headerName: 'Name', field: 'name' },
//         { headerName: 'Phone', field: 'phone' },
//         { headerName: 'Adhar', field: 'adhar' },
//         { headerName: 'PAN', field: 'pan' },
//         { headerName: 'DOB', field: 'dob' },
//         { headerName: 'Address', field: 'address' },
//         { headerName: 'Nationality', field: 'nationality' },
//         {
//             headerName: 'Actions',
//             field: 'actions',
//             cellRendererFramework: (params) => (
//                 <>
//                     <button onClick={() => handleEdit(params.data.id)}>Edit</button>
//                     <button onClick={() => handleDelete(params.data.id)}>Delete</button>
//                 </>
//             ),
//         },
//     ], []);

//     return (
//         <div>
//             <h1>Driver Details</h1>

//             {/* Formik Form */}
//             <form onSubmit={formik.handleSubmit}>
//                 <input type="hidden" name="id" value={formik.values.id || ''} />

//                 <div>
//                     <label>Driver Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formik.values.name}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.name && formik.errors.name ? (
//                         <div style={{ color: 'red' }}>{formik.errors.name}</div>
//                     ) : null}
//                 </div>

//                 <div>
//                     <label>Phone Number:</label>
//                     <input
//                         type="text"
//                         name="phone"
//                         value={formik.values.phone}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.phone && formik.errors.phone ? (
//                         <div style={{ color: 'red' }}>{formik.errors.phone}</div>
//                     ) : null}
//                 </div>

//                 <div>
//                     <label>Adhar Number:</label>
//                     <input
//                         type="text"
//                         name="adhar"
//                         value={formik.values.adhar}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.adhar && formik.errors.adhar ? (
//                         <div style={{ color: 'red' }}>{formik.errors.adhar}</div>
//                     ) : null}
//                 </div>

//                 <div>
//                     <label>PAN Number:</label>
//                     <input
//                         type="text"
//                         name="pan"
//                         value={formik.values.pan}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.pan && formik.errors.pan ? (
//                         <div style={{ color: 'red' }}>{formik.errors.pan}</div>
//                     ) : null}
//                 </div>

//                 <div>
//                     <label>Date of Birth:</label>
//                     <input
//                         type="date"
//                         name="dob"
//                         value={formik.values.dob}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.dob && formik.errors.dob ? (
//                         <div style={{ color: 'red' }}>{formik.errors.dob}</div>
//                     ) : null}
//                 </div>

//                 <div>
//                     <label>Address:</label>
//                     <input
//                         type="text"
//                         name="address"
//                         value={formik.values.address}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.address && formik.errors.address ? (
//                         <div style={{ color: 'red' }}>{formik.errors.address}</div>
//                     ) : null}
//                 </div>

//                 <div>
//                     <label>Nationality:</label>
//                     <input
//                         type="text"
//                         name="nationality"
//                         value={formik.values.nationality}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                     />
//                     {formik.touched.nationality && formik.errors.nationality ? (
//                         <div style={{ color: 'red' }}>{formik.errors.nationality}</div>
//                     ) : null}
//                 </div>

//                 <button type="submit">Save</button>
//             </form>

//             {/* AG Grid to Display Drivers */}
//             <div className="ag-theme-alpine" style={{ height: 400, width: '100%', marginTop: '20px' }}>
//                 <AgGridReact
//                     rowData={drivers}
//                     columnDefs={columnDefs}
//                     domLayout='autoHeight'
//                 />
//             </div>
//         </div>
//     );
// };

// export default DriverDetails;












// import React, { useState } from 'react';

// const DriverDetails = () => {
//     // State to store the driver details
//     const [drivers, setDrivers] = useState([]);
//     const [formData, setFormData] = useState({
//         id: null,
//         name: '',
//         phone: '',
//         adhar: '',
//         pan: '',
//         dob: '',
//         address: '',
//         nationality: '',
//     });

//     // Handle input change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (formData.id !== null) {
//             // Update existing driver
//             setDrivers(
//                 drivers.map((driver) =>
//                     driver.id === formData.id ? formData : driver
//                 )
//             );
//         } else {
//             // Add new driver
//             setDrivers([
//                 ...drivers,
//                 { ...formData, id: drivers.length ? drivers[drivers.length - 1].id + 1 : 1 },
//             ]);
//         }
//         // Reset the form after submission
//         setFormData({
//             id: null,
//             name: '',
//             phone: '',
//             adhar: '',
//             pan: '',
//             dob: '',
//             address: '',
//             nationality: '',
//         });
//     };

//     // Edit driver details
//     const handleEdit = (id) => {
//         const driver = drivers.find((driver) => driver.id === id);
//         if (driver) {
//             setFormData(driver);
//         }
//     };

//     // Delete driver
//     const handleDelete = (id) => {
//         setDrivers(drivers.filter((driver) => driver.id !== id));
//     };

//     return (
//         <div>
//             <h1>Driver Details</h1>

//             {/* Form for Driver Details */}
//             <form onSubmit={handleSubmit}>
//                 <input type="hidden" name="id" value={formData.id} />
//                 <div>
//                     <label>Driver Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Phone Number:</label>
//                     <input
//                         type="text"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Adhar Number:</label>
//                     <input
//                         type="text"
//                         name="adhar"
//                         value={formData.adhar}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Pan Number:</label>
//                     <input
//                         type="text"
//                         name="pan"
//                         value={formData.pan}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Date of Birth:</label>
//                     <input
//                         type="date"
//                         name="dob"
//                         value={formData.dob}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Address:</label>
//                     <input
//                         type="text"
//                         name="address"
//                         value={formData.address}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Nationality:</label>
//                     <input
//                         type="text"
//                         name="nationality"
//                         value={formData.nationality}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Save</button>
//             </form>

//             {/* Table to Display Drivers */}
//             <table border="1" width="100%" style={{ marginTop: '20px' }}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Phone</th>
//                         <th>Adhar</th>
//                         <th>PAN</th>
//                         <th>DOB</th>
//                         <th>Address</th>
//                         <th>Nationality</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {drivers.map((driver) => (
//                         <tr key={driver.id}>
//                             <td>{driver.id}</td>
//                             <td>{driver.name}</td>
//                             <td>{driver.phone}</td>
//                             <td>{driver.adhar}</td>
//                             <td>{driver.pan}</td>
//                             <td>{driver.dob}</td>
//                             <td>{driver.address}</td>
//                             <td>{driver.nationality}</td>
//                             <td>
//                                 <button onClick={() => handleEdit(driver.id)}>Edit</button>
//                                 <button onClick={() => handleDelete(driver.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default DriverDetails;
