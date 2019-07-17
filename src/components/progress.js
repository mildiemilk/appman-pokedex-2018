import React from 'react'
import { Row, Col } from 'antd'
import cute from '../cute.png'

const progress = ({ item }) => {
  const hp = item.hp === 'None' ? 0 : item.hp
  const str = item.attacks && item.attacks.length ? item.attacks.length : 0
  const weak = item.weaknesses && item.weaknesses.length > 0 ? item.weaknesses.length : 0
  let damage = 0
  item.attacks && item.attacks.map(item => {
    if (parseInt(item.damage, 10)) { damage = damage + parseInt(item.damage, 10) }
  })
  const happiness = Math.floor((hp / 10 + damage / 10 + 10 - weak / 100) / 5)
  const cuteLevel = []
  for (let i = 1; i <= happiness; i++) {
    cuteLevel.push(<img className="cute-emo" src={cute} />)
  }
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
          <span className="progress-inner" style={{ 'width': (weak ? weak * 100 : 0) + '%' }} />
        </div>
      </Col>
    </Row>
    <Row style={{ width: '100%' }}>
      {cuteLevel.map(item => item)}
    </Row>
  </div>
}

export default progress
