import React, { useState } from 'react';
import { DatePicker, Form, Input, Button, Modal, Select } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { createExam } from '../../actions/examActions';

const { Option } = Select;

const CreateExam = ({ batch }) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [examDate, setExamDate] = useState();
  const [publishDate, setPublishDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [subjectId, setSubjectId] = useState();
  const [totalMark, setTotalMark] = useState();
  const [sM, setSM] = useState('AM'); //this is for start time in pm or am ?
  const [eM, setEM] = useState('AM'); //this is for end time in pm or am ?
  const onCancel = () => {
    setVisible(false);
    console.log('cancled');
  };

  const { loading } = useSelector((state) => state.examDetails);

  const submitHandler = () => {
    dispatch(
      createExam({
        examDate,
        publishDate,
        startTime: `${startTime} ${sM}`,
        endTime: `${endTime} ${eM}`,
        subjectId,
        batchId: batch._id,
        totalMark,
      })
    );
    setVisible(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ marginBottom: '20px' }}
      >
        {' '}
        Add New Exam{' '}
      </Button>

      <Modal
        visible={visible}
        title="Create a new Exam"
        cancelText="Cancel"
        onCancel={onCancel}
      >
        {batch && (
          <Form layout="vertical" onFinish={submitHandler}>
            <Form.Item label="Exam Date">
              <DatePicker
                style={{ width: '100%' }}
                value={examDate}
                onChange={(date) => {
                  setExamDate(date);
                }}
              />
            </Form.Item>
            <Form.Item label="Result Publish Date">
              <DatePicker
                style={{ width: '100%' }}
                value={publishDate}
                onChange={(date) => setPublishDate(date)}
              />
            </Form.Item>

            <Form.Item label="Choose Subject">
              <Select
                defaultValue={'Choose subject for exam'}
                onChange={(val) => setSubjectId(val)}
              >
                {batch.subjectIds.length > 0 &&
                  batch.subjectIds.map((subject) => {
                    return (
                      <Option key={subject?._id} value={subject?._id}>
                        {subject?.name}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>
            <Form.Item label="Choose Batch">
              <Select
                defaultValue={`${batch._id}`}
                // onChange={(val) => setSubjectId(val)}
              >
                <Option value={`${batch._id}`}>{batch.name}</Option>

                {/** @TODO - need to make this dynamic so that it can render all the batch under that teacher later on .  */}
                {/* <Option value="Option2">Option2</Option> */}
              </Select>
            </Form.Item>

            <Form.Item label="Total Mark">
              <Input
                value={totalMark}
                onChange={(e) => setTotalMark(e.target.value)}
                placeholder="Enter Exam Mark"
              />
            </Form.Item>

            <Form.Item label="Start Time">
              <Input.Group compact>
                <Input
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  placeholder="Enter time here ex: 6:30"
                  style={{ width: '85%' }}
                />
                <Select
                  onChange={(val) => setSM(val)}
                  defaultValue="AM"
                  style={{ width: '15%' }}
                >
                  <Option value="PM">PM</Option>
                  <Option value="AM">AM</Option>
                </Select>
              </Input.Group>
            </Form.Item>

            <Form.Item label="End Time">
              <Input.Group compact>
                <Input
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  placeholder="Enter time here ex: 6:30"
                  style={{ width: '85%' }}
                />
                <Select
                  onChange={(val) => setEM(val)}
                  defaultValue="AM"
                  style={{ width: '15%' }}
                >
                  <Option value="PM">PM</Option>
                  <Option value="AM">AM</Option>
                </Select>
              </Input.Group>
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" loading={loading} type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default CreateExam;
