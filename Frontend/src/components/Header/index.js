import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookies";
import { useEffect, useState } from "react";

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const token = Cookies.getItem("jwtToken");
  const adminToken = localStorage.getItem("adminJwtToken");

  const navigate = useNavigate();

  useEffect(() => {
    setIsAdmin(!!adminToken);
  }, [adminToken]);

  const onLogout = () => {
    const res = window.confirm("Are you sure you want to log out?");
    if (res) {
      localStorage.clear();
      Cookies.removeItem("jwtToken");
      Cookies.removeItem("adminJwtToken");
      navigate("/login");
    }
  };

  return (
    <div>
      {isAdmin ? (
        <Navbar
          fixed="top"
          style={{
            padding: "0 20px",
            minHeight: "10vh",
            width: "100%",
            backgroundColor: "red",
          }}
          expand="lg"
          variant="light"
        >
          <Navbar.Brand>
            <Link to="/admin/dashboard" style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}>
              G-Mart
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              <NavLink to="/admin/dashboard" className="nav-link">Home</NavLink>
              <NavLink to="/admin/all-products" className="nav-link">Products</NavLink>
              <NavLink to="/admin/orders" className="nav-link">Orders</NavLink>
              <NavLink to="/admin/users" className="nav-link">Users</NavLink>
              <NavDropdown title="Dropdown" id="navbarDropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <NavLink
                to="/login"
                onClick={onLogout}
                className="btn btn-danger"
              >
                Logout
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar
          fixed="top"
          style={{
            padding: "0 20px",
            minHeight: "10vh",
            width: "100%",
            backgroundColor: "#34D399",
          }}
          expand="lg"
        >
          <Navbar.Brand>
           <Link
  to="/"
  style={{
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}
>
  <img src="/G-mart_logo.png" alt="G-Mart Logo" style={{ height: "30px", width: "30px", objectFit: "contain" }} />
  G-Mart
</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/my-cart" className="nav-link">MyCart</NavLink>
              <NavLink to="/my-orders" className="nav-link">Orders</NavLink>
              <NavLink to="/my-history" className="nav-link">History</NavLink>
            </Nav>
            <Nav className="ms-auto">
              {!token ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <NavLink to="/login" className="btn btn-outline-light">User Login</NavLink>
                  <NavLink to="/alogin" className="btn btn-outline-light">Admin Login</NavLink>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  onClick={onLogout}
                  className="btn btn-danger"
                >
                  Logout
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default Header;
