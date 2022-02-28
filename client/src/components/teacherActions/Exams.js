import React from 'react';
import { Button, Table } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import CreateExam from './CreateExam';
import { Link } from 'react-router-dom';
const { Column } = Table;

const Exams = ({ batch }) => {
  /**@TODO - I need to make this much more dynamic so that it can render exams teacher specific , batch specific and student specific . */

  let data = [];
  if (batch?.examIds?.length > 0) {
    batch.examIds.forEach((exam) => {
      let formatedData = { ...exam };
      formatedData.key = exam._id;
      formatedData.subject = exam.subjectName;
      formatedData.batch = batch.name;
      formatedData.schedule = exam.startTime.includes('undefined')
        ? 'Schedule is not set yet'
        : `${exam.startTime}-${exam.endTime}`;
      data.push(formatedData);
    });
  }

  const viewHandler = (_id) => {
    console.log(_id, 'clicked');
  };
  return (
    <>
      <CreateExam batch={batch} />

      <Table dataSource={data}>
        <Column key="examdate" title="Exam Date" dataIndex="examDate" />
        <Column title="Subject" key="subject" dataIndex="subject" />

        {/* <Column title="Batch" dataIndex="batch" key="batch" /> */}
        {/* <Column
          title="Participants"
          dataIndex="participantsNumber"
          key="participants"
        /> */}
        <Column title="Mark" dataIndex="totalMark" key="mark" />
        <Column title="Time" dataIndex="time" key="time" />
        <Column title="Schedule" dataIndex="schedule" key="schedule" />
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
