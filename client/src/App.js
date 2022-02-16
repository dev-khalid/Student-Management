import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Layout, Menu, Breadcrumb } from 'antd';

import Batchs from './components/teacherActions/Batchs';
import Exams from './components/teacherActions/Exams';
import Payments from './components/teacherActions/Payments';
import Routines from './components/teacherActions/Routines';
import Students from './components/teacherActions/Students';
import Subjects from './components/teacherActions/Subjects';
import Syllabus from './components/teacherActions/Syllabus'; 
import Login from './components/Login';

import Signup from './components/Signup';

import MainHeader from './components/MainHeader';
import Profile from './components/Profile';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => {
  const [loggedIn, sL] = useState(false);
  return (
    <Layout>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile" element={<Profile />}> 
            <Route path="batchs" element={<Batchs />} />
            <Route path="exams" element={<Exams />} />
            <Route path="students" element={<Students />} />
            <Route path="syllabus" element={<Syllabus />} />
            <Route path="routines" element={<Routines />} />
            <Route path="payments" element={<Payments />} />
            <Route path="subjects" element={<Subjects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
