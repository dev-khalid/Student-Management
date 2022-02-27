import React, { useState } from 'react';
import { DatePicker, Form, Input, Button, Modal, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createSubject } from '../../actions/subjectActions';
const { Option } = Select;

const CreateSubject = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState();
  
  const { loading } = useSelector((state) => state.subjects);
  const { batch } = useSelector((state) => state.batchDetails); //this will provide us the current batch information .

  const submitHandler = () => {
    dispatch(createSubject({ name, batchId: batch._id }));
    setVisible(false);
    setName('');
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
        Add New Subject{' '}
      </Button>

      <Modal
        visible={visible}
        title="Create a new subject"
        cancelText="Cancel"
        onCancel={onCancel}
      >
        <Form layout="vertical" onFinish={submitHandler}>
          <Form.Item label="Subject Name">
            <Input
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          {/* 
            I will think about dynamic subject setting with any optional batch later on . 
          <Form.Item label="Choose Batch">
            <Select defaultValue="Option1">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateSubject;
