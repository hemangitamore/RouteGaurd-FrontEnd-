// import React, { createContext, useState, useEffect } from 'react';
// import jwt_Decode from 'jwt-decode';


// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check if there is a token in localStorage
//     const token = localStorage.getItem('jwtToken');
//     if (token) {
//       // Decode token to verify authentication
//       const decodedToken = jwt_Decode(token);
//       if (decodedToken.exp * 1000 > Date.now()) {
//         setIsAuthenticated(true);
//       } else {
//         localStorage.removeItem('jwtToken');
//       }
//     }
//     setLoading(false);
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('jwtToken', token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem('jwtToken');
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// src/contexts/AuthContext.js

// 

// src/contexts/AuthContext.js
// src/contexts/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  const getToken = () => {
    return localStorage.getItem('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
