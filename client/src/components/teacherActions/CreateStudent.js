import React, { useState } from 'react';
import { Form, Input, Button, Modal, Select } from 'antd';

const { Option } = Select;

const CreateStudent = () => {
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
        Add New Student{' '}
      </Button>

      <Modal
        visible={visible}
        title="Create a new collection"
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
        <Form layout="vertical" >
          <Form.Item label="Name">
            <Input placeholder="Enter students name" />
          </Form.Item>
          <Form.Item label="Batch"> 
              <Select  defaultValue="Option1">
                <Option value="Option1">Option1</Option>
                <Option value="Option2">Option2</Option>
              </Select> 
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item label="Password">
            <Input placeholder="Enter password" />
          </Form.Item>
          <Form.Item label="Contract">
            <Input placeholder="Contract Number" />
          </Form.Item>
          <Form.Item label="Guardian Number">
            <Input placeholder="Enter Guardian Number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateStudent;
