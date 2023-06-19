import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Pagination from './Pagination';
import Footer from './Footer'
import { Paper } from '@mui/material';




const NewsFeed = () =>
{
    const [newsfeed, setNewsfeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterByTitle, setFilterByTitle] = useState('');
    const [filterByCategory, setFilterByCategory] = useState('');
    const [filterByDescription, setFilterByDescription] = useState('');





    useEffect(() =>
    {
        // Simulating an API call to fetch news data
        setTimeout(() =>
        {
            const newsData = [
                { id: 1, title: 'News 1', category: 'category 1', content: 'This is the first news article.', imgUrl: '' },
                { id: 2, title: 'News 2', category: 'category 2', content: 'This is the second news article.', imgUrl: '' },
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
            setNewsfeed(newsData);
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
            <NavBar />
            <Paper sx={{
                position: 'fixed', top: '4rem',
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





                    <Paper sx={{ backgroundColor: 'whitesmoke', marginTop: { xs: '16rem', md: '10rem' }, width: '100%' }}>
                        <h3 style={{ marginBottom: '3px' }}>NewsFeed</h3>
                        <Pagination items={newsfeed} />
                    </Paper>

                </Paper>
            </div>
            <Footer />
        </div>
    )
}
export default NewsFeed