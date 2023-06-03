import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css'



const NavBar = () =>
{
    return (
        <div className="text-primary navMain1" >
            <nav className="navbar navbar-expand-lg navbar-light m-2 " style={{
                backgroundColor: 'white'
            }}>
                <a className="navbar-brand" href="./">AIIS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ml-auto">
                        <li class="nav-item active mx-2">
                            <button className="nav-link btn btn-light nav-btn"><a href="./" className='nav-link'>Home </a><span class="sr-only">(current)</span></button>
                        </li>
                        <li class="nav-item mx-2">
                            <button class="nav-link btn btn-light nav-btn"><a href="./news-feed" className='nav-link'>NewsFeed</a></button>
                        </li>
                        <li className='nav-item mx-2'>
                            <button class="nav-link  px-4 btn btn-light nav-btn" ><a href="./q-a" className='nav-link'>Q&A</a></button>
                        </li>
                        <li class="nav-item dropdown mx-2">
                            <button style={{ paddingTop: '0.85rem', paddingBottom: '0.85rem' }} className="nav-link dropdown-toggle btn btn-light nav-btn" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Management Pannel
                            </button>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="./agri-pros">Agri-Products</a>
                                <a class="dropdown-item" href="./agri-jobs">Agri-Jobs</a>

                            </div>
                        </li>
                        <li class="nav-item mx-2">
                            <button className=" btn btn-light nav-btn" ><a href="./price-index" className="nav-link">Price Index</a></button>
                        </li>
                        <li class="nav-item mx-2">
                            <button class="nav-link btn btn-light nav-btn"><a href="./about-us" className='nav-link' > About Us</a></button>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default NavBar