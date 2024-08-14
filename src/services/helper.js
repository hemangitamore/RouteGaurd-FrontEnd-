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


