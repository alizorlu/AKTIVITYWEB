import React, { Component } from 'react'
import { Row, Menu, Avatar, Badge, Dropdown, Tabs, Card, Button, Icon, Col, Typography, Divider, Popover } from 'antd'

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

                                        <Button type="default">
                                            <span className="color-primary">
                                                <Icon type="right" /> İncele
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
                                        <Divider type="vertical"/>
                                        <span className="color-danger" style={{float:"right"}}>
                                          <Icon type="clock-circle" twoToneColor="#fa5477" theme="twoTone" /> 3 gün sonra başlayacak
                                            </span>
                                    </div>

                                </Col>
                            </Row>
                        </div>
                        <div
                            className="box"
                            style={{ backgroundColor: "white", paddingLeft: 2, paddingRight: 2, paddingBottom: 0, paddingTop: 2, marginTop: 10 }}>
                            <Row type={"flex"}>
                                <Col span={24} style={{ paddingLeft: 10, paddingTop: 20, justifyContent: "start", alignContent: "start", textAlign: "left" }}>
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
                                        src="http://i2.hurimg.com/i/hurriyet/75/590x332/5916fc5ceb10bb1c484f7619.jpg" />
                                </Col>
                                <Col span={14}>

                                </Col>
                            </Row>
                        </div>
                        <div
                            className="box"
                            style={{ backgroundColor: "white", paddingLeft: 2, paddingRight: 2, paddingBottom: 0, paddingTop: 2, marginTop: 10 }}>
                            <Row type={"flex"}>
                                <Col span={24} style={{ paddingLeft: 10, paddingTop: 20, justifyContent: "start", alignContent: "start", textAlign: "left" }}>
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
                                <Col span={9}>
                                    <img
                                        className="aktiviti-boxitem"
                                        src="data:image/jpeg;base64,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" />
                                </Col>
                                <Col span={15}>
                                    A
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Activity_Content;
