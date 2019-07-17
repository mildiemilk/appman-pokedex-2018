import React from 'react'
import { Row, Col } from 'antd'

const progress = ({ item }) => {
  const hp = item.hp === 'None' ? 0 : item.hp
  const str = item.attacks && item.attacks.length ? item.attacks.length : 0
  const weaknesses = item.weaknesses && item.weaknesses.length > 0 ? item.weaknesses.length : 0
  return <div className="progress">
    <Row style={{ width: '100%' }}>
      <Col span={5} style={{ fontWeight: 'bolder' }}>
        HP
      </Col>
      <Col span={19}>
        < div className="progress-bar">
          <span className="progress-inner" style={{ 'width': (hp > 100 ? '100' : hp) + '%' }} />
        </div>
      </Col>
    </Row>
    <Row style={{ width: '100%' }}>
      <Col span={5} style={{ fontWeight: 'bolder' }}>
        STR
      </Col>
      <Col span={19}>
        < div className="progress-bar">
          <span className="progress-inner" style={{ 'width': (str ? str * 50 : 0) + '%' }} />
        </div>
      </Col>
    </Row>
    <Row style={{ width: '100%' }}>
      <Col span={5} style={{ fontWeight: 'bolder' }}>
        WEAK
      </Col>
      <Col span={19}>
        < div className="progress-bar">
          <span className="progress-inner" style={{ 'width': (weaknesses ? weaknesses * 100 : 0) + '%' }} />
        </div>
      </Col>
    </Row>
  </div>
}

export default progress
