import React from 'react';
import { Row, Col, Form, Input, Button, Card,   } from 'antd'; 
const Signup = () => {
  return (
    <Row
      style={{
        minHeight: '100vh',
        paddingBottom: '100px',
        paddingTop: '100px',
      }}
    >
      <Col
        xs={{ span: 16, offset: 4 }}
        lg={{ span: 10, offset: 7 }}
        md={{ span: 12, offset: 6 }}
      > 
        <Card title={<h3>Sign Up</h3>} hoverable>
          <Form layout="vertical">
            <Form.Item label="Field A" required>
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field B" required>
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Signup;
