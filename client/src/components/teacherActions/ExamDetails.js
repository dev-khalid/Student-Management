import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Typography, Timeline } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {
  examDetailsAction,
  publishResultAction,
} from '../../actions/examActions';
import { useParams } from 'react-router-dom';

const { Column } = Table;
const { Title } = Typography;

const ExamDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [changed, setChanged] = useState(false);
  let marksOfStudents = [];
  let data = [];
  const { loading, exam } = useSelector((state) => state.examDetails);
  useEffect(() => {
    dispatch(examDetailsAction(params.examId));
  }, []);

  if (exam && exam.participants?.length > 0) {
    exam.participants.forEach((participant) => {
      let formatedParticipants = {};
      formatedParticipants.studentName = participant.studentId.name;
      formatedParticipants.contract =
        participant.studentId.contract || participant.studentId.email;
      formatedParticipants.key = participant._id;
      formatedParticipants.studentData = {
        studentId: participant.studentId._id,
        mark: participant.mark,
      };
      data.push(formatedParticipants);
    });
  }

  const updater = (studentData) => {
    marksOfStudents = marksOfStudents.filter(
      (studentObj) => studentData.studentId !== studentObj.studentId
    );
    marksOfStudents.push(studentData);
  };

  const updateResult = () => {
    console.log(marksOfStudents);
    dispatch(
      publishResultAction({
        examId: params.examId,
        participants: marksOfStudents,
      })
    );
  };
  return (
    <div>
      <Title level={5} style={{ marginBottom: '20px' }}>
        ExamDetails
      </Title>
      {exam && (
        <Timeline>
          <Timeline.Item>
            Batch Name:{' '}
            <span style={{ fontWeight: '700' }}>{exam?.batchId?.name}</span>
          </Timeline.Item>
          <Timeline.Item>
            Number of Participants:{' '}
            <span style={{ fontWeight: '700' }}>
              {exam?.participants?.length || 0}
            </span>
          </Timeline.Item>
          <Timeline.Item>
            Subject:{' '}
            <span style={{ fontWeight: '700' }}>{exam?.subjectName}</span>
          </Timeline.Item>
          <Timeline.Item>
            Exam Held Date:{' '}
            <span style={{ fontWeight: '700' }}>
              {exam?.examDate && moment(exam.examDate).format('DD-MM-yyyy')}
            </span>
          </Timeline.Item>
          <Timeline.Item>
            Total Marks Held Date:{' '}
            <span style={{ fontWeight: '700' }}>{exam?.totalMark}</span>
          </Timeline.Item>
          <Timeline.Item>
            Exam Schedule:{' '}
            <span style={{ fontWeight: '700' }}>
              {exam?.startTime}-{exam?.endTime}
            </span>
          </Timeline.Item>
          <Timeline.Item>
            Result Publish Date:{' '}
            <span style={{ fontWeight: '700' }}>
              {exam?.publishDate
                ? moment(exam.publishDate).format('DD-MM-yyyy')
                : 'Not Decided yet'}
            </span>
          </Timeline.Item>
        </Timeline>
      )}

      <Table
        scroll={{ x: 800 }}
        dataSource={data}
        footer={() =>
          1 && (
            <div style={{ textAlign: 'center' }}>
              <Button type="primary" onClick={updateResult}>
                {' '}
                Update Full Result Sheet{' '}
              </Button>
            </div>
          )
        }
      >
        <Column key="studentName" dataIndex="studentName" title="Name" />
        <Column key="contract" dataIndex="contract" title="Contract" />
        <Column
          key="data"
          dataIndex="studentData"
          title="data"
          width={'250px'}
          render={({ studentId, mark }) => {
            return (
              <Input
                type="number"
                defaultValue={mark}
                onChange={(e) => {
                  updater({ studentId, mark: e.target.value });
                }}
              />
            );
          }}
        />
      </Table>
    </div>
  );
};

//now this is freaking awesome man .

export default ExamDetails;
//subject name
//batch name
//exam date
//result publish date
//above things should be inside paragraph type format.

//participants name  and their mark should be inside table with update fuctionality of their result .
//emon ekta function rakhte hobe jeno sobgular result se ekbare publish korar ekta ability rakhe arki . sobar result ami add korbo then upore ba niche ekta publish button rakhbo taholei hoye jabe kaj .

//only marks will be editable . with studentIds within it . loop calaye check kore kore eitake update kora lagbe . jeno double occurance na hoy .

//first of all check if it is ediable and also pushable or not . then implement rest of the functionality .

// let examDemoObj = {
//   _id: '621db6e81b15cd38667ceb45',
//   examDate: '2022-03-10T06:01:50.573Z',
//   teacherId: '62086d21a39718a7e3ec19bd',
//   subjectName: 'Math',
//   batchId: {
//     _id: '620fb4e79cde68545a73d7ec',
//     name: 'Inter first year batch',
//     studentIds: ['621c65caeea14580771f46d9', '621c674827bc9cda917130c8'],
//     teacherId: '62086d21a39718a7e3ec19bd',
//     subjectIds: [
//       '621afc71cdbd26630fa463d9',
//       '621afd3fcdbd26630fa463e2',
//       '621afd5ccdbd26630fa463eb',
//       '621b26cf5252903635a2fc88',
//       '621c1af82aa1a2d29e471521',
//       '621c1b572aa1a2d29e47153e',
//     ],
//     examIds: [
//       '621c304a56eddb673189bf02',
//       '621c3892307a42d166e5050e',
//       '621c390242168a5edb1012d7',
//       '621c53c7c310aa2fd4441549',
//       '621c5406c310aa2fd4441551',
//       '621db6e81b15cd38667ceb45',
//     ],
//     monthlyPayments: [],
//     fees: 1500,
//     routines: [],
//     syllabus: [],
//     __v: 0,
//   },
//   totalMark: 50,
//   participants: [
//     {
//       studentId: {
//         name: 'khalid',
//         email: 'test@gmail.com',
//       },
//       mark: 0,
//       _id: '621db6e81b15cd38667ceb46',
//     },
//     {
//       studentId: {
//         name: 'Another test Student ',
//         email: 'testStudent1@gmail.com',
//       },
//       mark: 0,
//       _id: '621db6e81b15cd38667ceb47',
//     },
//   ],
//   startTime: '1.20 PM',
//   endTime: '2.20 PM',
//   publishDate: '2022-03-12T06:01:54.518Z',
//   __v: 0,
// };

//  data = [
//   {
//     key: '1',
//     studentData: {
//       studentId: '1',
//       mark: 100,
//     },
//   },
//   {
//     key: '2',
//     studentData: {
//       studentId: '2',
//       mark: 55,
//     },
//   },
//   {
//     key: '3',
//     studentData: {
//       studentId: '3',
//       mark: 66,
//     },
//   },
//   {
//     key: '4',
//     studentData: {
//       studentId: '7',
//       mark: 77,
//     },
//   },
//   {
//     studentData: {
//       studentId: '5',
//       mark: 60,
//     },
//     key: '5',
//   },
// ];

//now i need to check if it exist inside my custom array if not then include and if it is there then i should update that one
