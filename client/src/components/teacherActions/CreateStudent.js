import React, { useState } from 'react';
import { Form, Input, Button, Modal, Select } from 'antd';
import {
  addStudentToBatchAction,
  createStudent,
} from '../../actions/studentActions';
import { useDispatch, useSelector } from 'react-redux';

const { Option } = Select;

const CreateStudent = ({ batch }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.createStudent);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [contract, setContract] = useState();
  const submitHandler = () => {
    dispatch(
      createStudent({
        name,
        email,
        password,
        contract,
        batchId: batch._id,
      })
    );
    setVisible(false);
  };
  const onCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ marginBottom: '20px' }}
      >
        {' '}
        Add New Student{' '}
      </Button>

      <Modal
        visible={visible}
        title="Create a new collection"
        cancelText="Cancel"
        onCancel={onCancel}
      >
        {batch && (
          <Form layout="vertical" onFinish={submitHandler}>
            <Form.Item label="Name">
              <Input
                placeholder="Enter students name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Batch">
              <Select defaultValue={batch?.name}>
                <Option value={batch?.name}>{batch.name}</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Email">
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Contract">
              <Input
                placeholder="Contract Number"
                value={contract}
                onChange={(e) => setContract(e.target.value)}
              />
            </Form.Item>
            {/* <Form.Item label="Guardian Number">
              <Input placeholder="Enter Guardian Number" />
            </Form.Item> */}

            <Form.Item>
              <Button htmlType="sumbmit" loading={loading} type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default CreateStudent;
