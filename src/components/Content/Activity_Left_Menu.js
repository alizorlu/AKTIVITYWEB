import React, { Component } from 'react'
import { Row, List, Button, Icon, Col, Typography, Divider } from 'antd'

import "../../App.css";
const { Title, Text } = Typography;



class Activity_Left_Menu extends Component {
    render() {
        return (
            <div
            className="box"
                style={{ backgroundColor: "white", marginTop: 10, paddingLeft: 30, paddingTop: 10, paddingRight: 20, borderBottomRightRadius: 10, borderTopRightRadius: 10 }}>
                <Row type="flex">
                    <Col span={24}>
                        <Divider className="text-google-font"
                            style={{ paddingBottom: 0 }}
                            orientation="left">Sosyalleşebilirsin</Divider>
                        <List
                            size="small"
                            style={{ padding: 0 }}>
                            <List.Item>
                                <Icon style={{ fontSize: 20 }} theme="twoTone" twoToneColor="#ff4893" type="plus-circle" />
                                <Button className="text-google-font" type="link">
                                    Yeni bir aktivi oluştur
                                 </Button>

                            </List.Item>
                            
                            <List.Item>
                                <Icon style={{ fontSize: 20 }} theme="twoTone" twoToneColor="#FF7875" type="thunderbolt" />

                                <Button className="text-google-font" type="link">
                                    Sana göre aktivitiler
                                 </Button>
                            </List.Item>
                            <List.Item>
                                <Icon style={{ fontSize: 20 }} theme="twoTone" twoToneColor="#ff4893" type="like" />
                                <Button className="text-google-font" type="link">
                                    Beğeni Listeleriniz
                                 </Button>

                            </List.Item>
                            <List.Item>
                                <Icon style={{ fontSize: 20 }} theme="twoTone" twoToneColor="#341677" type="environment" />

                                <Button className="text-google-font" type="link">
                                    İnsanlar neler yapıyor
                                 </Button>
                            </List.Item>
                            <List.Item>
                                <Icon style={{ fontSize: 20 }} theme="twoTone" twoToneColor="#4baea0" type="safety-certificate" />
                                <Button className="text-google-font" type="link">
                                    Aktiviti kriterlerini oluşturalım
                                 </Button>

                            </List.Item>

                        </List>
                        <Divider className="text-google-font"
                            style={{ paddingBottom: 0 }}
                            orientation="left">Kurumsal</Divider>
                        <List
                            size="small"
                            style={{ padding: 0 }}>
                           
                            <List.Item>
                                <Icon style={{ fontSize: 20 }} theme="twoTone" twoToneColor="#FF7875" type="question-circle" />

                                <Button className="text-google-font" type="link">
                                    Hakkında
                                 </Button>
                            </List.Item>
                            <List.Item>
                                <Icon style={{ fontSize: 20 }} theme="twoTone" twoToneColor="#FF7875" type="question-circle" />

                                <Button className="text-google-font" type="link">
                                    Kurumsal Üyelik
                                 </Button>
                            </List.Item>
                            <List.Item>
                                <Icon style={{ fontSize: 20 }} theme="twoTone" twoToneColor="#FF7875" type="question-circle" />

                                <Button className="text-google-font" type="link">
                                    Reklam
                                 </Button>
                            </List.Item>
                            <List.Item>
                                <Icon style={{ fontSize: 20 }} theme="twoTone" twoToneColor="#FF7875" type="question-circle" />

                                <Button className="text-google-font" type="link">
                                    İstatistik
                                 </Button>
                            </List.Item>
                        </List>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Activity_Left_Menu;