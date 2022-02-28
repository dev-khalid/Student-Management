import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Modal, Select } from 'antd';
import { createBatch } from '../../actions/batchActions';
import { useDispatch, useSelector } from 'react-redux';

const { Option } = Select;

const CreateBatch = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [fees, setFees] = useState();
  const dispatch = useDispatch();
  const { loading, batch, error } = useSelector((state) => state.createBatch);

  const onCancel = () => {
    setVisible(false);
    console.log('cancled');
  };

  const submitHandler = () => {
    dispatch(
      createBatch({
        name,
        fees,
      })
    );
    setName('');
    setFees('');
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
        Add New Batch{' '}
      </Button>

      <Modal
        visible={visible}
        title="Create a new collection"
        cancelText="Cancel"
        onCancel={onCancel}
        // onOk={() => {
        //   form
        //     .validateFields()
        //     .then((values) => {
        //       form.resetFields();
        //       onCreate(values);
        //     })
        //     .catch((info) => {
        //       console.log('Validate Failed:', info);
        //     });
        // }}
      >
        <Form layout="vertical" onFinish={submitHandler}>
          <Form.Item label="Name">
            <Input
              placeholder="Enter Batch name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Fees">
            <Input
              placeholder="Enter Fees "
              type="number"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateBatch;
