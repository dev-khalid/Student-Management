import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';

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
import BatchDetails from './components/teacherActions/BatchDetails';
import StudentDetails from './components/teacherActions/StudentDetails';
import ExamDetails from './components/teacherActions/ExamDetails';

const { SubMenu } = Menu;

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile" element={<Profile />}>
            <Route path="batchs" element={<Batchs />}></Route>
            <Route path="batchs/:batchId" element={<BatchDetails />} />
            <Route path="exams" element={<Exams />} />
            <Route path="examdetails/:examId" element={<ExamDetails />} />
            <Route path="students" element={<Students />} />
            <Route path="students/:studentId" element={<StudentDetails />} />
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
