import React from 'react';
import { Button, Table } from 'antd';
import CreateSubject from './CreateSubject';
import { EyeOutlined } from '@ant-design/icons';

const { Column } = Table;
const Subjects = () => {
  const viewHandler = (_id) => {
    console.log('view clicked', _id);
  };
  const data = [
    {
      key: '_id', 
      name: 'Physics', 
      batch: 'Inter Second Year Physics', 
      _id: '_id of the subject will appear here.'
    }, 
    {
      key: '_id2', 
      name: 'Physics', 
      batch: 'Inter Second Year Physics', 
      _id: '_id of the subject will appear here.'
    }, 
    {
      key: '_id3', 
      name: 'Physics', 
      batch: 'Inter Second Year Physics', 
      _id: '_id of the subject will appear here.'
    }, 
    {
      key: '_id4', 
      name: 'Physics', 
      batch: 'Inter Second Year Physics', 
      _id: '_id of the subject will appear here.'
    }, 
  ]
  return (
    <>
      <CreateSubject />
      <Table dataSource={data}>
        <Column title="Subject" dataIndex="name" key="name" />
        <Column title="Batch" dataIndex="batch" key="batch" />
        
      </Table>
    </>
  );
};

export default Subjects;
