import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
import { registerCustomer } from '../services/user-services';

const CustomerRegistration = () => {
  const [customerDetails, setCustomerDetails] = useState({
    companyName: '',
    companyAddress: '',
    gstNumber: '',
    phoneNumber: '',
    email: '',
    establishedDate: '',
    createdBy: '',
    createdAt: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await registerCustomer(customerDetails);

      if (response) {
        console.log('Registration successful');
        // Reset form after successful submission
        setCustomerDetails({
          companyName: '',
          companyAddress: '',
          gstNumber: '',
          phoneNumber: '',
          email: '',
          establishedDate: '',
          createdBy: '',
          createdAt: '',
        });
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" className="registration-container" data-aos="zoom-in-down">
      <Card sx={{ padding: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Customer Registration
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Company Name"
              name="companyName"
              value={customerDetails.companyName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Company Address"
              name="companyAddress"
              value={customerDetails.companyAddress}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="GST Number"
              name="gstNumber"
              value={customerDetails.gstNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={customerDetails.phoneNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              name="email"
              value={customerDetails.email}
              onChange={handleChange}
              type="email"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Established Date"
              name="establishedDate"
              value={customerDetails.establishedDate}
              onChange={handleChange}
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              label="Created By"
              name="createdBy"
              value={customerDetails.createdBy}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Created At"
              name="createdAt"
              value={customerDetails.createdAt}
              onChange={handleChange}
              type="datetime-local"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{ marginTop: 2 }}
            >
              {loading ? 'Registering...' : 'Register'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CustomerRegistration;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
// import { registerCustomer } from '../services/user-services';

// const CustomerRegistration = () => {
//   const [customerDetails, setCustomerDetails] = useState({
//     companyName: '',
//     companyAddress: '',
//     gstNumber: '',
//     phoneNumber: '',
//     email: '',
//     establishedDate: '',
//     createdBy: '',
//     createdAt: '',
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setCustomerDetails({
//       ...customerDetails,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post('/api/customers/customerRegister', customerDetails);

//       if (response.status === 200) {
//         console.log('Registration successful');
//         // Reset form after successful submission
//         setCustomerDetails({
//           companyName: '',
//           companyAddress: '',
//           gstNumber: '',
//           phoneNumber: '',
//           email: '',
//           establishedDate: '',
//           createdBy: '',
//           createdAt: '',
        
//         });
//       }
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" className="registration-container" data-aos="zoom-in-down">
//       <Card sx={{ padding: 2 }}>
//         <CardContent>
//           <Typography variant="h4" gutterBottom>
//             Customer Registration
//           </Typography>
//           {error && <Typography color="error">{error}</Typography>}
//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="Company Name"
//               name="companyName"
//               value={customerDetails.companyName}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Company Address"
//               name="companyAddress"
//               value={customerDetails.companyAddress}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="GST Number"
//               name="gstNumber"
//               value={customerDetails.gstNumber}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Phone Number"
//               name="phoneNumber"
//               value={customerDetails.phoneNumber}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Email"
//               name="email"
//               value={customerDetails.email}
//               onChange={handleChange}
//               type="email"
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Established Date"
//               name="establishedDate"
//               value={customerDetails.establishedDate}
//               onChange={handleChange}
//               type="date"
//               fullWidth
//               margin="normal"
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//             <TextField
//               label="Created By"
//               name="createdBy"
//               value={customerDetails.createdBy}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Created At"
//               name="createdAt"
//               value={customerDetails.createdAt}
//               onChange={handleChange}
//               type="datetime-local"
//               fullWidth
//               margin="normal"
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               disabled={loading}
//               sx={{ marginTop: 2 }}
//             >
//               {loading ? 'Registering...' : 'Register'}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default CustomerRegistration;







// src/components/CustomerRegistration.jsx

// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';

// const CustomerRegistration = () => {
//   const [customerDetails, setCustomerDetails] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: ''
//   });

//   const [tripDetails, setTripDetails] = useState({
//     origin: '',
//     destination: '',
//     date: ''
//   });

//   const [goodDetails, setGoodDetails] = useState({
//     type: '',
//     weight: '',
//     description: ''
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleCustomerChange = (e) => {
//     setCustomerDetails({
//       ...customerDetails,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleTripChange = (e) => {
//     setTripDetails({
//       ...tripDetails,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleGoodChange = (e) => {
//     setGoodDetails({
//       ...goodDetails,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post('/api/customer/register', {
//         customerDetails,
//         tripDetails,
//         goodDetails
//       });

//       if (response.status === 200) {
//         // Handle successful registration (e.g., redirect to a confirmation page)
//         console.log('Registration successful');
//       }
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" className="registration-container" data-aos="zoom-in-down">
//       <Card sx={{ padding: 2 }}>
//         <CardContent>
//           <Typography variant="h4" gutterBottom>
//             Customer Registration
//           </Typography>
//           {error && <Typography color="error">{error}</Typography>}
//           <form onSubmit={handleSubmit}>
//             <Typography variant="h6" gutterBottom>
//               Customer Details
//             </Typography>
//             <TextField
//               label="Name"
//               name="name"
//               value={customerDetails.name}
//               onChange={handleCustomerChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Email"
//               name="email"
//               value={customerDetails.email}
//               onChange={handleCustomerChange}
//               type="email"
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Phone"
//               name="phone"
//               value={customerDetails.phone}
//               onChange={handleCustomerChange}
//               type="tel"
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Address"
//               name="address"
//               value={customerDetails.address}
//               onChange={handleCustomerChange}
//               fullWidth
//               margin="normal"
//               required
//             />

//             <Typography variant="h6" gutterBottom>
//               Trip Details
//             </Typography>
//             <TextField
//               label="Origin"
//               name="origin"
//               value={tripDetails.origin}
//               onChange={handleTripChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Destination"
//               name="destination"
//               value={tripDetails.destination}
//               onChange={handleTripChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Date"
//               name="date"
//               value={tripDetails.date}
//               onChange={handleTripChange}
//               type="date"
//               fullWidth
//               margin="normal"
//               InputLabelProps={{ shrink: true }}
//               required
//             />

//             <Typography variant="h6" gutterBottom>
//               Goods Details
//             </Typography>
//             <TextField
//               label="Type"
//               name="type"
//               value={goodDetails.type}
//               onChange={handleGoodChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Weight"
//               name="weight"
//               value={goodDetails.weight}
//               onChange={handleGoodChange}
//               type="number"
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Description"
//               name="description"
//               value={goodDetails.description}
//               onChange={handleGoodChange}
//               fullWidth
//               margin="normal"
//               required
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               disabled={loading}
//               sx={{ marginTop: 2 }}
//             >
//               {loading ? 'Registering...' : 'Register'}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default CustomerRegistration;
