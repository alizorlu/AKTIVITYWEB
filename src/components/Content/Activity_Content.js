import React, { Component } from 'react'
import { Row, List, Button, Icon, Col, Typography, Divider } from 'antd'

import "../../App.css";

import Activity_Content_Top_Search from "./Activity_Content_Top_Search";

class Activity_Content extends Component {
    render() {
        return (
            <div>
                <Row type={"flex"}>
                    <Col span={24}>
                        <Activity_Content_Top_Search />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Activity_Content;
