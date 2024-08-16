import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AdminLogin from './components/AdminLogin';
import { AuthContext} from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
    
  </React.StrictMode>,
  document.getElementById('root')
);
