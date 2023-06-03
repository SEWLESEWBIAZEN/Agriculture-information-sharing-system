import React, { useState } from 'react';
import { Paper } from '@mui/material'

const pageSize = 4; // Number of items to show per page

const Pagination = ({ items }) =>
{
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(items.length / pageSize);

    // Get the current page's items
    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Function to change the current page
    const handlePageChange = (pageNumber) =>
    {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {/* Render the current page's items */}
            {currentItems.map(item => (
                <Paper elevation={5} key={item.id}
                    style={{
                        backgroundColor: 'white', marginBottom: '1rem',
                        marginLeft: '1.5rem', marginRight: '1.5rem', height: '5rem'
                    }}>
                    <div>{item.title}</div>
                    <div style={{ display: 'flex', position: 'relative' }} className='textCenter'>
                        <div><img /></div>

                        <p style={{ position: 'absolute', right: '2rem' }}>{item.content}</p>
                    </div>


                </Paper>
            ))}

            {/* Render pagination buttons */}
            <div>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        disabled={currentPage === page}
                    >
                        {page}

                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pagination;
