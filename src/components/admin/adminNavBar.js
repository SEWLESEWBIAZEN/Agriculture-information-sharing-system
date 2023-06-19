import React from 'react';
import { Link } from 'react-router-dom';

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
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news-feed">
                  NewsFeed
                </a>
              </li>
              <li
                className="nav-item dropdown mx-2 nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Management Accounts
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/admin/m-da" className="dropdown-item">
                    DA-WORKER
                  </Link>
                  <Link className="dropdown-item" to="/admin/m-fa">
                    Farmer
                  </Link>
                  <Link className="dropdown-item" to="/admin/m-ic">
                    IC
                  </Link>
                </div>
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
