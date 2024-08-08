
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
*/
// src/Navbar/NavLinks.js

/*import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

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
        to="/service"
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

      <Dropdown>
        <Dropdown.Toggle 
          //variant="primary" 
          id="registration-dropdown" 
          className="px-4 py-2  transition-colors duration-300 text-blue-900 hover:bg-blue-100"
        >
          Registration
        </Dropdown.Toggle>

        <Dropdown.Menu>
          
          <Dropdown.Item as={NavLink} to="/customer/register">
            Customer Registration
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/driver/register">
            Driver Registration
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default NavLinks;
*/

// src/Navbar/NavLinks.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const NavLinks = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Navbar.Brand as={NavLink} to="/" className="font-weight-bold">RouteGaurd</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} exact to="/" activeClassName="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" activeClassName="active">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/service" activeClassName="active">
            Services
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" activeClassName="active">
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to="/AdminLogin" activeClassName="active">
            Admin Login
          </Nav.Link>

          <NavDropdown title="Registration" id="registration-dropdown">
            <NavDropdown.Item as={NavLink} to="/customer/register">
              Customer Registration
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/driver/register">
              Driver Registration
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavLinks;


