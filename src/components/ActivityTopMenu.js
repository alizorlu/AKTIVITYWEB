import React, { Component } from 'react'
import { Col, Row } from 'antd';

import '../App.css';
class ActivityTopMenu extends Component {


  render() {
    return (
      <header>
        <Row type="flex" align="middle" justify="center">
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            Col
            </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            Col
            </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            Col
            </Col>

        </Row>
      </header>
    );
  }
}
export default ActivityTopMenu;
