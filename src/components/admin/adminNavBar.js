import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const AdminNavBar = () =>
{
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <h2 style={{ position: 'absolute', left: '5px' }}>AISS</h2>

            <div style={{ display: 'flex' }}>
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news-feed">
                  NewsFeed
                </a>
              </li>
              <li>
                <NavDropdown title="Management Accounts" id="navbarDropdown">
                  <NavDropdown.Item as={Link} to="/admin/m-da">
                    DA-WORKER
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/m-fa">
                    Farmer
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/m-ic">
                    IC
                  </NavDropdown.Item>
                </NavDropdown>
              </li>


              <li className="nav-item mx-2">
                <a href="/price-index" className="nav-link">
                  Price Index
                </a>
              </li>
              <li style={{ textAlign: 'right', marginLeft: '0' }}>
                <Link to="/profile" className="nav-link">

                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
