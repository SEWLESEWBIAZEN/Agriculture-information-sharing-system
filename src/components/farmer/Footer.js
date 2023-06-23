import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

const MyFooter = () =>
{
    return (
        <div className=" mt-3">
            <footer className="text-center text-lg-start" style={{ backgroundColor: "white", color: "black" }}>
                <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#6351ce" }}>
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">AISS</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p>
                                    AISS a web application that is trying to solve the urgent problem of getting reliable and quick information to our farmers.
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p><a href="#!" className="text-black">profile</a></p>
                                <p><a href="#!" className="text-black">FAQ</a></p>
                                <p><a href="#!" className="text-black">Home</a></p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p><i className="fas fa-home mr-3"></i>&nbsp; Adiss Ababa, 4 killo, Ethiopia</p>
                                <p><i className="fas fa-envelope mr-3"></i> &nbsp; aiss@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> &nbsp; 09 11 22 33 44</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-3" >
                    © 2023 AISS
                </div>
            </footer>
        </div>
    );
};

export default MyFooter;