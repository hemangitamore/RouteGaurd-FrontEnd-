
//src/Navbar/NavLinks.js

/*import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div className="flex space-x-6">
      <NavLink
        exact
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'
          }`
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'
          }`
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/AdminLogin"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'
          }`
        }
      >
        Admin Login
      </NavLink>
    </div>
  );
};

export default NavLinks;

// src/components/Navbar.js*/

// src/components/NavLinks.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import './NavLinks.css';

const NavLinks = () => {
  return (
    <div className="nav-links">
      <NavLink
        exact
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'
          }`
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'
          }`
        }
      >
        Contact
      </NavLink>
      <NavDropdown title="Registration" id="basic-nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/admin/register">
          Admin Registration
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/driver/register">
          Driver Registration
        </NavDropdown.Item>
        {/* Add more registration links here */}
      </NavDropdown>
    </div>
  );
};

export default NavLinks;


