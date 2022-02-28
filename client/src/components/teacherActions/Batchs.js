import React, { useEffect } from 'react';
import { Table, Button, Tag } from 'antd';
import CreateBatch from './CreateBatch';
import { Link, Outlet } from 'react-router-dom';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { allBatchs } from '../../actions/batchActions';

const { Column } = Table;

const Batchs = () => {
  const dispatch = useDispatch();

  const { loading, error, batchs } = useSelector((state) => state.batchs); 
  useEffect(() => {
    dispatch(allBatchs());
  }, []);

  let data = [];
  if (batchs?.length > 0) {
    batchs.forEach((batch) => {
      let formatedData = {};
      formatedData._id = batch._id;
      formatedData.name = batch.name;
      formatedData.subjects = batch.subjectIds.map((sub) => sub.name);
      formatedData.key = batch._id;
      formatedData.studentNumber = batch.studentIds.length;
      formatedData.examNumber = batch.examIds.length;

      data.push(formatedData);
    });
  }
  // data = [
  //   {
  //     key: '1',
  //     name: 'Inter Physics Batch',
  //     subjects: 'physics',
  //     studentNumber: 10,
  //     examNumber: 12,
  //     fees: 1500,
  //     _id: '1',
  //   },
  // ];
  const viewHandler = (_id) => {
    console.log(_id, 'view will be done');
  };
  return (
    <>
      <CreateBatch />
      <Table dataSource={data}>
        <Column title="Batch Name" dataIndex="name" key="name" />
        <Column
          title="Subjects"
          dataIndex="subjects"
          key="subjects"
          render={(subjects) => { 
            let colors = ['geekblue', 'volcano'];
            let id = 1;
            return (
              <>
                {subjects && subjects.length > 0 ? (
                  subjects.map((subject, idx) => {
                    id = Number(!id);
                    return (
                      <Tag color={colors[id]} key={idx}>
                        {subject?.toUpperCase()}
                      </Tag>
                    );
                  })
                ) : (
                  <span> No Subjects Found </span>
                )}
              </>
            );
          }}
        />
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
              <Link to={`/profile/batchs/${_id}`}>
                <Button type="primary">
                  <EyeOutlined />
                </Button>
              </Link>
            </>
          )}
        />
      </Table>
    </>
  );
};

export default Batchs;
