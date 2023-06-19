import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './adminNavBar';

function ManageDAWorker() {
  const [daWorkers, setDAWorkers] = useState([]);
  const [newDAWorker, setNewDAWorker] = useState({ firstName: '', lastName: '', role: 'DA Worker', password: '', email: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const query = searchTerm ? `?name=${searchTerm}` : '';
    axios.get(`/api/da-workers${query}`)
      .then(response => {
        setDAWorkers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [searchTerm]);

  const handleCreate = (event) => {
    event.preventDefault();
    axios.post('/api/da-workers', newDAWorker)
      .then(response => {
        setDAWorkers([...daWorkers, response.data]);
        setNewDAWorker({ firstName: '', lastName: '', role: 'DA Worker', password: '', email: '' });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/da-workers/${id}`)
      .then(response => {
        setDAWorkers(daWorkers.filter(daWorker => daWorker.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewDAWorker({ ...newDAWorker, [name]: value });
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDAWorkers = daWorkers.filter(daWorker => {
    const fullName = `${daWorker.firstName} ${daWorker.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const tableStyle = { borderCollapse: 'collapse', width: '80%' , marginLeft:'10%'};
  const thStyle = { border: 'none', backgroundColor: 'whitesmoke', color: 'black', padding: '1rem', textAlign: 'center' };
  const tdStyle = { border: 'none', padding: '0.5rem' };
  const renderDAWorkers = () => {
    if (searchTerm) {
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
            {filteredDAWorkers.map(daWorker => (
              <tr key={daWorker.id}>
                <td style={tdStyle}>{daWorker.id}</td>
                <td style={tdStyle}>{`${daWorker.firstName} ${daWorker.lastName}`}</td>
                <td style={tdStyle}>{daWorker.email}</td>
                <td style={tdStyle}>
                  <button style={{backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px'}} onClick={() => handleDelete(daWorker.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
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
            {daWorkers.map(daWorker => (
              <tr key={daWorker.id}>
                <td style={tdStyle}>{daWorker.id}</td>
                <td style={tdStyle}>{`${daWorker.firstName} ${daWorker.lastName}`}</td>
                <td style={tdStyle}>{daWorker.email}</td>
                <td style={tdStyle}>
                  <button style={{backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px'}} onClick={() => handleDelete(daWorker.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };
  const formContainerStyle = { width: '25%', marginRight: '10px', position: 'fixed',marginTop:'10px' ,marginLeft:'10px'};
  const formStyle = { width: '100%' };
  const labelStyle = { display: 'block', marginBottom: '1rem', marginLeft:'10px' };
  const inputStyle = { width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '5px', border: '1px solid grey' };

  return (
    <>
    <AdminNavBar/>
    <br />
    <br />
    <div style={{ display:'flex',alignItems: 'flex-start'}}>
      <div style={formContainerStyle}>
        <h2>ADD DA Worker</h2>
        <form style={formStyle} onSubmit={handleCreate} >
          <label style={labelStyle}>
            First Name:
            <input style={inputStyle} type="text" name="firstName" value={newDAWorker.firstName} onChange={handleInputChange} required />
          </label>
        
          <label style={labelStyle}>
            Last Name:
            <input style={inputStyle} type="text" name="lastName" value={newDAWorker.lastName} onChange={handleInputChange} required />
          </label>
        
          <label style={labelStyle}>
            Email:
           
            <input style={inputStyle} type="email" name="email" value={newDAWorker.email} onChange={handleInputChange} required />
          </label>
          
          <label style={labelStyle}>
            Password:
            <input style={inputStyle} type="password" name="password" value={newDAWorker.password} onChange={handleInputChange} required />
          </label>
          <button style={{backgroundColor:'whitesmoke',color:'black'}}>Create</button>
        </form>
      </div>
      <div style={{marginLeft: 'auto' , width:'70%' , marginTop:'60px'}}>
        <h2>Search DA Workers</h2>
      
          <input type="text" style={{ marginBottom: '1rem', borderRadius: '5px', border: '1px solid grey', padding: '0.5rem' }} value={searchTerm} onChange={handleSearchTermChange} placeholder="Search by name"/>
       
        {renderDAWorkers()}
      </div>
      
    </div>
    </>
  );
}

export default ManageDAWorker;