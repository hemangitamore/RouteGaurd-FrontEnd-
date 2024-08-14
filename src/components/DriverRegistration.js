import React, { useState } from 'react';
import axios from 'axios';

const DriverRegistrationForm = () => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        adharNumber: '',
        panNumber: '',
        driverName: '',
        dob: '',
        address: '',
        nationality: '',
        createdBy: '',
        createdAt: '',
        modifiedBy: '',
        modifiedAt: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Set the current date and time for createdAt and modifiedAt
        const currentDateTime = new Date().toISOString();
        const dataToSubmit = {
            ...formData,
            createdAt: currentDateTime,
            modifiedAt: currentDateTime,
        };
        
        axios.post('YOUR_API_ENDPOINT/driver_master', dataToSubmit)
            .then(response => {
                console.log(response.data);
                // Handle successful registration (e.g., display a success message or redirect)
            })
            .catch(error => {
                console.error('There was an error registering the driver!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Phone Number:</label>
                <input 
                    type="text" 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Aadhaar Number:</label>
                <input 
                    type="text" 
                    name="adharNumber" 
                    value={formData.adharNumber} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>PAN Number:</label>
                <input 
                    type="text" 
                    name="panNumber" 
                    value={formData.panNumber} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Driver Name:</label>
                <input 
                    type="text" 
                    name="driverName" 
                    value={formData.driverName} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input 
                    type="date" 
                    name="dob" 
                    value={formData.dob} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Address:</label>
                <input 
                    type="text" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Nationality:</label>
                <input 
                    type="text" 
                    name="nationality" 
                    value={formData.nationality} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Created By:</label>
                <input 
                    type="text" 
                    name="createdBy" 
                    value={formData.createdBy} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label>Modified By:</label>
                <input 
                    type="text" 
                    name="modifiedBy" 
                    value={formData.modifiedBy} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <button type="submit">Register Driver</button>
        </form>
    );
};

export default DriverRegistrationForm;
