// src/components/Unavbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Unavbar = () => {
  const navigate = useNavigate();
  const get = localStorage.getItem('user');

  const onLogout = () => {
    const res = window.confirm("Are you sure you want to logout?");
    if (res) {
      localStorage.clear();
      navigate('/');
    }
  };

  return (
    <Navbar className="bg-green-400" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/uhome" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
            Grocery Web App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* Left side nav items */}
          <Nav className="me-auto">
            <Link to="/admin/dashboard" style={navLinkStyle}>Dashboard</Link>
            <Link to="/admin/users" style={navLinkStyle}>Users</Link>
            <Link to="/admin/all-products" style={navLinkStyle}>Products</Link>
            <Link to="/admin/add-product" style={navLinkStyle}>Add Product</Link>
            <Link to="/admin/orders" style={navLinkStyle}>Orders</Link>
          </Nav>

          {/* Right side logout button */}
          <Nav className="ms-auto">
            <button className="btn btn-danger" onClick={onLogout}>
              Logout
            </button>
            {/* Optionally show username */}
            {/* <span style={{ color: "white", paddingLeft: "10px", fontStyle: "italic" }}>
              ({JSON.parse(get)?.name})
            </span> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const navLinkStyle = {
  padding: "8px",
  color: "white",
  textDecoration: "none",
  fontSize: "22px",
  fontStyle: "italic"
};

export default Unavbar;
