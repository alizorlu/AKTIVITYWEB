import React, { Component } from 'react';
import "./App.css";

import ActivityHeader_Logo_Layout from "../src/components/ActivityHeader_Logo_Layout";
import ActivityHeader_Menu_Layout  from "../src/components/ActivityHeader_Menu_Layout";
import ActivityHeader_Avatar_Layout from "../src/components/ActivityHeader_Avatar_Layout";

import { ConfigProvider, Badge, Layout, Col, Row } from 'antd';
import trTurkey from 'antd/es/locale/tr_TR';

const { Header, Footer, Content } = Layout;


class App extends Component {

  render() {
    return (
      <ConfigProvider locale={trTurkey}>

        <React.Fragment>

          <Layout>
            <Header            
            style={{ backgroundColor: "white" }}
            className="header-box-shadow"
            >

              <Row type="flex" justify="center" align="middle">
                <Col span={6} style={{ backgroundColor: "white" }}>
                        <ActivityHeader_Logo_Layout />
                </Col>
                <Col span={12} style={{ backgroundColor: "white"}}>
                   <ActivityHeader_Menu_Layout/>
                </Col>
                <Col span={6} style={{ backgroundColor: "white" }}>
                  <ActivityHeader_Avatar_Layout/>
                 </Col>
              </Row>

            </Header>
            <Content style={{ backgroundColor: "white" }} lang="tr_TR"></Content>
            <Footer style={{ backgroundColor: "white" }} ></Footer>
          </Layout>



        </React.Fragment>
      </ConfigProvider>
    );
  }
}

export default App;
