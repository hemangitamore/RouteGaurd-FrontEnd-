// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { addCustomers } from '../services/user-services'; // Make sure this service is defined
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// //import './CustomerDetails.css';

// const customerSchema = Yup.object().shape({
//     companyName: Yup.string().required('Company name is required'),
//     companyAddress: Yup.string().required('Company address is required'),
//     gstNumber: Yup.string().required('GST number is required'),
//     phoneNumber: Yup.string().required('Phone number is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     establishedDate: Yup.date().required('Established date is required'),
//     createdBy: Yup.string().required('Created by is required'),
// });

// const CustomerDetails = () => {
//     const [rowData, setRowData] = useState([]);
//     const [selectedCustomer, setSelectedCustomer] = useState(null);

//     const columns = [
//         { headerName: 'Company Name', field: 'companyName', sortable: true, filter: true },
//         { headerName: 'Company Address', field: 'companyAddress', sortable: true, filter: true },
//         { headerName: 'GST Number', field: 'gstNumber', sortable: true, filter: true },
//         { headerName: 'Phone Number', field: 'phoneNumber', sortable: true, filter: true },
//         { headerName: 'Email', field: 'email', sortable: true, filter: true },
//         { headerName: 'Established Date', field: 'establishedDate', sortable: true, filter: true },
//         { headerName: 'Created By', field: 'createdBy', sortable: true, filter: true },
//         {
//             headerName: 'Actions',
//             field: 'actions',
//             width: 200,
//             cellRendererFramework: (params) => (
//                 <span className="actions">
//                     <button onClick={() => handleEdit(params.data)}>Edit</button>
//                     <button onClick={() => handleDelete(params.data)}>Delete</button>
//                 </span>
//             ),
//         },
//     ];

//     useEffect(() => {
//         // Fetch customers from API (replace with actual API call)
//         setRowData([
//             {
//                 companyName: 'ABC Ltd.',
//                 companyAddress: '456 Business St',
//                 gstNumber: '12ABC3456D',
//                 phoneNumber: '9876543210',
//                 email: 'contact@abcltd.com',
//                 establishedDate: '2000-05-15',
//                 createdBy: 'Admin',
//             },
//         ]);
//     }, []);

//     const handleSubmit = (values, { resetForm }) => {
//         if (selectedCustomer) {
//             // Edit existing customer logic
//             setRowData((prevData) =>
//                 prevData.map((customer) =>
//                     customer.email === selectedCustomer.email ? values : customer
//                 )
//             );
//             setSelectedCustomer(null);
//         } else {
//             // Add new customer logic
//             addCustomers(values)
//                 .then((newCustomer) => {
//                     setRowData((prevData) => [...prevData, newCustomer]);
//                 })
//                 .catch((error) => {
//                     console.error('Error adding customer:', error);
//                     alert('Failed to add customer. Please try again.');
//                 });
//         }
//         resetForm();
//     };

//     const handleEdit = (customer) => {
//         setSelectedCustomer(customer);
//     };

//     const handleDelete = (customer) => {
//         if (window.confirm('Are you sure you want to delete this customer?')) {
//             setRowData((prevData) =>
//                 prevData.filter((c) => c.email !== customer.email)
//             );
//         }
//     };

//     return (
//         <div className="customer-details">
//             <h2>Customer Details</h2>

//             {/* Form Card */}
//             <div className="form-card">
//                 <h3>{selectedCustomer ? 'Edit Customer' : 'Add Customer'}</h3>
//                 <Formik
//                     initialValues={{
//                         companyName: selectedCustomer?.companyName || '',
//                         companyAddress: selectedCustomer?.companyAddress || '',
//                         gstNumber: selectedCustomer?.gstNumber || '',
//                         phoneNumber: selectedCustomer?.phoneNumber || '',
//                         email: selectedCustomer?.email || '',
//                         establishedDate: selectedCustomer?.establishedDate || '',
//                         createdBy: selectedCustomer?.createdBy || '',
//                     }}
//                     validationSchema={customerSchema}
//                     onSubmit={handleSubmit}
//                     enableReinitialize
//                 >
//                     {({ errors, touched }) => (
//                         <Form>
//                             <div className="form-group">
//                                 <label>Company Name</label>
//                                 <Field name="companyName" />
//                                 {errors.companyName && touched.companyName ? (
//                                     <div className="error">{errors.companyName}</div>
//                                 ) : null}
//                             </div>
//                             <div className="form-group">
//                                 <label>Company Address</label>
//                                 <Field name="companyAddress" />
//                                 {errors.companyAddress && touched.companyAddress ? (
//                                     <div className="error">{errors.companyAddress}</div>
//                                 ) : null}
//                             </div>
//                             <div className="form-group">
//                                 <label>GST Number</label>
//                                 <Field name="gstNumber" />
//                                 {errors.gstNumber && touched.gstNumber ? (
//                                     <div className="error">{errors.gstNumber}</div>
//                                 ) : null}
//                             </div>
//                             <div className="form-group">
//                                 <label>Phone Number</label>
//                                 <Field name="phoneNumber" />
//                                 {errors.phoneNumber && touched.phoneNumber ? (
//                                     <div className="error">{errors.phoneNumber}</div>
//                                 ) : null}
//                             </div>
//                             <div className="form-group">
//                                 <label>Email</label>
//                                 <Field name="email" type="email" />
//                                 {errors.email && touched.email ? (
//                                     <div className="error">{errors.email}</div>
//                                 ) : null}
//                             </div>
//                             <div className="form-group">
//                                 <label>Established Date</label>
//                                 <Field name="establishedDate" type="date" />
//                                 {errors.establishedDate && touched.establishedDate ? (
//                                     <div className="error">{errors.establishedDate}</div>
//                                 ) : null}
//                             </div>
//                             <div className="form-group">
//                                 <label>Created By</label>
//                                 <Field name="createdBy" />
//                                 {errors.createdBy && touched.createdBy ? (
//                                     <div className="error">{errors.createdBy}</div>
//                                 ) : null}
//                             </div>
//                             <div className="form-group">
//                                 <button type="submit" className="submit-button">
//                                     {selectedCustomer ? 'Update Customer' : 'Add Customer'}
//                                 </button>
//                             </div>
//                         </Form>
//                     )}
//                 </Formik>
//             </div>

//             {/* Table Card */}
//             <div className="table-card">
//                 <div
//                     className="ag-theme-alpine"
//                     style={{ height: 400, width: '100%' }}
//                 >
//                     <AgGridReact
//                         columnDefs={columns}
//                         rowData={rowData}
//                         domLayout="autoHeight"
//                         suppressRowClickSelection={true}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerDetails;





// // import React from 'react';
// // import { AgGridReact } from 'ag-grid-react';
// // import 'ag-grid-community/styles/ag-grid.css';
// // import 'ag-grid-community/styles/ag-theme-alpine.css';
// // //import './CustomerDetails.css'; // Add any custom styles here

// // const CustomerTable = ({ customers, onEdit, onDelete }) => {
// //     const columns = [
// //         { headerName: 'Company Name', field: 'companyName', sortable: true, filter: true },
// //         { headerName: 'Company Address', field: 'companyAddress', sortable: true, filter: true },
// //         { headerName: 'GST Number', field: 'gstNumber', sortable: true, filter: true },
// //         { headerName: 'Phone Number', field: 'phoneNumber', sortable: true, filter: true },
// //         { headerName: 'Email', field: 'email', sortable: true, filter: true },
// //         { headerName: 'Established Date', field: 'establishedDate', sortable: true, filter: true },
// //         { headerName: 'Created By', field: 'createdBy', sortable: true, filter: true },
// //         { headerName: 'Created At', field: 'createdAt', sortable: true, filter: true },
// //         {
// //             headerName: 'Actions',
// //             field: 'actions',
// //             width: 200,
// //             cellRendererFramework: (params) => (
// //                 <span className="actions">
// //                     <button onClick={() => onEdit(params.data)}>Edit</button>
// //                     <button onClick={() => onDelete(params.data)}>Delete</button>
// //                 </span>
// //             ),
// //         },
// //     ];

// //     return (
// //         <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
// //             <AgGridReact
// //                 columnDefs={columns}
// //                 rowData={customers}
// //                 domLayout="autoHeight"
// //                 suppressRowClickSelection={true}
// //             />
// //         </div>
// //     );
// // };

// // export default CustomerTable;
 



// // CustomerDetails.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import CustomerTable from './CustomerTable';

// // const CustomerDetails = () => {
// //   const [customers, setCustomers] = useState([]);

// //   useEffect(() => {
// //     // Fetch customer data from API
// //     axios.get('/api/customers')
// //       .then(response => setCustomers(response.data))
// //       .catch(error => console.error('Error fetching customer data:', error));
// //   }, []);

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-6 text-center">Customer List</h2>
// //       <CustomerTable customers={customers} />
// //     </div>
// //   );
// // };

// // export default CustomerDetails;
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addCustomers } from '../services/user-services'; // Make sure this service is defined
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
//import './CustomerDetails.css'; // Add any custom styles here

const customerSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
    companyAddress: Yup.string().required('Company address is required'),
    gstNumber: Yup.string().required('GST number is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    establishedDate: Yup.date().required('Established date is required'),
    createdBy: Yup.string().required('Created by is required'),
});

const CustomerDetails = () => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    useEffect(() => {
        // Fetch customer data from API
        axios.get('/api/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching customer data:', error));
    }, []);

    const handleSubmit = (values, { resetForm }) => {
        if (selectedCustomer) {
            // Edit existing customer logic
            setCustomers((prevData) =>
                prevData.map((customer) =>
                    customer.email === selectedCustomer.email ? values : customer
                )
            );
            setSelectedCustomer(null);
        } else {
            // Add new customer logic
            addCustomers(values)
                .then((newCustomer) => {
                    setCustomers((prevData) => [...prevData, newCustomer]);
                })
                .catch((error) => {
                    console.error('Error adding customer:', error);
                    alert('Failed to add customer. Please try again.');
                });
        }
        resetForm();
    };

    const handleEdit = (customer) => {
        setSelectedCustomer(customer);
    };

    const handleDelete = (customer) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            setCustomers((prevData) =>
                prevData.filter((c) => c.email !== customer.email)
            );
        }
    };

    const columns = [
        { headerName: 'Company Name', field: 'companyName', sortable: true, filter: true },
        { headerName: 'Company Address', field: 'companyAddress', sortable: true, filter: true },
        { headerName: 'GST Number', field: 'gstNumber', sortable: true, filter: true },
        { headerName: 'Phone Number', field: 'phoneNumber', sortable: true, filter: true },
        { headerName: 'Email', field: 'email', sortable: true, filter: true },
        { headerName: 'Established Date', field: 'establishedDate', sortable: true, filter: true },
        { headerName: 'Created By', field: 'createdBy', sortable: true, filter: true },
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

    return (
        <div className="customer-details">
            <h2>Customer Details</h2>

            {/* Form Card */}
            <div className="form-card">
                <h3>{selectedCustomer ? 'Edit Customer' : 'Add Customer'}</h3>
                <Formik
                    initialValues={{
                        companyName: selectedCustomer?.companyName || '',
                        companyAddress: selectedCustomer?.companyAddress || '',
                        gstNumber: selectedCustomer?.gstNumber || '',
                        phoneNumber: selectedCustomer?.phoneNumber || '',
                        email: selectedCustomer?.email || '',
                        establishedDate: selectedCustomer?.establishedDate || '',
                        createdBy: selectedCustomer?.createdBy || '',
                    }}
                    validationSchema={customerSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label>Company Name</label>
                                <Field name="companyName" />
                                {errors.companyName && touched.companyName ? (
                                    <div className="error">{errors.companyName}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Company Address</label>
                                <Field name="companyAddress" />
                                {errors.companyAddress && touched.companyAddress ? (
                                    <div className="error">{errors.companyAddress}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>GST Number</label>
                                <Field name="gstNumber" />
                                {errors.gstNumber && touched.gstNumber ? (
                                    <div className="error">{errors.gstNumber}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <Field name="phoneNumber" />
                                {errors.phoneNumber && touched.phoneNumber ? (
                                    <div className="error">{errors.phoneNumber}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <Field name="email" type="email" />
                                {errors.email && touched.email ? (
                                    <div className="error">{errors.email}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Established Date</label>
                                <Field name="establishedDate" type="date" />
                                {errors.establishedDate && touched.establishedDate ? (
                                    <div className="error">{errors.establishedDate}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Created By</label>
                                <Field name="createdBy" />
                                {errors.createdBy && touched.createdBy ? (
                                    <div className="error">{errors.createdBy}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="submit-button">
                                    {selectedCustomer ? 'Update Customer' : 'Add Customer'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* Table Card */}
            <div className="table-card">
                <CustomerTable customers={customers} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
        </div>
    );
};

const CustomerTable = ({ customers, onEdit, onDelete }) => {
    const columns = [
        { headerName: 'Company Name', field: 'companyName', sortable: true, filter: true },
        { headerName: 'Company Address', field: 'companyAddress', sortable: true, filter: true },
        { headerName: 'GST Number', field: 'gstNumber', sortable: true, filter: true },
        { headerName: 'Phone Number', field: 'phoneNumber', sortable: true, filter: true },
        { headerName: 'Email', field: 'email', sortable: true, filter: true },
        { headerName: 'Established Date', field: 'establishedDate', sortable: true, filter: true },
        { headerName: 'Created By', field: 'createdBy', sortable: true, filter: true },
        {
            headerName: 'Actions',
            field: 'actions',
            width: 200,
            cellRendererFramework: (params) => (
                <span className="actions">
                    <button onClick={() => onEdit(params.data)}>Edit</button>
                    <button onClick={() => onDelete(params.data)}>Delete</button>
                </span>
            ),
        },
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                columnDefs={columns}
                rowData={customers}
                domLayout="autoHeight"
                suppressRowClickSelection={true}
            />
        </div>
    );
};

export default CustomerDetails;
