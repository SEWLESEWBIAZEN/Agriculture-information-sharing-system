import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper } from '@mui/material'
import Footer from '../Footer'
import NavBar from '../NavBar';


const JobManager = () =>
{
    //states of job attributes
    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState({});
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);
    //demo job array
    const jobsArray = [
        {
            title: 'plough', company: 'company 1', location: 'jimma',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

        },
        {
            title: 'harvesting crops', company: 'company 2', location: 'location 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'food preparation', company: 'company 2', location: 'location 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

        },
        {
            title: 'plough', company: 'company 3', location: 'location 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
    ]


    useEffect(() =>
    {
        setJobs(jobsArray.slice(0, 3))
    }, [])

    const handleTitleChange = (e) =>
    {
        setTitle(e.target.value);
    };


    const handleCompanyChange = (e) =>
    {
        setCompany(e.target.value);
    };
    const handleLocationChange = (e) =>
    {
        setLocation(e.target.value);
    };
    const handleDescriptionChange = (e) =>
    {
        setDescription(e.target.value);
    };
    const handleSearchTermChange = (e) =>
    {
        try
        {
            const response = axios.post('api/endpoint', searchTerm);
            if (response.status == 400)
            {
                //okay  
            }
        } catch (error)
        {
            console.log(error);
        }
        setSearchTerm(e.target.value);
        setFilteredJobs(jobs.filter((job) =>
        {
            const { title, description, ...x } = job;
            const lowerCaseSearchTerm = e.target.value.toLowerCase();
            return (
                title.toLowerCase().includes(lowerCaseSearchTerm) ||
                description.toLowerCase().includes(lowerCaseSearchTerm)
            );
        }))

    };

    const handleAddJob = async () =>
    {
        const newJob = {
            title: title,
            company: company,
            location: location,
            description: description
        };
        if (editMode)
        {
            ////for demo has no backend so for testing the ui
            const updatedJobs = [...jobs];
            updatedJobs[editIndex] = newJob;
            setJobs(updatedJobs);
            setEditIndex(null);

            //calling backend api
            setEditMode(false);
            try
            {
                const response = await axios.post('/api/endpoint', job);
                console.log(response.data); // Process response data here
            } catch (error)
            {
                console.error(error);
            }
        } else
        {
            //for demo has no backend so for testing the ui
            setJobs([...jobs, newJob]);
            //calling backend api
            try
            {
                const response = await axios.post('/api/endpoint', job);
                console.log(response.data); // Process response data here
            } catch (error)
            {
                console.error(error);
            }

        }
        setTitle('');
        setCompany('');
        setLocation('');
        setDescription('');
    };

    const handleEditJob = (index) =>
    {
        const jobToEdit = jobs[index];
        setTitle(jobToEdit.title);
        setCompany(jobToEdit.company);
        setLocation(jobToEdit.location);
        setDescription(jobToEdit.description);
        setEditMode(true);
        setEditIndex(index);
    };

    const handleDeleteJob = (index) =>
    {
        const updatedJobs = [...jobs];
        updatedJobs.splice(index, 1);
        setJobs(updatedJobs);
    };
    const handleExpand = () =>
    {
        setExpanded(!expanded)
        setJobs(expanded ? jobsArray : jobsArray.slice(0, 3))


    };

    const handleSearch = () =>
    {
        setJobs(filteredJobs)
    }


    return (
        <div>
            <div style={{
                position: 'fixed', top: '0px', left: '0px'
            }}>
                <NavBar />
            </div>
            <Paper sx={{ display: { xs: 'block', md: 'flex' }, marginTop: '5rem' }}>


                <Paper sx={{ display: 'block', margin: '1rem', backgroundColor: 'whitesmoke', maxHeight: '33rem' }}>
                    <h2>ADD JOB</h2>
                    <div style={{ margin: '2rem' }}>
                        <input
                            type="text"
                            placeholder="Job Title"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div style={{ margin: '2rem' }}>
                        <input
                            type="text"
                            placeholder="Company/ Employer"
                            value={company}
                            onChange={handleCompanyChange}
                        />
                    </div>
                    <div style={{ margin: '2rem' }}>
                        <input
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={handleLocationChange}
                        />
                    </div>
                    <div style={{ margin: '2rem' }}>
                        <textarea
                            type="text"
                            rows={5}
                            cols={23}
                            placeholder="Write the job description here...."
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </div>


                    <div style={{ margin: '2rem' }}>
                        <button className='btn btn-primary' onClick={handleAddJob}>
                            {editMode ? 'Update Job' : 'Add Job'}
                        </button>
                    </div>
                </Paper>
                <Paper elevation={1} sx={{ display: 'block', backgroundColor: 'whitesmoke', marginTop: '1rem' }}>
                    <Paper elevation={0} sx={{ display: 'flex', backgroundColor: 'whitesmoke', width: '60%', margin: '1rem 20%' }}>
                        <input
                            type="text"
                            placeholder="search job..."
                            value={searchTerm}
                            onChange={handleSearchTermChange}
                            style={{ borderRadius: '2px' }}
                        />
                        <button className='btn btn-primary' onClick={handleSearch}>Search</button>
                    </Paper>
                    <div style={{ margin: '1rem' }}>
                        <h2>Job List</h2>
                        {jobs.length === 0 ? (
                            <p>No jobs available.</p>
                        ) : (


                            <div>
                                <ul>
                                    {jobs.map((job, index) => (
                                        <Paper elevation={2} sx={{ margin: '1rem' }} key={index}>
                                            <span style={{ marginRight: '1.5rem', color: 'red' }}>Job Title: {job.title}</span>
                                            <span style={{ marginRight: '0.5rem', color: 'red' }}>Company/ Employer: {job.company}</span><br />
                                            <span style={{ marginRight: '0.5rem' }}>{job.description}</span><br />
                                            <span style={{ backgroundColor: 'whitesmoke' }}> Location: {job.location}</span><br />
                                            <button className='btn btn-warning' style={{ margin: '1rem' }} onClick={() => handleEditJob(index)}>Edit</button>
                                            <button className='btn btn-danger' style={{ margin: '1rem' }} onClick={() => handleDeleteJob(index)}>
                                                Delete
                                            </button>
                                        </Paper>
                                    ))}
                                </ul>
                                <button className='btn btn-primary mb-3' onClick={handleExpand}>
                                    {expanded ? 'Show More...' : 'Show Less...'}
                                </button>
                            </div>
                        )}
                    </div>
                </Paper>
            </Paper>
            <Footer />
        </div>
    );
};

export default JobManager;
