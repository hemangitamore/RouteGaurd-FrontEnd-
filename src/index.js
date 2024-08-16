// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// import { AuthContext} from './contexts/AuthContext';

// ReactDOM.render(
//   <React.StrictMode>
//   <AuthContext>
    
//       <App />
    
//   </AuthContext>
// </React.StrictMode>,
//   document.getElementById('root')
// );

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
