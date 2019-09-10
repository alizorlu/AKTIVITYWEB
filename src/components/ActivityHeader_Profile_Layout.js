import React, { Component } from 'react'
import { Col, Row, Card, Button, Icon, Avatar } from 'antd'
import '../App.css';

import  ProfileLayout  from "./Activity_Profile_Layout";

const { Meta } = Card;
const ButtonGroup = Button.Group;

class ActivityHeader_Profile_Layout extends Component {
    render() {
        return (
            <Row type="flex" style={{ paddingRight: 10, backgroundColor: "white" }}>
                <Col span={24} style={{ backgroundColor: "white" }}>
                    <img
                        className="profile-thumbnail-image"
                        src="https://gezipgordum.com/wp-content/uploads/2015/10/k%C4%B1z-kulesi-640x360.jpg" />

                </Col>
                <Col span={8} className="profile-avatar-info">
                    <Avatar
                        className="profile-avatar"
                        src="https://avatars0.githubusercontent.com/u/24724027" />
                    <div>

                        <Button type="link">

                            <span
                                style={{ fontWeight: "bold" }}
                                className="text-google-font pb-most">
                                <Icon type="check-circle" style={{ paddingRight: 2 }} theme="filled" />
                                azorlua
                            </span>
                        </Button>
                    </div>
                </Col>
                <Col span={16} className="profile-info-column">
                    <span>
                        <Button className="ml-2" type="default" shape={"circle"} icon="message" />
                        <Button className="ml-2" type="default" shape={"circle"} icon="bell" />
                        <Button className="ml-most" type="primary" size={"default"}>
                        Düzenle
                    </Button>
                    </span>
                    
                </Col>
                <Col span={24}>
                        <ProfileLayout/>
                </Col>
            </Row>
        );
    }
}
export default ActivityHeader_Profile_Layout;