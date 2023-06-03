import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import Service from './Service'
import Team from './Team'
import Footer from './Footer'
import Contact from './Contact'
import './style.css'



const Index = () =>
{
    return (
        <div>
            <NavBar />
            <Carousel />
            <Service />
            <Team />
            <Contact />
            <Footer />
        </div>
    )
}

export default Index