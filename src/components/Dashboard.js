// src/components/Dashboard.js

// import React, { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

// const Dashboard = () => {
//   const { superAdmin, logout } = useContext(AuthContext);

//   return (
//     <div>
//       <h1>Welcome, {superAdmin?.email}</h1>
//       <button onClick={logout}>Logout</button>
//       {/* Add more content for the Super Admin's dashboard */}
//     </div>
//   );
// };

// export default Dashboard;

// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Add more content here */}
    </div>
  );
};

export default Dashboard;

