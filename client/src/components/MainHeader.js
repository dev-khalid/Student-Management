import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header } = Layout;
const MainHeader = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const logoutHandler = () => {
    dispatch(logout(user.token));
  };
  return (
    <div>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <span style={{ fontSize: '23px', color: 'white' }}>
              Tuition <i className="fa-solid fa-book-open-reader"></i>
            </span>
          </Menu.Item>
          {user ? (
            <>
              <Menu.Item key="profile" icon={<UserOutlined />}>
                <Link to="/profile">{user.name}</Link>
              </Menu.Item>
              <Menu.Item
                key="logout"
                icon={<LogoutOutlined />}
                onClick={logoutHandler}
              >
                Logout
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="login">
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="signup">
                <Link to="/signup"> Singup</Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>
    </div>
  );
};

export default MainHeader;
