import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Container, Paper } from '@mui/material';
import img1 from '../assets/teff.jpg'

const NewsFeed = () =>
{
    const [newsfeed, setNewsfeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterByTitle, setFilterByTitle] = useState('');
    const [filterByCategory, setFilterByCategory] = useState('');
    const [filterByDescription, setFilterByDescription] = useState('');
    const [expanded, setExpanded] = useState(false);

    const newsData = [
        { id: 1, title: 'News 1', category: 'category 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.In fermentum et sollicitudin ac orci phasellus egestas.Accumsan in nisl nisi scelerisque eu.Nullam eget felis eget nunc lobortis mattis aliquam faucibus.Sagittis orci a scelerisque purus semper.Commodo nulla facilisi nullam vehicula ipsum a arcu.Risus feugiat in ante metus dictum at tempor.Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris.Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus.Morbi tincidunt ornare massa eget egestas.Vitae semper quis lectus nulla at volutpat diam ut venenatis.Augue ut lectus arcu bibendum at varius vel.Viverra ipsum nunc aliquet bibendum enim facilisis gravida.Fames ac turpis egestas maecenas pharetra.Mattis rhoncus urna neque viverra..', imgUrl: img1 },
        { id: 1, title: 'News 1', category: 'category 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.In fermentum et sollicitudin ac orci phasellus egestas.Accumsan in nisl nisi scelerisque eu.Nullam eget felis eget nunc lobortis mattis aliquam faucibus.Sagittis orci a scelerisque purus semper.Commodo nulla facilisi nullam vehicula ipsum a arcu.Risus feugiat in ante metus dictum at tempor.Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris.Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus.Morbi tincidunt ornare massa eget egestas.Vitae semper quis lectus nulla at volutpat diam ut venenatis.Augue ut lectus arcu bibendum at varius vel.Viverra ipsum nunc aliquet bibendum enim facilisis gravida.Fames ac turpis egestas maecenas pharetra.Mattis rhoncus urna neque viverra..', imgUrl: img1 },
        { id: 2, title: 'News 2', category: 'category 2', content: 'This is the second news article.', imgUrl: img1 },
        { id: 3, title: 'News 3', category: 'category 3', content: 'This is the third news article.', imgUrl: '' },
        { id: 4, title: 'News 4', category: 'category 4', content: 'This is the third news article.', imgUrl: '' },
        { id: 5, title: 'News 5', category: 'category 5', content: 'This is the third news article.', imgUrl: '' },
        { id: 6, title: 'News 6', category: 'category 6', content: 'This is the third news article.', imgUrl: '' },
        { id: 1, title: 'News 1', category: 'category 1', content: 'This is the first news article.', imgUrl: '' },
        { id: 2, title: 'News 2', category: 'category 1', content: 'This is the second news article.', imgUrl: '' },
        { id: 3, title: 'News 3', category: 'category 5', content: 'This is the third news article.', imgUrl: '' },
        { id: 4, title: 'News 4', category: 'category 3', content: 'This is the third news article.', imgUrl: '' },
        { id: 5, title: 'News 5', category: 'category 5', content: 'This is the third news article.', imgUrl: '' },
        { id: 6, title: 'News 6', category: 'category 3', content: 'This is the third news article.', imgUrl: '' }
    ];

    useEffect(() =>
    {
        // Simulating an API call to fetch news data
        setTimeout(() =>
        {

            setNewsfeed(newsData.slice(0, 3));
            setLoading(false);
        }, 2000);
    }, [])
    const handleFilterByCategory = (e) =>
    {
        setFilterByCategory(e.target.value);
        filterData(e.target.value);
    }

    const handleFilterByTitle = (e) =>
    {
        setFilterByTitle(e.target.value);
        filterData(e.target.value);
    }

    const handleFilterByDescription = (e) =>
    {
        setFilterByDescription(e.target.value);
        filterData(e.target.value);
    }

    const filterData = (value) =>
    {
        const filtered = newsfeed.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setNewsfeed(filtered);
    };
    const handleExpand = () =>
    {
        setExpanded((prevExpanded) => !prevExpanded)
        setNewsfeed((prevNews) => (expanded ? newsData.slice(0, 3) : newsData));


    };
    if (loading)
    {
        return (<div>
            <NavBar />
            <div style={{ position: 'relative', marginTop: '25%' }}>Loading...</div>
        </div>
        )
    }
    return (
        <div style={{ display: 'block' }}>
            <div style={{ zIndex: 5 }}>
                <NavBar />
            </div>
            <Paper sx={{
                position: 'fixed', top: '8rem', zIndex: 1,
                backgroundColor: 'white', padding: '1rem', width: '100%',
                display: { xs: 'block', md: 'flex' }
            }}>
                {/** filtering data by attributes section */}
                <h5>Filter</h5>
                <input type='text'
                    value={filterByTitle}
                    onChange={handleFilterByTitle}
                    placeholder='filter by title'
                    style={{ position: 'relative', width: '80%', marginBottom: '0.5rem', marginRight: '1rem' }}></input>
                <input type='text'
                    value={filterByCategory}
                    onChange={handleFilterByCategory}
                    placeholder='filter by category'
                    style={{ position: 'relative', width: '80%', marginBottom: '0.5rem', marginRight: '1rem' }}></input>
                <input
                    type='text'
                    value={filterByDescription}
                    onChange={handleFilterByDescription}
                    placeholder='filter by description'
                    style={{ position: 'relative', width: '80%', marginBottom: '0.5rem', marginRight: '1rem' }}></input>
            </Paper>

            <div style={{ minHeight: '32rem' }}>
                <Paper sx={{ backgroundColor: 'whitesmoke', display: { xs: 'block', md: 'flex' } }}>
                    <Container sx={{ backgroundColor: 'whitesmoke', marginTop: { xs: '16rem', md: '10rem' }, width: '100%' }}>
                        <h3 style={{ marginBottom: '3px' }}>NewsFeed</h3>
                        {newsfeed.map(item => (
                            <Paper sx={{ minWidth: { xs: '60px' }, margin: 'auto 1.0rem' }} elevation={0.4} key={item.id}
                            >
                                <div>
                                    Title:{item.title}
                                    <span style={{ marginLeft: '30%' }}>Category:{item.category}</span>
                                </div>
                                <div className='textCenter'>
                                    <Paper sx={{ display: { sx: 'block', sm: 'flex' }, marginBottom: '1rem' }}>
                                        <img
                                            src={item.imgUrl}
                                            maxWidth='600rem'
                                            height='150rem'
                                            style={{ borderRadius: '2rem' }}

                                        />
                                        <p style={{ padding: '1rem', textAlign: 'justify' }}>{item.content}</p>
                                    </Paper>


                                </div>



                            </Paper>
                        ))}
                        <button className='btn btn-primary mb-3' onClick={handleExpand}>
                            {expanded ? 'Show Less...' : 'Show More...'}
                        </button>
                    </Container>
                </Paper>
            </div>
            <Footer />
        </div>
    )
}
export default NewsFeed