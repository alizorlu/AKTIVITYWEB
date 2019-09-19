import React, { Component } from 'react';
import "../../App.css";

import ActivityHeader_Logo_Layout from "../ActivityHeader_Logo_Layout";
import ActivityHeader_Menu_Layout from "../ActivityHeader_Menu_Layout";
import ActivityHeader_Profile_Layout from "../ActivityHeader_Profile_Layout";
import Activity_Left_Menu from "../Content/Activity_Left_Menu";

import { ConfigProvider, Affix, Layout, Col, Row } from 'antd';
import trTurkey from 'antd/es/locale/tr_TR';
import Activity_Stream_Top from './Activity_Stream_Top';
import Activity_Stream_Content from './Activity_Stream_Content';
import Activity_Favorite_Top from './Activity_Favorite_Top';

const { Header, Footer, Content } = Layout;

 class Activity_Favorite extends Component {
    render() {
        return (
            <ConfigProvider locale={trTurkey}>

            <React.Fragment>
                <Layout>
                    <Row type="flex" style={{ backgroundColor: "#F5F5F5" }}>
                        <Col span={18} style={{ backgroundColor: "#F5F5F5" }}>
                            <Header

                                style={{ backgroundColor: "white" }}>

                                <Row type="flex" justify="center" align="middle">
                                    <Col span={6} style={{ backgroundColor: "transparent", marginBottom: 15 }}>
                                        <ActivityHeader_Logo_Layout />
                                    </Col>
                                    <Col span={18} style={{ backgroundColor: "white", marginBottom: 10 }}>
                                        <ActivityHeader_Menu_Layout />
                                    </Col>
                                </Row>

                            </Header>
                            <Content style={{ backgroundColor: "#F5F5F5" }} lang="tr_TR">
                                <Row>
                                    <Col span={7}>
                                        <Activity_Left_Menu />

                                    </Col>
                                    <Col span={17} style={{ zIndex: 1, paddingLeft: 10, paddingRight: 10 }}>
                                       <Col span={24}>
                                           <Activity_Favorite_Top/>
                                       </Col>
                                    </Col>
                                </Row>
                            </Content>
                            <Footer style={{ backgroundColor: "black", color: "white" }} >
                                <div>11111111</div>
                            </Footer>
                        </Col>
                        <Col className="box" span={6} style={{ backgroundColor: "white", borderLeft: 3 }}>
                            <Affix offsetTop={0}>
                                <ActivityHeader_Profile_Layout />
                            </Affix>
                        </Col>
                    </Row>


                </Layout>

            </React.Fragment>
        </ConfigProvider>
    
        );
    }
}
export default Activity_Favorite;