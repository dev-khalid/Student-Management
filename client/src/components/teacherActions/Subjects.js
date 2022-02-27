import React from 'react';
import { List, Typography, Card } from 'antd';
import CreateSubject from './CreateSubject';
import { EyeOutlined } from '@ant-design/icons';

const Subjects = ({ subjects }) => {
  const viewHandler = (_id) => {
    console.log('view clicked', _id);
  };

  let colors = ['purple', 'blue'];
  let colorId = 0;
  let data = [];
  if (subjects?.length > 0) {
    subjects.forEach((subject) => data.push(subject.name));
  }
  return (
    <>
      <CreateSubject />
      <div>
        {subjects && subjects?.length > 0 ? (
          <List
            grid={{ gutter: 16, column: 5 }}
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item, idx) => (
              <List.Item key={idx}>
                <Card justify="center" hoverable>
                  {item}
                </Card>
              </List.Item>
            )}
          />
        ) : (
          <span> NO Data found </span>
        )}
      </div>
    </>
  );
};

export default Subjects;
