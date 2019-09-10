import React, { Component } from 'react';
import "./App.css";

import ActivityHeader_Logo_Layout from "../src/components/ActivityHeader_Logo_Layout";
import ActivityHeader_Menu_Layout from "../src/components/ActivityHeader_Menu_Layout";
import ActivityHeader_Profile_Layout from "./components/ActivityHeader_Profile_Layout";
import Activity_Content from "./components/Content/Activity_Content";
import { ConfigProvider, Affix, Layout, Col, Row } from 'antd';
import trTurkey from 'antd/es/locale/tr_TR';
import Sider from 'antd/lib/layout/Sider';

const { Header, Footer, Content } = Layout;


class App extends Component {

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
                    <Col

                      span={6} style={{ backgroundColor: "white" }}>
                      <ActivityHeader_Logo_Layout />
                    </Col>
                    <Col span={18} style={{ backgroundColor: "white" }}>
                      <ActivityHeader_Menu_Layout />
                    </Col>
                  </Row>

                </Header>
                <Content style={{ backgroundColor: "#F5F5F5" }} lang="tr_TR">
                     <Activity_Content/>
                </Content>
                <Footer style={{ backgroundColor: "#F5F5F5" }} >
                  <div>11111111</div>
                </Footer>
              </Col>
              <Col span={6} style={{ backgroundColor: "white", borderLeft: 3, borderColor: "red" }}>
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

export default App;
