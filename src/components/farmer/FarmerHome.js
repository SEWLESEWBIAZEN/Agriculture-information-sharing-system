import React from 'react';
import NavBar from './NavBar';
import './farmer.css'
import img from '../assets/man_haystack.jpg'
import { Container, Paper } from '@mui/material';
import MyFooter from './Footer';
import CardLayout from './CardLayout';
import img1 from '../assets/corn.jpg'
import newsfeed from '../assets/newsfeed.jpg'

const Home = () =>
{

    return (
        <>
            <NavBar />
            <div className="home-page">

                <Paper style={{ marginBottom: '2rem' }}>
                    <div>
                        <h1>
                            Welcome to the Agricultural Information Sharing System
                        </h1>
                    </div>

                </Paper>
                <main>
                    <Container sx={{ backgroundColor: 'whitesmoke', padding: '2rem' }} className="hero-section">
                        <h2>Empowering Farmers with Reliable Information</h2>
                        <div style={{ display: 'flex' }}>
                            <p style={{ marginTop: '8rem' }}>
                                Our platform provides valuable agricultural information and resources to farmers,
                                helping them make informed decisions and improve their farming practices.
                            </p>
                            <img
                                src={img}
                                width="40%"
                                marginLeft='40%'
                            />
                        </div>
                    </Container>
                    <section className="features-section">

                        <Container className="feature" sx={{ marginBottom: '2rem', marginTop: '3rem', backgroundColor: 'whitesmoke' }}>
                            <h3>Expert Advice</h3>
                            <p>Access expert advice and guidance on various farming topics.</p>
                        </Container>
                        <Container className="feature" sx={{ backgroundColor: 'whitesmoke' }}>
                            <h3>Marketplace</h3>
                            <p>Buy and sell agricultural products and equipment with other farmers.</p>
                            <Paper elevation={0} sx={{ display: { xs: 'block', md: 'flex' }, margin: '0 auto' }}>
                                <CardLayout style={{ margin: 'auto 2rem' }} img={img1} title="Products you Posted to sell" count={0} link='/farmer/agri-pros'
                                    description="This section is all about products you posted earlier. click learn more to manage your posts" />

                                <CardLayout img={img1} title="Jobs you Posted to hire" count={0} link='/farmer/agri-jobs'
                                    description="This section is all about jobs you posted earlier. click learn more to manage your posts" />

                                <CardLayout img={newsfeed} title="NewsFeeds you have to have look at it" link='/news-feed'
                                    description="This section is all about newsfeeds you posted earlier. click learn more to see more" />

                            </Paper>

                        </Container>
                    </section>
                </main>
                <MyFooter />
            </div>
        </>
    );
};

export default Home;
