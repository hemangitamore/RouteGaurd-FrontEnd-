import React, { useState } from 'react';
import { Card, CardContent, CardActions, TextField, Button } from '@mui/material';

const DriverRegistration = () => {
  const [formData, setFormData] = useState({
    driverName: '',
    phoneNumber: '',
    adharNumber: '',
    panNumber: '',
    dob: '',
    address: '',
    nationality: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Update with your correct credentials
    fetch('http://localhost:8080/api/drivers', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa('username:password'), // Update with actual credentials
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log("Successfully Registered");
        // Optionally, clear the form or redirect the user
        setFormData({
          driverName: '',
          phoneNumber: '',
          adharNumber: '',
          panNumber: '',
          dob: '',
          address: '',
          nationality: ''
        });
      })
      .catch(error => {
        console.log(error);
        setError("Error in Registration");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="registration-card" data-aos="zoom-in-down" activeclassname="active">
      <Card sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
        <CardContent>
          <h2>Driver Registration</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Driver Name"
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Adhar Number"
              name="adharNumber"
              value={formData.adharNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Pan Number"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            {/* Add more fields as necessary */}
          </form>
        </CardContent>
        <CardActions>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </CardActions>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </Card>
    </div>
  );
};

export default DriverRegistration;







// import React, { useState } from 'react';
// import { Card, CardContent, CardActions, TextField, Button } from '@mui/material';

// const DriverRegistration = () => {
//   const [formData, setFormData] = useState({
//     driverName: '',
//     phoneNumber: '',
//     adharNumber: '',
//     panNumber: '',
//     dob: '',
//     address: '',
//     nationality: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     fetch('http://localhost:8080/api/drivers', {
//       method: 'POST',
//       headers: {
//         'Authorization': 'Basic ' + btoa('username:password'),
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error('Network response was not ok.');
//       }
//     })
//     .then((data) => {
//       console.log(data);
//       console.log("Successfully Registered");
//       // Optionally, clear the form or redirect the user
//       setFormData({
//         driverName: '',
//         phoneNumber: '',
//         adharNumber: '',
//         panNumber: '',
//         dob: '',
//         address: '',
//         nationality: ''
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       setError("Error in Registration");
//     })
//     .finally(() => {
//       setLoading(false);
//     });
//   };

//   return (
//     <div className="registration-card" data-aos="zoom-in-down" activeclassname="active">
//       <Card sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
//         <CardContent>
//           <h2>Driver Registration</h2>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="Driver Name"
//               name="driverName"
//               value={formData.driverName}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Phone Number"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Adhar Number"
//               name="adharNumber"
//               value={formData.adharNumber}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Pan Number"
//               name="panNumber"
//               value={formData.panNumber}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Date of Birth"
//               name="dob"
//               type="date"
//               value={formData.dob}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//             <TextField
//               label="Address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Nationality"
//               name="nationality"
//               value={formData.nationality}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <CardActions>
//               <Button 
//                 type="submit" 
//                 variant="contained" 
//                 color="primary" 
//                 disabled={loading}
//               >
//                 {loading ? 'Registering...' : 'Register'}
//               </Button>
//             </CardActions>
//             {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default DriverRegistration;











// import React, { useState } from 'react';
// import { Card, CardContent, CardActions, TextField, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import { driverRegistration } from '../services/admin-service';

// const DriverRegistration = () => {
//   const [formData, setFormData] = useState({
//     driverName: '',
//     phoneNumber: '',
//     adharNumber: '',
//     panNumber: '',
//     dob: '',
//     address: '',
//     nationality: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     driverRegistration(formData)
//       .then((response) => {
//         console.log(response);
//         console.log("Successfully Registered");
//         // Optionally, clear the form or redirect the user
//         setFormData({
//           driverName: '',
//           phoneNumber: '',
//           adharNumber: '',
//           panNumber: '',
//           dob: '',
//           address: '',
//           nationality: ''
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         setError("Error in Registration");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="registration-card" data-aos="zoom-in-down" activeclassname="active">
//       <Card sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
//         <CardContent>
//           <h2>Driver Registration</h2>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="Driver Name"
//               name="driverName"
//               value={formData.driverName}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Phone Number"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Adhar Number"
//               name="adharNumber"
//               value={formData.adharNumber}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Pan Number"
//               name="panNumber"
//               value={formData.panNumber}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Date of Birth"
//               name="dob"
//               type="date"
//               value={formData.dob}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//             <TextField
//               label="Address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Nationality"
//               name="nationality"
//               value={formData.nationality}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               required
//             />
//           </form>
//         </CardContent>
//         <CardActions>
//           <Button 
//             type="submit" 
//             variant="contained" 
//             color="primary" 
//             onClick={handleSubmit}
//             disabled={loading}
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </Button>
//         </CardActions>
//         {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
//       </Card>
//     </div>
//   );
// };

// export default DriverRegistration;







