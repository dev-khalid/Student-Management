import React, { useState, useEffect } from 'react';
import { Button, Table, Popconfirm, Tag } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
const { Column } = Table;
const Payments = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  /**
   * 1.check for last months payment status always . this will give n documents in return < number of students [suppose]
   * 2.in frontend which ids of students doesn't match they will be sortlisted and their payment status will be set to due and thus rendered
   * */
  const paymentHandler = (studentId) => {
    console.log('payment confirmed for studentId', studentId);
  };
  const data = [
    {
      key: '_id of the student',
      studentName: 'Bayzit',
      paidAt: '2022-10-11',
      paymentOf: '2022-9-01',
      studentId: '1',
      //batch Id thakbe . ei 2 ta jinish all time e same thakche fole kono problem e nai and amra easily eita theke update korte parbo . now come into action .
      //teacherId thakbe
    },
    {
      key: '_id of the student4',
      studentName: 'Taniya',
      paidAt: '2022-10-11',
      paymentOf: '2022-9-01',
      studentId: '4',
    },
    {
      key: '_id of the student2',
      studentName: 'Sumaiya',
      paidAt: 'Due',
      paymentOf: '2022-9-01',
      studentId: '2',
    },
    {
      key: '_id of the student3',
      studentName: 'Sabit',
      paidAt: '',
      paymentOf: '2022-9-01',
      studentId: '3', //this id will be used to updated payment to paid action.
    },
  ];
  return (
    <div>
      Payments
      <Table dataSource={data} scroll={{ x: 800 }}>
        <Column title="Name" key="name" dataIndex={'studentName'} />
        <Column title="Payment Of" key="paymentof" dataIndex={'paymentOf'} />
        <Column
          title="Paid At"
          key="paidat"
          dataIndex={'paidAt'}
          render={(paidAt) => {
            return (
              <Tag color={paidAt == 'Due' ? 'magenta' : 'green'}>{paidAt}</Tag>
            );
          }}
        />
        <Column
          title="Confirmation of Payment"
          key="confirmation"
          dataIndex={'studentId'}
          render={(studentId) => {
            return (
              <Button type="primary" onClick={() => paymentHandler(studentId)}>
                Confirm Payment <CheckOutlined />
              </Button>
            );
          }}
        />
      </Table>
    </div>
  );
};

export default Payments;
