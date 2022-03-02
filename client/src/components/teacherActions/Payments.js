import React, { useState, useEffect } from 'react';
import { Button, Table, Tag } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import {
  confirmPaymentAction,
  paymentInfoAction,
  createPaymentAction,
} from '../../actions/paymentActions';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const { Column } = Table;
const Payments = ({ batch }) => {
  const dispatch = useDispatch();
  const { loading, payments, error } = useSelector(
    (state) => state.paymentInfo
  );
  console.log(payments);
  useEffect(() => {
    if (batch?._id)
      dispatch(
        paymentInfoAction({
          batchId: batch?._id,
        })
      );
  }, [batch?._id]);
  const { payment } = useSelector((state) => state.confirmPayment);

  const paymentHandler = (studentId) => {
    dispatch(
      confirmPaymentAction({
        studentId,
        batchId: batch?._id,
      })
    );
  };

  let data = [];
  if (payments && payments?.length > 0) {
    payments.forEach((payment) => {
      let formatedData = {};
      formatedData.key = payment._id;
      formatedData.studentId = payment.studentId._id;
      formatedData.studentName = payment.studentId.name;
      formatedData.paidAt = payment.paidAt
        ? moment(payment.paidAt).format('DD-MM-yyyy')
        : 'Due';
      formatedData.paymentOf = moment(payment.paymentOf).format('DD-MM-yyyy');
      data.push(formatedData);
    });
  }
  // const data = [
  //   {
  //     key: '_id of the student',
  //     studentName: 'Bayzit',
  //     paidAt: '2022-10-11',
  //     paymentOf: '2022-9-01',
  //     studentId: '1',
  //     //batch Id thakbe . ei 2 ta jinish all time e same thakche fole kono problem e nai and amra easily eita theke update korte parbo . now come into action .
  //     //teacherId thakbe
  //   },
  //   {
  //     key: '_id of the student4',
  //     studentName: 'Taniya',
  //     paidAt: '2022-10-11',
  //     paymentOf: '2022-9-01',
  //     studentId: '4',
  //   },
  //   {
  //     key: '_id of the student2',
  //     studentName: 'Sumaiya',
  //     paidAt: 'Due',
  //     paymentOf: '2022-9-01',
  //     studentId: '2',
  //   },
  //   {
  //     key: '_id of the student3',
  //     studentName: 'Sabit',
  //     paidAt: '',
  //     paymentOf: '2022-9-01',
  //     studentId: '3', //this id will be used to updated payment to paid action.
  //   },
  // ];
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
