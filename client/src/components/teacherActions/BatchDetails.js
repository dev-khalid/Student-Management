import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';
import Students from './Students';
import Subjects from './Subjects';
import Exams from './Exams';
import Routines from './Routines';
import Payments from './Payments';
import { useSelector, useDispatch } from 'react-redux';
import { batchDetails } from '../../actions/batchActions';
const { Title } = Typography;

const BatchDetails = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const { loading, batch, error } = useSelector((state) => state.batchDetails);

  useEffect(() => {
    dispatch(batchDetails(params.batchId));
  }, [params.batchId]);
  return (
    <>
      <Title level={5}>
        Its more than important to complete Payments Handling.
      </Title>

      <Title level={4} style={{ textAlign: 'center' }}>
        Batch: {batch?.name}
      </Title>

      <Title level={4}>Students </Title>
      <Students batch={batch} />
      <Title level={4}>Subjects</Title>
      <Subjects subjects={batch?.subjectIds} />
      <Title level={4}>Exams</Title>
      <Exams batch={batch} />
      <Title level={4}>Payments </Title>
      <Payments batch={batch} />
      <Title level={4}>Routines</Title>
      <Routines />
    </>
  );
};

export default BatchDetails;
