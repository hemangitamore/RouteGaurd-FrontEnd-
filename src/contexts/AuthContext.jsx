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

import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Named import

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if there is a token in localStorage
    const token = localStorage.getItem('jwtToken');
    if (token) {
      try {
        // Decode token to verify authentication
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('jwtToken');
        }
      } catch (error) {
        // Handle token decoding errors
        localStorage.removeItem('jwtToken');
      }
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem('jwtToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

