import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './adminNavBar';
import { Paper } from '@mui/material';

function ManageICWorker()
{
  const [icWorkers, setICWorkers] = useState([]);
  const [newICWorker, setNewICWorker] = useState({ firstName: '', lastName: '', role: 'IC Worker', password: '', email: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() =>
  {
    const query = searchTerm ? `?name=${searchTerm}` : '';
    axios.get(`/api/ic-workers${query}`)
      .then(response =>
      {
        setICWorkers(response.data);
      })
      .catch(error =>
      {
        console.log(error);
      });
  }, [searchTerm]);

  const handleCreate = (event) =>
  {
    event.preventDefault();
    axios.post('/api/ic-workers', newICWorker)
      .then(response =>
      {
        setICWorkers([...icWorkers, response.data]);
        setNewICWorker({ firstName: '', lastName: '', role: 'IC Worker', password: '', email: '' });
      })
      .catch(error =>
      {
        console.log(error);
      });
  };

  const handleDelete = (id) =>
  {
    axios.delete(`/api/ic-workers/${id}`)
      .then(response =>
      {
        setICWorkers(icWorkers.filter(icWorker => icWorker.id !== id));
      })
      .catch(error =>
      {
        console.log(error);
      });
  };

  const handleInputChange = (event) =>
  {
    const { name, value } = event.target;
    setNewICWorker({ ...newICWorker, [name]: value });
  };

  const handleSearchTermChange = (event) =>
  {
    setSearchTerm(event.target.value);
  };

  const filteredICWorkers = icWorkers.filter(icWorker =>
  {
    const fullName = `${icWorker.firstName} ${icWorker.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const tableStyle = { borderCollapse: 'collapse', width: '80%', marginLeft: '10%' };
  const thStyle = { border: 'none', backgroundColor: 'whitesmoke', color: 'black', padding: '1rem', textAlign: 'center' };
  const tdStyle = { border: 'none', padding: '0.5rem' };

  const renderICWorkers = () =>
  {
    if (searchTerm)
    {
      return (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredICWorkers.map(icWorker => (
              <tr key={icWorker.id}>
                <td style={tdStyle}>{icWorker.id}</td>
                <td style={tdStyle}>{`${icWorker.firstName} ${icWorker.lastName}`}</td>
                <td style={tdStyle}>{icWorker.email}</td>
                <td style={tdStyle}>
                  <button onClick={() => handleDelete(icWorker.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else
    {
      return (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {icWorkers.map(icWorker => (
              <tr key={icWorker.id}>
                <td style={tdStyle}>{icWorker.id}</td>
                <td style={tdStyle}>{`${icWorker.firstName} ${icWorker.lastName}`}</td>
                <td style={tdStyle}>{icWorker.email}</td>
                <td style={tdStyle}>
                  <button onClick={() => handleDelete(icWorker.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  const formContainerStyle = { width: '25%', marginRight: '10px', position: 'fixed', marginTop: '60px', marginLeft: '10px' };
  const formStyle = { width: '100%' };
  const labelStyle = { display: 'block', marginBottom: '1rem', marginLeft: '10px' };
  const inputStyle = { width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '5px', border: '1px solid grey' };
  return (
    <>
      <AdminNavBar />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={formContainerStyle}>
          <h2>Create IC Worker</h2>
          <form style={formStyle} onSubmit={handleCreate}>
            <label style={labelStyle} htmlFor="firstName">First Name:</label>
            <input style={inputStyle} type="text" id="firstName" name="firstName" value={newICWorker.firstName} onChange={handleInputChange} required />
            <label style={labelStyle} htmlFor="lastName">Last Name:</label>
            <input style={inputStyle} type="text" id="lastName" name="lastName" value={newICWorker.lastName} onChange={handleInputChange} required />
            <label style={labelStyle} htmlFor="email">Email:</label>
            <input style={inputStyle} type="email" id="email" name="email" value={newICWorker.email} onChange={handleInputChange} required />
            <label style={labelStyle} htmlFor="password">Password:</label>
            <input style={inputStyle} type="password" id="password" name="password" value={newICWorker.password} onChange={handleInputChange} required />
            <button type="submit" style={{ backgroundColor: 'smokewhite', color: 'black' }}>Create</button>
          </form>
        </div>
        <Paper sx={{ marginLeft: 'auto', width: '70%', marginTop: '60px' }}>
          <h2>Manage IC Workers</h2>
          <input style={{ marginBottom: '1rem', borderRadius: '5px', border: '1px solid grey', padding: '0.5rem' }} type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearchTermChange} />
          {renderICWorkers()}
        </Paper>
      </div>
    </>
  );
}

export default ManageICWorker;