import React, { useState } from 'react';
import { DatePicker, Form, Input, Button, Modal, Select } from 'antd';

const { Option } = Select;

const CreateExam = () => {
  const [visible, setVisible] = useState(false);

  const onCancel = () => {
    setVisible(false);
    console.log('cancled');
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ marginBottom: '20px' }}
      >
        {' '}
        Add New Exam{' '}
      </Button>

      <Modal
        visible={visible}
        title="Create a new Exam"
        okText="Create"
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
        <Form layout="vertical">
          <Form.Item label="Exam Date">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Result Publish Date">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Choose Subject">
            <Select defaultValue="Option1">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Choose Batch">
            <Select defaultValue="Option1">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Start Time">
            <Input.Group compact>
              <Input
                placeholder="Enter time here ex: 6:30"
                style={{ width: '85%' }}
              />
              <Select defaultValue="PM" style={{ width: '15%' }}>
                <Option value="PM">PM</Option>
                <Option value="AM">AM</Option>
              </Select>
            </Input.Group>
          </Form.Item>
          <Form.Item label="End Time">
            <Input.Group compact>
              <Input
                placeholder="Enter time here ex: 6:30"
                style={{ width: '85%' }}
              />
              <Select defaultValue="PM" style={{ width: '15%' }}>
                <Option value="PM">PM</Option>
                <Option value="AM">AM</Option>
              </Select>
            </Input.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateExam;
