import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const MainHeader = () => {
  return (
    <div>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <span style={{ fontSize: '23px',color: 'white' }}>
              Tuition <i className="fa-solid fa-book-open-reader"></i>
            </span>
          </Menu.Item>
          <Menu.Item key="login">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="signup">
            <Link to="/signup"> Singup</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default MainHeader;
