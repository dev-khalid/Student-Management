import React from 'react';
import { Table, Button } from 'antd';
import CreateBatch from './CreateBatch';

import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

const { Column } = Table;
const Batchs = () => {
  const data = [
    {
      key: '1',
      name: 'Inter Physics Batch',
      subjects: 'physics',
      studentNumber: 10,
      examNumber: 12,
      fees: 1500,
      _id: 'id of the batch',
    },
  ];
  const viewHandler = (_id) => {
    console.log(_id, 'view will be done');
  };
  return (
    <>
      <CreateBatch />
      <Table dataSource={data}>
        <Column title="Batch Name" dataIndex="name" key="name" />
        <Column title="Subjects" dataIndex="subjects" key="subjects" />
        <Column
          title="Nubmer of Students"
          dataIndex="studentNumber"
          key="studentNumber"
        />
        <Column
          title="Number of Exams"
          dataIndex="examNumber"
          key="examNumber"
        />
        <Column title="Fees" dataIndex="fees" key="fees" />
        <Column
          title="Action"
          dataIndex="_id"
          key="_id"
          render={(_id) => (
            <>
              <Button type="primary" onClick={() => viewHandler(_id)}>
                {' '}
                <EyeOutlined />
              </Button>
            </>
          )}
        />
      </Table>
    </>
  );
};

export default Batchs;
