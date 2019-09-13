import React, { Component } from 'react'
import {
    Row, Menu, Avatar, Badge, Dropdown
    , Tabs, Card, Button, Icon, Col
    , Typography, Divider, Popover
    , Drawer
} from 'antd'

import "../../App.css";

import Activity_Content_Top_Search from "./Activity_Content_Top_Search";

const { Meta } = Card;
const { Paragraph, Text } = Typography;
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="0">Ölmeden önce yapılacaklar</Menu.Item>
        <Menu.Item key="1">Temmuz ayında yapacaklarım</Menu.Item>
        <Menu.Item key="2">Yapmayı düşündüklerim</Menu.Item>
    </Menu>
);
function handleMenuClick(e) {
    console.log('click', e);
}




class Activity_Content extends Component {
    state = {
        activiDrawerVisible: false,
        acitiviProfileDrawerVisible:false,
    };
    activiDrawerShow = () => {
        this.setState({
            activiDrawerVisible: true,
        });
    };
    activiDrawerClose = () => {
        this.setState({
            activiDrawerVisible: false,
        });
    };
    acitiviProfileDrawerShow = () => {
        this.setState({
            acitiviProfileDrawerVisible: true,
        });
    };
    acitiviProfileDrawerClose = () => {
        this.setState({
            acitiviProfileDrawerVisible: false,
        });
    };

    render() {
        return (
            <div style={{ marginBottom: 100 }}>
                <Row type={"flex"}>
                    <Col span={24}>
                        <Activity_Content_Top_Search />
                    </Col>
                    <Col span={24}>
                        <div
                            className="box"
                            style={{ backgroundColor: "white", paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0, marginTop: 10 }}>
                            <Row type={"flex"}>
                                <Col span={24} style={{ backgroundColor: "rgba(229, 229, 229,.4)", paddingLeft: 10, paddingTop: 20, justifyContent: "start", alignContent: "start", textAlign: "left" }}>
                                    <div>


                                        <Icon className="mr-2" style={{ fontSize: 16 }} theme="twoTone" twoToneColor="#7ecfc0" type="eye" />
                                        <span className="text-google-font" style={{ fontSize: 16 }}>
                                            2.500 kez
                                        </span>
                                        <Divider type="vertical" />
                                        <Icon className="mr-2" style={{ fontSize: 16 }} theme="twoTone" twoToneColor="#fa5477" type="thunderbolt" />
                                        <span className="text-google-font" style={{ fontSize: 16 }}>
                                            25-35 yaş
                                        </span>
                                        <Divider type="vertical" />

                                        <Popover content={
                                            <div>
                                                Görüntüleme,katılma ve zaman sıklığına göre %56 oranında erkek kitlesi yoğunlaşmıştır
                                                </div>
                                        } title="Title"
                                            trigger="click"
                                        >
                                            <Button className="text-google-font" style={{ fontSize: 17.5, color: "#5f5f5f" }} type="link">
                                                👨 %56
                                             </Button>
                                        </Popover>

                                        <Divider type="vertical" />
                                        <Popover content={
                                            <div>
                                                Görüntüleme,katılma ve zaman sıklığına göre %44 oranında kadın kitlesi yoğunlaşmıştır
                                                </div>
                                        } title="Title"
                                            trigger="click"
                                        >
                                            <Button className="text-google-font" style={{ fontSize: 17.5, color: "#5f5f5f" }} type="link">
                                                %44 👩
                                             </Button>
                                        </Popover>
                                        <Button style={{ float: "right" }} type={"link"}>
                                            <Icon style={{ color: "#FF7875", fontSize: 20 }} type="warning" />
                                        </Button>
                                    </div>
                                    <Divider style={{ marginBottom: 0, paddingBottom: 0 }} dashed={true} />
                                </Col>
                                <Col span={10}>
                                    <img
                                        className="aktiviti-boxitem"
                                        src="https://iasbh.tmgrup.com.tr/a4f7f6/752/395/0/86/1165/697?u=https://isbh.tmgrup.com.tr/sbh/2018/01/26/ziyaretci-rekoru-mevlana-muzesinde-1516945357744.jpeg" />
                                </Col>
                                <Col span={14}>
                                    <Row type={"flex"}>
                                        <Col span={24} style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 15 }}>
                                            <Avatar
                                                src="https://avatars0.githubusercontent.com/u/24724027" />
                                            <Button type="link" className="mt-2">

                                                <span
                                                    style={{ fontWeight: "bold" }}
                                                    className="text-google-font pb-most">
                                                    <Icon type="check-circle" style={{ paddingRight: 2 }} theme="filled" />
                                                    azorlua
                                                </span>
                                            </Button>
                                            <Divider type="vertical" />
                                            <Badge status="processing" text="Yeni aktiviti" />
                                            <Divider type="vertical" />
                                            <Text className="text-google-font color-success"> Ücretsiz

                                            </Text>
                                            <Divider type="vertical" />

                                        </Col>
                                        <Col span={24} style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 15 }}>
                                            <Text className="text-google-font fw-500">
                                                Konya'da Bungee Jumping'in Tadına Varacaksınız !
                                            </Text>
                                            <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24} style={{ backgroundColor: "rgba(229, 229, 229,.4)", paddingLeft: 20, paddingTop: 8, paddingBottom: 8, paddingRight: 20, justifyContent: "start", alignContent: "start", textAlign: "left" }}>

                                    <div>

                                        <Button type="default" onClick={this.activiDrawerShow}>
                                            <span className="color-primary">
                                                <Icon type="eye" /> İncele
                                            </span>
                                        </Button>
                                        <Divider type="vertical" />
                                        <Dropdown overlay={menu}>
                                            <Button>
                                                <span className="color-danger">
                                                    Şuraya ekle <Icon type="down" />
                                                </span>
                                            </Button>
                                        </Dropdown>
                                        <Divider type="vertical" />
                                        <Button type="default">
                                            <span className="color-success">
                                                <Icon type="plus-circle" /> Aktivitiye katıl
                                            </span>
                                        </Button>
                                        <Divider type="vertical" />
                                        <span className="color-danger" style={{ float: "right" }}>
                                            <Icon type="clock-circle" twoToneColor="#fa5477" theme="twoTone" /> 3 gün sonra başlayacak
                                            </span>
                                    </div>

                                </Col>
                                <Drawer
                                    title={
                                        <div>
                                            <Text className="text-google-font fw-500">
                                                Konya'da Bungee Jumping'in Tadına Varacaksınız !
                                        </Text>
                                            <Button type="link"
                                            onClick={this.acitiviProfileDrawerShow}
                                            style={{float:"right"}} className="mt-2">
                                            <Avatar
                                                className="mr-2"
                                                src="https://avatars0.githubusercontent.com/u/24724027" />
                                                <span
                                                    style={{ fontWeight: "bold" }}
                                                    className="text-google-font pb-most">
                                                    <Icon type="check-circle" style={{ paddingRight: 2 }} theme="filled" />
                                                    azorlua
                                                </span>
                                            </Button>
                                        </div>

                                    }
                                    width={650}
                                    placement="right"
                                    closable={false}
                                    visible={this.state.activiDrawerVisible}
                                    onClose={this.activiDrawerClose}>
                                    <p>SSSS</p>
                                                                <Drawer
                                                                width={650}
                                                                placement={"right"}
                                                                closable={false}
                                                                visible={this.state.acitiviProfileDrawerVisible}
                                                                onClose={this.acitiviProfileDrawerClose}
                                                                >
                                                                        <p>PROFİL</p>
                                                                </Drawer>
                                </Drawer>

                            </Row>
                        </div>

                    </Col>
                </Row>
            </div>
        )
    }
}
export default Activity_Content;
