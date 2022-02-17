import React, { useState } from 'react';
import { Form, Input, Button, Modal, Select } from 'antd';

const { Option } = Select;

const CreateBatch = () => {
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
        Add New Batch{' '}
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
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input placeholder="Enter Batch name" />
          </Form.Item>
          
          <Form.Item label="Fees">
            <Input placeholder="Enter Fees " type='number' />
          </Form.Item>
          
          

          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateBatch;
