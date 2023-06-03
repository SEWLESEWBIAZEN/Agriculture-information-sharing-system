import React from 'react';
import './style.css'
import laptopIcon from '../assets/project-1.jpg';
import journalIcon from '../assets/project-2.jpg';
import intersectIcon from '../assets/project-3.jpg';


function Service()
{
    return (
        <section className="services section-padding" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center pb-5">
                            <h2>Our Services</h2>
                            <p>We intend to advance the flow of technology reaching farmers. to that end we have focused on making our product</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-white text-center bg-dark pb-2">
                            <div className="card-body">
                                
                                <h3 className="card-title">RELIABLE</h3>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-white text-center bg-dark pb-2">
                            <div className="card-body">
                                
                                <h3 className="card-title">RELEVANT</h3>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-white text-center bg-dark pb-2">
                            <div className="card-body">
                                
                                <h3 className="card-title">FREE</h3>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;