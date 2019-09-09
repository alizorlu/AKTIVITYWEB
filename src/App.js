import React, { Component } from 'react';
import "./App.css";

import ActivityHeader_Logo_Layout from "../src/components/ActivityHeader_Logo_Layout";
import ActivityHeader_Menu_Layout from "../src/components/ActivityHeader_Menu_Layout";
import ActivityHeader_Profile_Layout from "./components/ActivityHeader_Profile_Layout";

import { ConfigProvider, Badge, Layout, Col, Row } from 'antd';
import trTurkey from 'antd/es/locale/tr_TR';
import Sider from 'antd/lib/layout/Sider';

const { Header, Footer, Content } = Layout;


class App extends Component {

  render() {
    return (
      <ConfigProvider locale={trTurkey}>

        <React.Fragment>
          <Layout>
            <Row type="flex" style={{ backgroundColor: "white" }}>
              <Col span={18} style={{ backgroundColor: "white" }}>
                <Header
                  style={{ backgroundColor: "white" }}>

                  <Row type="flex" justify="center" align="middle">
                    <Col

                      span={6} style={{ backgroundColor: "white" }}>
                      <ActivityHeader_Logo_Layout />
                    </Col>
                    <Col span={18} style={{ backgroundColor: "white" }}>
                      <ActivityHeader_Menu_Layout />
                    </Col>
                  </Row>

                </Header>
                <Content style={{ backgroundColor: "red" }} lang="tr_TR">


                </Content>
                <Footer style={{ backgroundColor: "white" }} ></Footer>
              </Col>
              <Col span={6} style={{ backgroundColor: "white" }}>
                <ActivityHeader_Profile_Layout />
              </Col>
            </Row>


          </Layout>

        </React.Fragment>
      </ConfigProvider>
    );
  }
}

export default App;
