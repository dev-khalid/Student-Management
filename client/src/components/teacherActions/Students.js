import React from 'react';
import { Table, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import CreateStudent from './CreateStudent';
const { Column } = Table;

const Students = () => {
  //now we will call an action to get all students data from backend .

  const dataSource = [
    {
      key: '2',
      name: 'John',
      address: '10 Downing Street',
      _id: 'abcdefg',
      email: 'something@ggmail.com',
      password: 'nothing',
      contract: 'something else',
      guardianNumber: '00000000',
    },
    {
      key: '2',
      name: 'John',
      address: '10 Downing Street',
      _id: 'abcdefg',
      email: 'something@ggmail.com',
      password: 'nothing',
      contract: 'something else',
      guardianNumber: '00000000',
    },
    {
      key: '2',
      name: 'John',
      address: '10 Downing Street',
      _id: 'abcdefg',
      email: 'something@ggmail.com',
      password: 'nothing',
      contract: 'something else',
      guardianNumber: '00000000',
    },
    {
      key: '2',
      name: 'John',
      address: '10 Downing Street',
      _id: 'abcdefg',
      email: 'something@ggmail.com',
      password: 'nothing',
      contract: 'something else',
      guardianNumber: '00000000',
    },
  ];
  const deleteHandler = () => console.log('deleted');
  return (
    <>
      <CreateStudent />

      <br />

      {/**@TODO the table is not mobile responsive i need to make this responsive . */}

      <Table dataSource={dataSource}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Password" dataIndex="password" key="password" />
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
                  <Link to={`/profile/students/${_id}`} ><Button type="primary" >
                    <EyeOutlined />
                  </Button></Link>
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
