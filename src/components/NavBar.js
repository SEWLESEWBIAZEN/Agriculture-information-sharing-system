import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import './nav.css';

const NavBar = () =>
{
    return (
        <Paper className="text-primary navMain1">
            <nav className="navbar navbar-expand-lg navbar-light m-2 " style={{ backgroundColor: 'white' }}>
                <Link className="navbar-brand" to="/">AIIS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ml-auto">
                        <li className="nav-item active mx-2">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/news-feed" className="nav-link">NewsFeed</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/q-a" className="nav-link">Q&A</Link>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Management Panel
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/agri-pros" className="dropdown-item">Agri-Products</Link>
                                <Link to="/agri-jobs" className="dropdown-item">Agri-Jobs</Link>
                            </div>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/price-index" className="nav-link">Price Index</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/about-us" className="nav-link">About Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Paper>
    );
}

export default NavBar;
