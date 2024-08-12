// CustomerDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerTable from './CustomerTable';

const CustomerDetails = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customer data from API
    axios.get('/api/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customer data:', error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Customer List</h2>
      <CustomerTable customers={customers} />
    </div>
  );
};

export default CustomerDetails;
