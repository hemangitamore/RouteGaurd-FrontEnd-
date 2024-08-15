// import axios from "axios";

// export const BASE_URL = 'http://localhost:8080/api';

// export const myaxios = axios.create({
//     baseURL: BASE_URL
// });

import axios from "axios";

export const BASE_URL = 'http://localhost:8080/api';

export const myaxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('admin:password'), // Use the 'admin' username and 'password' here
    },
});

export const registerDriver = (driverData) => {
    return myaxios.post("/drivers/register", driverData)
        .then(response => response.data)
        .catch(error => {
            console.error('Error registering driver:', error);
            throw error;
        });
};

// Function to register a customer
export const registerCustomer = async (customerDetails) => {
    try {
      const response = await myaxios.post('/customers/customerRegister', customerDetails);
      return response.data; // Return response data if needed
    } catch (error) {
      throw new Error('Registration failed. Please try again.');
    }
  };

  // Add a new driver
export const addDriver = (driverData) => {
    return myaxios.post('/drivers/register', driverData)
        .then(response => response.data)
        .catch(error => {
            console.error('Error adding driver:', error);
            throw error;
        });
};

// Add a new vehicle
export const addVehicle = (vehicleData) => {
    return myaxios.post('/vehicles/addvehicle', vehicleData)
        .then(response => response.data)
        .catch(error => {
            console.error('Error adding vehicle:', error);
            throw error;
        });
};



// Function to get all customers
export const addCustomers = async () => {
    try {
      const response = await myaxios.get('/customers/customerRegister');
      return response.data;
    } catch (error) {
      console.error('Error fetching customer data:', error);
      throw error;
    }
  };

  export const getAllCustomers = async () => {
    try {
      const response = await axios.get('/customers');
      return response.data;
    } catch (error) {
      console.error('Error fetching customers:', error);
      throw error; // Re-throw the error so it can be handled in the component
    }
  };