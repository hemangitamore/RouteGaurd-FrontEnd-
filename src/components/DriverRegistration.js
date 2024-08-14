import React, { useState } from 'react';
import axios from 'axios';

function DriverRegistration() {
    const [driverData, setDriverData] = useState({
        phoneNumber: '',
        adharNumber: '',
        panNumber: '',
        driverName: '',
        dob: '',
        address: '',
        nationality: '',
        createdBy: 'admin', // Or whatever user creates this entry
        modifiedBy: 'admin',
    });

    const handleChange = (e) => {
        setDriverData({
            ...driverData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/drivers/register', driverData);
            console.log('Driver registered successfully:', response.data);
            // You can reset the form or navigate to another page upon success
        } catch (error) {
            console.error('There was an error registering the driver:', error);
        }
    };

    return (
        <div>
            <h2>Driver Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" value={driverData.phoneNumber} onChange={handleChange} required />
                </div>
                <div>
                    <label>Aadhar Number:</label>
                    <input type="text" name="adharNumber" value={driverData.adharNumber} onChange={handleChange} required />
                </div>
                <div>
                    <label>PAN Number:</label>
                    <input type="text" name="panNumber" value={driverData.panNumber} onChange={handleChange} required />
                </div>
                <div>
                    <label>Driver Name:</label>
                    <input type="text" name="driverName" value={driverData.driverName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={driverData.dob} onChange={handleChange} required />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={driverData.address} onChange={handleChange} required />
                </div>
                <div>
                    <label>Nationality:</label>
                    <input type="text" name="nationality" value={driverData.nationality} onChange={handleChange} required />
                </div>
                <button type="submit">Register Driver</button>
            </form>
        </div>
    );
}

export default DriverRegistration;
