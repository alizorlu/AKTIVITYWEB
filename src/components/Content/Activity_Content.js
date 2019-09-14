import React, { Component } from 'react'
import {
    Row, Col
} from 'antd'
import Activity_Content_Top_Search from "./Activity_Content_Top_Search";
import Activity_Content_Partial from "./Activity_Content_Partial";
import "../../App.css";


class Activity_Content extends Component {
    

    render() {


        return (
            <div style={{ marginBottom: 100 }}>
                <Row type={"flex"}>
                    <Col span={24}>
                        <Activity_Content_Top_Search />
                    </Col>
                    <Col span={24}>
                        <Activity_Content_Partial/>
                        <Activity_Content_Partial/>
                        <Activity_Content_Partial/>
                        <Activity_Content_Partial/>
                        
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Activity_Content;
