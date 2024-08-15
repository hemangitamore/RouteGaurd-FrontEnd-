import { myaxios } from "./helper";

// Define the service function for driver registration
export const registerDriver = (driverData) => {
    return myaxios.post("/registerDrivers/register", driverData) // Corrected the path
        .then(response => response.data)
        .catch(error => {
            console.error('Error registering driver:', error);
            throw error;
        });
};

// Define the service function for customer registration
export const registerCustomer = (customerData) => {
    return myaxios.post('/registerCustomers/register', customerData) // Corrected the path
        .then(response => response.data)
        .catch(error => {
            console.error('Error registering customer:', error);
            throw error;
        });
};

// Define the service function for adding a driver
export const addDriver = (driverData) => {
    return myaxios.post('/drivers/register', driverData) // Corrected the path
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
      const response = await myaxios.get('/customers');
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

  export const getAllDrivers = async () => {
    try {
      const response = await axios.get('/drivers');
      return response.data;
    } catch (error) {
      console.error('Error fetching drivers:', error);
      throw error;
    }
  };

// import { myaxios } from "./helper";

// export const registration = (Admin) =>{
//     return myaxios.post("/api/drivers/register").then((response)=>response.json());
// };



// import { myaxios } from "./helper";

// // Define the service function for driver registration
// export const registerDriver = (driverData) => {
//     return myaxios.post("/api/drivers/register", driverData)
//         .then(response => response.data) // Return the response data
//         .catch(error => {
//             console.error('Error registering driver:', error);
//             throw error; // Re-throw the error to be handled by the caller
//         });
// };
