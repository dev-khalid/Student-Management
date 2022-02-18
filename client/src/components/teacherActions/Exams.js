import React from 'react';
import { Button, Table } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import CreateExam from './CreateExam';
import { Link } from 'react-router-dom';
const { Column } = Table;

const Exams = () => {
  /**@TODO - I need to make this much more dynamic so that it can render exams teacher specific , batch specific and student specific . */
  const data = [
    {
      key: '_id of the exa',
      examDate: '12/02/2022',
      subject: 'Physics',
      batch: 'Inter Second year Physics Batch',
      participantsNumber: 10,
      totalMark: 100,
      publishDate: '17/02/2022',
      _id: 'exam er id ta er moddhe bose jabe ',
    },
  ];
  const viewHandler = (_id) => {
    console.log(_id, 'clicked');
  };
  return (
    <>
      <CreateExam />

      <Table dataSource={data}>
        <Column key="examdate" title="Exam Date" dataIndex="examDate" />
        <Column title="Subject" key="subject" dataIndex="subject" />
        <Column title="Batch" dataIndex="batch" key="batch" />
        <Column
          title="Participants"
          dataIndex="participantsNumber"
          key="participants"
        />
        <Column title="Mark" dataIndex="totalMark" key="mark" />
        <Column title="Time" dataIndex="time" key="time" />
        <Column
          title="Result Publish Date"
          dataIndex="publishDate"
          key="publishDate"
        />
        <Column
          title="Actions"
          dataIndex="_id"
          render={(_id) => (
            <Link to={`/profile/exams/${_id}`}>
              <Button type="primary" onClick={() => viewHandler(_id)}>
                <EyeOutlined />
              </Button>
            </Link>
          )}
        />
      </Table>
    </>
  );
};

export default Exams;
