import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './adminNavBar';
import { Paper } from '@mui/material';
function Dashboard()
{
  const [userCounts, setUserCounts] = useState({ farmers: 0, daWorkers: 0, ics: 0 });

  useEffect(() =>
  {
    axios.get('/api/users/count')
      .then(response =>
      {
        setUserCounts(response.data);
      })
      .catch(error =>
      {
        console.log(error);
      });
  }, []);

  const cardStyle = {
    display: 'inline-block',
    width: '30%',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)'
  };

  return (
    <Paper sx={{ backgroundColor: 'whitesmoke', margin: '10rem 1rem' }}>
      <AdminNavBar />
      <div>
        <h1>Dashboard</h1>
        <div>
          <div style={cardStyle}>
            <h2>Farmers</h2>
            <p>{userCounts.farmers}</p>
          </div>
          <div style={cardStyle}>
            <h2>DA Workers</h2>
            <p>{userCounts.daWorkers}</p>
          </div>
          <div style={cardStyle}>
            <h2>ICs</h2>
            <p>{userCounts.ics}</p>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Dashboard;