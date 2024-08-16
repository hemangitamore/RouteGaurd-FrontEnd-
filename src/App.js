// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import "aos/dist/aos.css";
// import './index.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
// // All pages
// import AdminLogin from './components/AdminLogin';
// //import SuperAdminLogin from '../components/SuperAdminLogin';


// import Services from './components/Services';
// import CustomerRegistration from './components/CustomerRegistration';
// import DriverRegistration from './components/DriverRegistration';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import DemoProduct from './pages/DemoProduct';

// import CustomerDetails from './pages/CustomerDetails';


// import DriverDetails from './pages/DriverDetails'; 

// import {useDocTitle} from './components/CustomHook';

// import ScrollToTop from './components/ScrollToTop';
// import AdminDashBoard from './pages/AdminDashBoard';
// import VehiclesDashBoard from './pages/VehiclesDashBoard';
// import TripDashBoard from './pages/TripDashBoard';
// import TripForm from './pages/TripForm';

// function App() {
//   useEffect(() => {
//     const aos_init = () => {
//       AOS.init({
//         once: true,
//         duration: 1000,
//         easing: 'ease-out-cubic',
//       });
//     }

//     window.addEventListener('load', () => {
//       aos_init();
//     });
//   }, []);

//   useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

//   return (
//     <>
//       <Router>
        
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/get-demo" element={<DemoProduct />} /> 
//             <Route path="/driver-details" element={<DriverDetails/>} /> 
//             <Route path="/AdminLogin" element={<AdminLogin />} />
     
            
            
//             <Route path="/AdminDashBoard" element={<AdminDashBoard/>} />
//             <Route path="/VehiclesDashBoard" element={<VehiclesDashBoard />} />
//             <Route path="/TripDashBoard" element={<TripDashBoard />} />
//             <Route path="/CustomerDetails" element={<CustomerDetails/>} />
//             <Route path="/customer/register" element={<CustomerRegistration />} />
//             <Route path="/service" element={< Services/>} />
//             <Route exact={true} path="/driver/register" element={<DriverRegistration />} />
            
//             <Route path="/admin/login" element={<AdminLogin />} />
            
//           </Routes>
     
//       </Router>
//     </>
//   );
// }


// export default App;


// // src/App.js


// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SuperAdminLogin from './components/SuperAdminLogin';
import Dashboard from './components/Dashboard';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <SuperAdminLogin />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;


