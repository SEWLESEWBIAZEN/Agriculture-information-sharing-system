import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Layout from './components/authentication/Layout';
import Job from './components/product/JobManager';
import Product from './components/product/ProductManager';
import Index from './components/landingPage/Index';
import Login from './components/Login';
import NewsFeed from './components/NewsFeed';
import Register from './components/Register';
import RequiredAuth from './components/RequiredAuth';
import { Routes, Route } from 'react-router-dom';
import NewsFeedManager from './components/icPage/NewsFeedManager';
import Pagination from './components/common/Pagination';
import Dashboard from './components/admin/adminHome';
import ManageDAWorker from './components/admin/ManageDAWorker';
import ManageICWorker from './components/admin/ManageIC';
import ManageFarmers from './components/admin/ManageFarmer';


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
          <Route path='agri-jobs' element={<Job />} />
          <Route path='news-feed' element={<NewsFeed />} />
          <Route path='agri-pros' element={<Product />} />

          <Route path='admin/manage-news' element={<NewsFeedManager />} />
          <Route path='pagination' element={<Pagination />} />

          {/** Admin page routes */}

          <Route path='admin/' element={<Dashboard />} />
          <Route path='admin/m-da' element={<ManageDAWorker />} />
          <Route path='admin/m-ic' element={<ManageICWorker />} />
          <Route path='admin/m-fa' element={<ManageFarmers />} />







          {/* Private Routes */}
          <Route element={<RequiredAuth />}>

          </Route>


        </Route>
      </Routes>
    </div>
  );
}

export default App;
