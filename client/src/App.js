import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import {
  DesktopOutlined,
  LoginOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((prevState) => !prevState);
  return (
    <>
      {/* <Layout>
        <Sider
          style={{ minHeight: '100vh' }}
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
        > */}
      {/* <div className="logo">
            <Button
              type="primary"
              ghost
              style={{
                fontSize: '26px',
                border: 'none',
                height: '60px',
              }}
            >
              {!collapsed && 'Tuition'}&nbsp;
              <i className="fa-solid fa-book-open-reader"></i>
            </Button>
          </div> */}
      {/* <Row>
            <Col></Col>
            <Col></Col>
          </Row> */}
      <Menu
        style={{ width: '256px' }}
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
      >
        <Menu.Item key="1" icon={<LoginOutlined />}>
          Login
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Sign Up
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
      {/* </Sider>
      </Layout> */}

      <span>
        something about this one loremsomething about this one loremsomething
        about this one loremsomething about this one loremsomething about this
        one loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one
        loremsomething about this one loremsomething about this one lorem{' '}
      </span>
    </>
  );
}

export default App;

//don't waste any more time on design . I will learn how to create sidebar later on different project . but for now i have to continue my development flow .
