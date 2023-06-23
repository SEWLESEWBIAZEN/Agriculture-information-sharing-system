import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Layout from './components/authentication/Layout';
import Job from './components/farmer/product/JobManager';
import Product from './components/farmer/product/ProductManager';
import Index from './components/landingPage/Index';
import Login from './components/Login';
import NewsFeed from './components/farmer/NewsFeed';
import Register from './components/Register';
import RequiredAuth from './components/RequiredAuth';
import { Routes, Route } from 'react-router-dom';
import NewsFeedManager from './components/icPage/NewsFeedManager';
import Pagination from './components/common/Pagination';
import Dashboard from './components/admin/adminHome';
import ManageDAWorker from './components/admin/ManageDAWorker';
import ManageICWorker from './components/admin/ManageIC';
import ManageFarmers from './components/admin/ManageFarmer';
import FarmerDashboard from './components/farmer/FarmerHome';
import QA from './components/QA'

function App()
{
  return (
    <div className="App" >
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route path='sign-in' element={<Login />} />
          <Route path='sign-up' element={<Register />} />
          <Route path='/' element={<Index />} />
          <Route path='news-feed' element={<NewsFeed />} />


          <Route path='admin/manage-news' element={<NewsFeedManager />} />
          <Route path='pagination' element={<Pagination />} />

          {/** Admin page routes */}

          <Route path='admin/' element={<Dashboard />} />
          <Route path='admin/m-da' element={<ManageDAWorker />} />
          <Route path='admin/m-ic' element={<ManageICWorker />} />
          <Route path='admin/m-fa' element={<ManageFarmers />} />

          {/** farmer page routes */}
          <Route path='farmer/' element={<FarmerDashboard />} />
          <Route path='farmer/agri-jobs' element={<Job />} />
          <Route path='farmer/agri-pros' element={<Product />} />


          {/**component testing area */}


          {/**Q & A section */}

          <Route path='/q-a' element={<QA/>} />

          








          {/* Private Routes */}
          <Route element={<RequiredAuth />}>

          </Route>


        </Route>
      </Routes>
    </div>
  );
}

export default App;
