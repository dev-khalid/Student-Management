import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';

const { Column } = Table;

const ExamDetails = () => {
  const [participantsData, setParticipantsData] = useState([]);
  let marksOfStudents = [];

  const data = [
    {
      key: '1',
      studentData: {
        studentId: '1',
        mark: 100,
      },
    },
    {
      key: '2',
      studentData: {
        studentId: '2',
        mark: 55,
      },
    },
    {
      key: '3',
      studentData: {
        studentId: '3',
        mark: 66,
      },
    },
    {
      key: '4',
      studentData: {
        studentId: '7',
        mark: 77,
      },
    },
    {
      studentData: {
        studentId: '5',
        mark: 60,
      },
      key: '5',
    },
  ];

  //now i need to check if it exist inside my custom array if not then include and if it is there then i should update that one

  const updater = (studentData) => {
    console.log('previous one', marksOfStudents);
    marksOfStudents = marksOfStudents.filter(
      (studentObj) => studentData.studentId !== studentObj.studentId
    );
    marksOfStudents.push(studentData);
    console.log('modified one', marksOfStudents);
  };

  const updateResult = () => {
    console.log(marksOfStudents);
  };
  return (
    <div>
      ExamDetails
      <Button type="primary" onClick={updateResult}>
        {' '}
        Update Result{' '}
      </Button>
      <Table dataSource={data} onRow={(record, rowIndex) => {}}>
        <Column
          key="data"
          dataIndex="studentData"
          title="data"
          render={({ studentId, mark }) => {
            return (
              <Input
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
