// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import "./SuperAdmin.css"; // Add the CSS file for styling

// const SuperAdmin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("Super Admin Email:", email);
//     console.log("Password:", password);

//     // Navigate to the Admin Dashboard after login
//     navigate('/AdminDashBoard');
//   };

//   // Example AG Grid data (for illustration purposes)
//   const columnDefs = [
//     { headerName: "Admin ID", field: "adminId" },
//     { headerName: "Login Time", field: "loginTime" },
//   ];

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Super Admin Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SuperAdmin;







// // import React, { useState } from "react";
// // import { AgGridReact } from "ag-grid-react";
// // import "ag-grid-community/styles/ag-grid.css";
// // import "ag-grid-community/styles/ag-theme-alpine.css";
// // import "./SuperAdmin.css"; // Add the CSS file for styling

// // const SuperAdmin = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     // Handle login logic here
// //     console.log("Super Admin Email:", email);
// //     console.log("Password:", password);
// //   };

// //   // Example AG Grid data (for illustration purposes)
// //   const columnDefs = [
// //     { headerName: "Admin ID", field: "adminId" },
// //     { headerName: "Login Time", field: "loginTime" },
// //   ];

// //   return (
// //     <div className="login-container">
// //       <div className="login-box">
// //         <h2>Super Admin Login</h2>
// //         <form onSubmit={handleLogin}>
// //           <div className="form-group">
// //             <label htmlFor="email">Email:</label>
// //             <input
// //               type="email"
// //               id="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="password">Password:</label>
// //             <input
// //               type="password"
// //               id="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <button type="submit">Login</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SuperAdmin;
// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../contexts/AuthContext';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import "./SuperAdmin.css";
// import jwtDecode from 'jwt-decode';




// const SuperAdmin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post('http://localhost:8080/api/login', { email, password });
//       const { token } = response.data;
//       login(token);

//       // Redirect based on role
//       const decodedToken = JSON.parse(atob(token.split('.')[1]));
//       const role = decodedToken.role;

//       if (role === 'superadmin') {
//         navigate('/superadmin/dashboard');
//       } else if (role === 'admin') {
//         navigate('/admin/dashboard');
//       } else if (role === 'user') {
//         navigate('/user/dashboard');
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       // Handle error appropriately
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Super Admin Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SuperAdmin;

// src/components/SuperAdminLogin.js

// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext';
// import './SuperAdminLogin.css';

// const SuperAdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8080/api/superadmin/login', { email, password });
//       const { token } = response.data;
//       login(token);
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Login failed:', error);
//       alert('Login failed! Please check your credentials.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Super Admin Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SuperAdminLogin;


// src/components/SuperAdminLogin.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './SuperAdminLogin.css';

const SuperAdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/superadmin/login', { email, password });
      const { token } = response.data;
      login(token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Super Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SuperAdminLogin;

