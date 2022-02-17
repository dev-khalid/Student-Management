import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

const BatchDetails = () => {
  const params = useParams();
  return (
    <>
      <Title level={4}>Batch: Inter First Year Physics</Title>
      1.Show Student table 2.Show Subjects 3.Show Exams 4.Show Routines 5.Show
      Syllabus 6.Show Payment Information
    </>
  );
};

export default BatchDetails;
