import React, { useState } from 'react'
import axios from 'axios';

const Search = () =>
{
    const [searchTerm, setSearchTerm] = useState('');


    const searchOnChangeHandler = async (e) =>
    {
        setSearchTerm(e.target.value)
        try
        {
            await axios.post(`https://api.example.com/search?query=${searchTerm}`);

        } catch (error)
        {
            alert(error);
        }
    }
    return (
        <div>
            <input
                type='text'
                onChange={searchOnChangeHandler}
                value={searchTerm}
                placeholder='Search here...'></input>

        </div>
    )
}

export default Search
