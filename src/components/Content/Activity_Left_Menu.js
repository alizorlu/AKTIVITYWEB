import React, { Component } from 'react'
import { Row, List, Button, Icon, Col, Typography, Divider } from 'antd'

import "../../App.css";
const { Title, Text } = Typography;



class Activity_Left_Menu extends Component {
    render() {
        return (
            <div
                style={{ backgroundColor: "white", marginTop: 10, paddingLeft: 30, paddingTop: 10, paddingRight: 20, borderBottomRightRadius: 10, borderTopRightRadius: 10 }}>
                <Row type="flex">
                    <Col span={24}>
                        <Divider className="text-google-font" style={{ paddingBottom: 0 }} orientation="left">Sosyalleşebilirsin</Divider>
                        <List
                            size="small"
                            style={{ borderRadius: 0, padding: 0 }}>
                           <List.Item style={{borderBottom:0,padding:0}}>
                                <Icon />
                                <Text>1</Text>
                            </List.Item>
                            <List.Item style={{borderBottom:0,padding:0}}>
                                <Text code style={{ fontSize: 20 }}>
                                    <Icon style={{ fontSize: 20 }} type="interaction" />
                                </Text>
                                <Text className="text-google-font" >Etkileşimler</Text>
                            </List.Item>
                            <List.Item style={{borderBottom:0}}>
                                <Text code style={{ fontSize: 20, backgroundColor: "white", color: "rgba(0, 0, 0, 0.65)" }}>
                                    <Icon style={{ fontSize: 20 }} type="star" />
                                </Text>
                                <Text className="text-google-font">Değerlendirmeler</Text>
                            </List.Item>
                            <List.Item style={{borderBottom:0}}>
                                <Text code style={{ fontSize: 20 }}>
                                    <Icon style={{ fontSize: 20 }} type="tool" />
                                </Text>
                                <Text className="text-google-font">Ayarlar</Text>
                            </List.Item>
                            <List.Item style={{borderBottom:0}}>
                                <Text code style={{ fontSize: 20 }}>
                                    <Icon style={{ fontSize: 20 }} type="history" />
                                </Text>
                                <Text className="text-google-font">Verileriniz ve hesap geçmişi</Text>
                            </List.Item>
                            <List.Item style={{borderBottom:0}}>
                                <Text code style={{ fontSize: 20 }}>
                                    <Icon style={{ fontSize: 20 }} type="code" />
                                </Text>
                                <Text className="text-google-font">Güncellemeler ve hakkında</Text>
                            </List.Item>
                        </List>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Activity_Left_Menu;