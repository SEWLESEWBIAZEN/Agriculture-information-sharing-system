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
                <Paper sx={{ minWidth: { xs: '60px' }, margin: 'auto 1.0rem' }} elevation={0.4} key={item.id}
                >
                    <div>
                        Title:{item.title}
                        <span style={{ marginLeft: '30%' }}>Category:{item.category}</span>
                    </div>
                    <div className='textCenter'>
                        <div>
                            <img src={item.imgUrl}
                                width={5}
                                height={5}
                            />
                        </div>

                        <p>{item.content}</p>
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
