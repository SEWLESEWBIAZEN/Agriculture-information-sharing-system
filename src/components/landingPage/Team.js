import React from "react";
import './style.css'

const Team = () =>
{
    const teamMembers = [
        {
            name: "Sewlesew Biazen",
            img: require("../assets/sewlesew.jpg").default,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsam nostrum illo tempora esse quibusdam.",
            socials: ["bi bi-twitter text-dark mx-1", "bi bi-facebook text-dark mx-1", "bi bi-linkedin text-dark mx-1", "bi bi-instagram text-dark mx-1"]
        },
        {
            name: "Melkamu Zinabu",
            img: require("../assets/melkamu.jpg").default,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsam nostrum illo tempora esse quibusdam.",
            socials: ["bi bi-twitter text-dark mx-1", "bi bi-facebook text-dark mx-1", "bi bi-linkedin text-dark mx-1", "bi bi-instagram text-dark mx-1"]
        },
        {
            name: "Yonas Kebede",
            img: require("../assets/Yonas.jpg").default,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsam nostrum illo tempora esse quibusdam.",
            socials: ["bi bi-twitter text-dark mx-1", "bi bi-facebook text-dark mx-1", "bi bi-linkedin text-dark mx-1", "bi bi-instagram text-dark mx-1"]
        },
        {
            name: "Samuel Kibret",
            img: require("../assets/samuel.jpg").default,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsam nostrum illo tempora esse quibusdam.",
            socials: ["bi bi-twitter text-dark mx-1", "bi bi-facebook text-dark mx-1", "bi bi-linkedin text-dark mx-1", "bi bi-instagram text-dark mx-1"]
        }
    ];

    return (
        <section className="team section-padding" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center pb-5">
                            <h2>Our Team</h2>
                            <p>All of our developers are 4<sup>th</sup> year computer science students</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div className="col-12 col-md-6 col-lg-3" key={index}>
                            <div className="card text-center">
                                <div className="card-body">
                                    <img src={member.img} alt="" className="img-fluid rounded-circle" />
                                    <h3 className="card-title py-2">{member.name}</h3>
                                    <p className="card-text">{member.text}</p>
                                    <p className="socials">
                                        {member.socials.map((social, socIndex) => (
                                            <i key={socIndex} className={social}></i>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;