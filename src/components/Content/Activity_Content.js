import React, { Component } from 'react'
import { Row, Col, Card } from 'antd';
const { Meta } = Card;
class Activity_Content extends Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="middle">
                    <Col span={6}>
                        SOL MENÜ İÇERİK
                    </Col>
                    <Col span={18} style={{ backgroundColor: "red" }}>
                       
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Activity_Content;
