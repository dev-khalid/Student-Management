import React, { useState } from 'react';
import { DatePicker, Form, Input, Button, Modal, Select } from 'antd';

const { Option } = Select;

const CreateSubject = () => {
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
        Add New Subject{' '}
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
          <Form.Item label="Subject Name">
            <Input placeholder="" />
          </Form.Item>
          <Form.Item label="Choose Batch">
            <Select defaultValue="Option1">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateSubject;
