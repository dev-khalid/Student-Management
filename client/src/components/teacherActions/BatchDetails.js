import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';
import Students from './Students';
import Subjects from './Subjects';
import Exams from './Exams';
import Routines from './Routines';

const { Title } = Typography;

const BatchDetails = () => {
  const params = useParams();
  return (
    <>
      
      <Title level={5} >Its more than important to complete Payments Handling.</Title>

      <Title level={4}>Batch: Inter First Year Physics</Title>

      <Title level={4}>Students </Title>
      <Students />
      <Title level={4}>Subjects</Title>
      <Subjects />
      <Title level={4}>Exams</Title>
      <Exams />
      <Title level={4}>Routines</Title>
      <Routines />
    </>
  );
};

export default BatchDetails;
