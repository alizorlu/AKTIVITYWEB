import React, { Component } from 'react'
import { Tabs, List, Icon, Typography, Button } from 'antd';

import MyActivities from "./MyProfile/Profile_MyActivity";
import AccountHistory from "./MyProfile/Profile_AccountHistory";
import MyAssessment from "./MyProfile/Profile_Assessment";
import MyInteraction from "./MyProfile/Profile_MyInteraction";
import MySettings from "./MyProfile/Profile_MySettings";
import MyNotification from "./MyProfile/Profile_MyNotification";

import '../App.css';
const { Text } = Typography;
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}



class Activity_Profile_Layout extends Component {
    render() {
        return (
            <div>
                {/* <Tabs
                    size={"large"}
                    className="text-google-font" defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Aktiviteler" key="1">
                        <MyActivities />
                    </TabPane>
                    <TabPane tab="Etkileşimler" key="2">
                        <MyInteraction />
                    </TabPane>
                    <TabPane tab="Değerlendirme" key="6">
                        <MyAssessment />
                    </TabPane>
                    <TabPane tab="Bildirimler" key="3">
                        <MyNotification />
                    </TabPane>
                    <TabPane tab="Ayarlar" key="4">
                        <MySettings />
                    </TabPane>
                    <TabPane tab="Hesap Geçmişiniz" key="5">
                        <AccountHistory />
                    </TabPane>
                </Tabs> */}
                <List
                    size="small"
                    style={{ borderRadius: 0 }}
                    header={<div className="text-google-font" style={{ marginLeft: 10 }}>
                        <Icon type="user" style={{ fontSize: 20, paddingRight: 10 }} />
                        <Text strong className="text-google-font"> Ali Zorlu</Text>
                        <Text style={{ float: "right" }}>
                            <Button style={{ float: "right" }} className="ml-most" size={"small"} icon="edit">
                                Profilini düzenle
                         </Button>

                        </Text>
                    </div>} bordered>
                    <List.Item>
                        <Text code style={{ fontSize: 20 }}>
                            <Icon style={{ fontSize: 20 }} type="thunderbolt" />
                        </Text>
                        <Text className="text-google-font">Aktivitilerim</Text>
                    </List.Item>
                    <List.Item>
                        <Text code style={{ fontSize: 20 }}>
                            <Icon style={{ fontSize: 20 }} type="interaction" />
                        </Text>
                        <Text className="text-google-font" >Etkileşimler</Text>
                    </List.Item>
                    <List.Item>
                        <Text code style={{ fontSize: 20, backgroundColor: "white", color: "rgba(0, 0, 0, 0.65)" }}>
                            <Icon style={{ fontSize: 20 }} type="star" />
                        </Text>
                        <Text className="text-google-font">Değerlendirmeler</Text>
                    </List.Item>
                    <List.Item>
                        <Text code style={{ fontSize: 20 }}>
                            <Icon style={{ fontSize: 20 }} type="tool" />
                        </Text>
                        <Text className="text-google-font">Ayarlar</Text>
                    </List.Item>
                    <List.Item>
                        <Text code style={{ fontSize: 20 }}>
                            <Icon style={{ fontSize: 20 }} type="history" />
                        </Text>
                        <Text className="text-google-font">Verileriniz ve hesap geçmişi</Text>
                    </List.Item>
                    <List.Item>
                        <Text code style={{ fontSize: 20 }}>
                            <Icon style={{ fontSize: 20 }} type="code" />
                        </Text>
                        <Text className="text-google-font">Güncellemeler ve hakkında</Text>
                    </List.Item>
                </List>
            </div>
        );
    }
}
export default Activity_Profile_Layout