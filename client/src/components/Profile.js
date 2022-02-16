import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

import {
  UserOutlined,
  SettingOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider, Content } = Layout;
const Profile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    return setCollapsed((prev) => !prev);
  };

  return (
    <>
      <Layout>
        <Sider
          style={{ minHeight: '100vh' }}
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          width={200}
          className="site-layout-background"
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<SettingOutlined />} title="Actions">
              <Menu.Item key="createStudent">Create Student</Menu.Item>
              <Menu.Item key="createBatch">Create Batch</Menu.Item>
              <Menu.Item key="createSubject">Create Subject</Menu.Item>
              <Menu.Item key="createSyllabus">Create Syllabus</Menu.Item>
              <Menu.Item key="createRoutine">Create Routine</Menu.Item>
              <Menu.Item key="createExam">Create Exam</Menu.Item>
              <Menu.Item key="addtobatch">Add Students to Batch</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Informations">
              <Menu.Item key="5">All Students </Menu.Item>
              <Menu.Item key="6">Batch Information</Menu.Item>
              <Menu.Item key="7">Exams </Menu.Item>
              <Menu.Item key="8">Payments</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {/*
              Routing will also work here . don't worry . 
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes> */}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Profile;
