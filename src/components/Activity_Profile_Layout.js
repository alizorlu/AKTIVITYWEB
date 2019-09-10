import React, { Component } from 'react'
import { Tabs } from 'antd';

import MyActivities from "./MyProfile/Profile_MyActivity";
import AccountHistory from "./MyProfile/Profile_AccountHistory";
import MyAssessment from "./MyProfile/Profile_Assessment";
import MyInteraction from "./MyProfile/Profile_MyInteraction";
import MySettings from "./MyProfile/Profile_MySettings";
import MyNotification from "./MyProfile/Profile_MyNotification";

import '../App.css';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }
  
  

class Activity_Profile_Layout extends Component {
    render() {
        return (
            <div>
                <Tabs 
                size={"large"}
                className="text-google-font" defaultActiveKey="1" onChange={callback}>
                    <TabPane  tab="Aktiviteler" key="1">
                        <MyActivities/>
                    </TabPane>
                    <TabPane tab="Etkileşimler" key="2">
                       <MyInteraction/>
                    </TabPane>
                    <TabPane tab="Değerlendirme" key="6">
                       <MyAssessment/>
                    </TabPane>
                    <TabPane tab="Bildirimler" key="3">
                       <MyNotification/>
                    </TabPane>
                    <TabPane tab="Ayarlar" key="4">
                        <MySettings/>
                    </TabPane>
                    <TabPane tab="Hesap Geçmişiniz" key="5">
                        <AccountHistory/>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
export default Activity_Profile_Layout