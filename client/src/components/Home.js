import React from 'react'
import {Row,Col} from 'antd'; 
const Home = () => {
  return (
    <div>
      
      <Row>
        <Col span={6} style={{height: '500px',background: 'blue'}}></Col>
        <Col span={6} style={{height: '500px',background: 'blue'}}></Col>
      </Row>
    </div>
  )
}

export default Home