import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import CreateStudent from './CreateStudent';
import { allStudents } from '../../actions/studentActions';
import { useSelector, useDispatch } from 'react-redux';
const { Column } = Table;

const Students = ({ batch }) => {
  const dispatch = useDispatch();
  let data = [];

  if (batch?.studentIds?.length > 0) {
    batch.studentIds.forEach((student) => {
      data.push({ ...student, key: student._id });
    });
  }

  const deleteHandler = () => console.log('deleted');
  return (
    <>
      <CreateStudent batch={batch} />

      <br />

      {/**@TODO the table is not mobile responsive i need to make this responsive . */}

      <Table dataSource={data} scroll={{ x: 1000 }}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Contract" dataIndex="contract" key="contract" />
        <Column
          title="Guardian Number"
          dataIndex="guardianNumber"
          key="guardianNumber"
        />
        <Column
          title="Actions"
          dataIndex="_id"
          key="_id"
          render={(_id) => (
            //render something here.
            <>
              {' '}
              <Row justify="center" gutter={16}>
                <Col>
                  <Button type="primary" onClick={deleteHandler}>
                    <DeleteOutlined />
                  </Button>
                </Col>
                <Col>
                  <Button type="primary" onClick={deleteHandler}>
                    <EditOutlined />
                  </Button>
                </Col>
                <Col>
                  <Link to={`/profile/students/${_id}`}>
                    <Button type="primary">
                      <EyeOutlined />
                    </Button>
                  </Link>
                </Col>
              </Row>
            </>
          )}
        />
      </Table>
    </>
  );
};

export default Students;
