import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Card,
  notification,
  message,
  Spin,
} from 'antd';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contract, setContract] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = () => {
    message.loading({
      content: 'Please Wait register in progress...',
    });
    if (password !== confirmPassword) {
      notification.error({
        placement: 'topLeft',
        message: 'Password does not match.',
      });
    } else {
      console.log('registering');
      /**@TODO - i will later keep the avatar upload functionality. */
      //

      const register = async () => {
        setLoading(true);
        const { data } = await axios.post('api/user/register', {
          name,
          email,
          password,
          contract,
        });
        if (data.error) {
          notification.error({
            placement: 'topLeft',
            message: data.error,
          });
        } else {
          message.success({
            content: 'User Registered Successfully',
          });

          navigate('/login');
          console.log(data);
        }
        setLoading(false);
      };
      register();
    }
  };
  return (
    <Row
      style={{
        paddingBottom: '50px',
        paddingTop: '50px',
      }}
    >
      <Col
        xs={{ span: 16, offset: 4 }}
        lg={{ span: 10, offset: 7 }}
        md={{ span: 12, offset: 6 }}
      >
        <Card
          title={
            <>
              <h3>Sign Up {loading && <Spin />}</h3>
            </>
          }
          hoverable
        >
          <Form layout="vertical" onFinish={submitHandler}>
            <Form.Item label="Full Name" required>
              <Input
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
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
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Confirm Password" required>
              <Input.Password
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Contract Number" required>
              <Input
                placeholder="Contract Number"
                value={contract}
                onChange={(e) => setContract(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
              <span style={{ float: 'right' }}>
                Already have an account ? <Link to="/login">Login</Link>
              </span>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Signup;
