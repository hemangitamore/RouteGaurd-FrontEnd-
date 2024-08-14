import { myaxios } from "./helper";

// Define the service function for driver registration
export const registerDriver = (driverData) => {
    return myaxios.post("/drivers/register", driverData) // Corrected the path
        .then(response => response.data)
        .catch(error => {
            console.error('Error registering driver:', error);
            throw error;
        });
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
