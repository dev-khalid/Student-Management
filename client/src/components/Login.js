import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Card, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contract, setContract] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.user);
  console.log(loading, user, error);

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user]);

  const submitHandler = () => {
    dispatch(login(email, password));
  };
  return (
    <Row
      style={{
        minHeight: '100vh',
        paddingBottom: '50px',
        paddingTop: '50px',
      }}
    >
      <Col
        xs={{ span: 16, offset: 4 }}
        lg={{ span: 10, offset: 7 }}
        md={{ span: 12, offset: 6 }}
      >
        <Card title={<h3>Login {loading && <Spin />}</h3>} hoverable>
          <Form layout="vertical" onFinish={submitHandler}>
            <Form.Item label="Email" required>
              <Input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Password" required>
              <Input.Password
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
              <span style={{ float: 'right' }}>
                Don't have an account ? <Link to="/signup">Sign Up</Link>
              </span>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
