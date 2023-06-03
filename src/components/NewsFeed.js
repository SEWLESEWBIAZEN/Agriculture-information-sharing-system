import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Pagination from './Pagination';
import Footer from './Footer'




const NewsFeed = () =>
{
    const [newsfeed, setNewsfeed] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() =>
    {
        // Simulating an API call to fetch news data
        setTimeout(() =>
        {
            const newsData = [
                { id: 1, title: 'News 1', content: 'This is the first news article.' },
                { id: 2, title: 'News 2', content: 'This is the second news article.' },
                { id: 3, title: 'News 3', content: 'This is the third news article.' },
                { id: 4, title: 'News 4', content: 'This is the third news article.' },
                { id: 5, title: 'News 5', content: 'This is the third news article.' },
                { id: 6, title: 'News 6', content: 'This is the third news article.' },
                { id: 1, title: 'News 1', content: 'This is the first news article.' },
                { id: 2, title: 'News 2', content: 'This is the second news article.' },
                { id: 3, title: 'News 3', content: 'This is the third news article.' },
                { id: 4, title: 'News 4', content: 'This is the third news article.' },
                { id: 5, title: 'News 5', content: 'This is the third news article.' },
                { id: 6, title: 'News 6', content: 'This is the third news article.' }
            ];
            setNewsfeed(newsData);
            setLoading(false);
        }, 2000);
    }, [])


    if (loading)
    {
        return <div style={{ position: 'relative', marginTop: '25%' }}>Loading...</div>;
    }
    return (
        <div>
            <div style={{
                position: 'fixed', top: '0px', left: '0px'
            }}>
                <NavBar />
            </div>

            <div style={{ minHeight: '32rem' }}>
                <div style={{ display: 'flex' }}>

                    <div style={{
                        position: 'fixed', left: '1rem', top: '5rem',
                        backgroundColor: 'white', padding: '1rem', width: '20%',
                        display: 'block'
                    }}>
                        <h5>Filter</h5>
                        <input type='text' style={{ position: 'relative', width: '100%', marginBottom: '1.5rem' }}></input>
                        <input type='text' style={{ position: 'relative', width: '100%', marginBottom: '1.5rem' }}></input>
                        <input type='text' style={{ position: 'relative', width: '100%' }}></input>
                    </div>
                    <div style={{
                        position: 'relative', left: '25%',
                        top: '5rem', width: '70%', marginBottom: '6rem',
                        border: '2px solid black', borderRadius: '3rem', display: 'block'
                    }}>

                        <div>NewsFeed
                        </div>

                        <div>
                            <Pagination items={newsfeed} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default NewsFeed