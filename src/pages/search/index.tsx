import React from 'react'

import {Row, Col} from 'antd'

import Filters from './components/filters'

import "./index.less"

function Index() {
  return (
    <Row style={{padding: '20px'}} gutter={16}>
      <Col span={6}>
        <Filters></Filters>
      </Col>
      <Col span={18}>col-8</Col>
    </Row>
  )
}

export default Index
