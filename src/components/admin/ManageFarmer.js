import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './adminNavBar';

function ManageFarmers() {
  const [farmers, setFarmers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/api/users?role=farmer')
      .then(response => {
        setFarmers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/users/${id}`)
      .then(response => {
        setFarmers(farmers.filter(farmer => farmer.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFarmers = farmers.filter(farmer => {
    const fullName = `${farmer.firstName} ${farmer.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const tableStyle = { borderCollapse: 'collapse', width: '80%', marginLeft:'10%'};
  const thStyle = { border: 'none', backgroundColor: 'whitesmoke', color: 'black', padding: '1rem', textAlign: 'center' };
  const tdStyle = { border: 'none', padding: '0.5rem' };

  return (
    <>
    <AdminNavBar/>
    <br />
    <br />
    <div style={{ padding: '20px', margiTop:'30px'}}>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Search by name:</label>
        <input type="text" value={searchTerm} onChange={handleSearchTermChange} style={{ borderRadius: '5px', padding: '5px' }} />
      </div>
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
          {filteredFarmers.map(farmer => (
            <tr key={farmer.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={tdStyle}>{farmer.id}</td>
              <td style={tdStyle}>{`${farmer.firstName} ${farmer.lastName}`}</td>
              <td style={tdStyle}>{farmer.email}</td>
              <td style={tdStyle}>
                <button onClick={() => handleDelete(farmer.id)} style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default ManageFarmers;