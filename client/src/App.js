import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Layout, Menu, Breadcrumb } from 'antd';

import Home from './components/Home';
import Login from './components/Login';

import Signup from './components/Signup';

import MainHeader from './components/MainHeader';
import Profile from './components/Profile';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => {
  const [loggedIn, sL] = useState(false);
  useEffect(() => {
    const fun = async () => {
      const {data} = await axios.get('api');
      console.log(data);
    };
    fun();
  }, []);
  return (
    <Layout>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
