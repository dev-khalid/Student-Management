import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

import {
  BookOutlined,
  SnippetsOutlined,
  DollarCircleOutlined,
  FireOutlined,
  ReadOutlined,
  UsergroupAddOutlined,
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
            {/**@TODO - render all students with batch name , username, email, password, contract,guardinNumber, every student should be linked with students details page where i will show all batchs info those are belongs to that teacher. like all exams , payments,subjects taken , batch taken of that teacher. */}
            <Menu.Item key="students" icon={<UsergroupAddOutlined />}>
              <Link to="/profile/students">Students</Link>
            </Menu.Item>

            {/**@TODO - render all batch with batch name , studentNumber, examNumbers, syllabusNum, payments,fees, #every batch should be linked with batch details page .*/}
            <Menu.Item key="batches" icon={<BookOutlined />}>
              <Link to="/profile/batchs">Batchs</Link>
            </Menu.Item>

            {/**@TODO - rander all the exams created by that teacher and sort them by date. create exam for a batch should be above the table. exam detils page holds all data of exam information . */}
            <Menu.Item key="exams" icon={<FireOutlined />}>
              <Link to="/profile/exams">Exams</Link>
            </Menu.Item>

            {/**@TODO - rander all the subjects created by logged in teacher. with batch name with subject creating option*/}
            <Menu.Item key="subjects" icon={<SnippetsOutlined />}>
              <Link to="/profile/subjects">Subjects </Link>
            </Menu.Item>

            {/**@TODO - rander all the subjects created by logged in teacher. with batch name */}
            <Menu.Item key="routines" icon={<ReadOutlined />}>
              <Link to="/profile/routines">Routines</Link>
            </Menu.Item>

            {/**@TODO - rander all the subjects created by logged in teacher. with batch name */}
            <Menu.Item key="syllabus" icon={<ReadOutlined />}>
              <Link to="/profile/syllabus">Syllabus</Link>
            </Menu.Item>

            <Menu.Item key="payments" icon={<DollarCircleOutlined />}>
              <Link to="/profile/payments">Payments</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            
            <Outlet /> 
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Profile;
