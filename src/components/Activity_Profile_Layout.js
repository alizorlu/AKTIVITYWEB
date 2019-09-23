import React, { Component } from 'react'
import { Tabs, List, Icon, Typography, Button, Skeleton, Modal, Row, Col } from 'antd';
import { Redirect } from 'react-router-dom';

import MyActivities from "./MyProfile/Profile_MyActivity";
import AccountHistory from "./MyProfile/Profile_AccountHistory";
import MyAssessment from "./MyProfile/Profile_Assessment";
import MyInteraction from "./MyProfile/Profile_MyInteraction";
import MySettings from "./MyProfile/Profile_MySettings";
import MyNotification from "./MyProfile/Profile_MyNotification";

import '../App.css';
import { GetAuthenticatedUser } from './services/GetAuthenticatedUser';
const { Text } = Typography;
const { TabPane } = Tabs;



class Activity_Profile_Layout extends Component {


    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            loginuserdata: null,
            editingprofile: false
        }
        this.editProfileSet = this.editProfileSet.bind(this);
    this.editProfileCancel=this.editProfileCancel.bind(this);
    }

    editProfileSet() {
      
        this.setState({ editingprofile: true });
    }
    editProfileCancel(){
        this.setState({editingprofile:false});
    }
    componentWillMount() {
        if (sessionStorage.getItem("userdata")) {
            // console.log(sessionStorage.getItem('userdata'));
            GetAuthenticatedUser(sessionStorage.getItem('userdata'))
                .then(data => {

                    var result = data;
                    this.setState({ loginuserdata: data.value });
                   


                })
                .catch((error) => {

                    console.log(error);

                });
        }
        else {
            this.setState({ redirect: !this.state.redirect });
        }
    }



    render() {
        if (this.state.redirect === false) {
            return (
                <div>
                    <List
                        size="small"
                        style={{ borderRadius: 0 }}
                        header={<div className="text-google-font" style={{ marginLeft: 10 }}>

                            {
                                this.state.loginuserdata == null && (
                                    <Skeleton loading active avatar={false}
                                        title={{ width: 100 }}

                                        paragraph={false} >

                                    </Skeleton>

                                )
                            }
                            {
                                this.state.loginuserdata != null && (
                                    <div>
                                        <Icon type="user" style={{ fontSize: 20, paddingRight: 10 }} />
                                        <Text strong className="text-google-font">
                                            {this.state.loginuserdata.nameSurname}
                                        </Text>
                                    </div>

                                )
                            }

                            <Text style={{ float: "right" }}>
                                <Button
                                    onClick={this.editProfileSet}
                                    style={{ float: "right", marginTop: -20 }} className="ml-most" size={"small"} icon="edit">
                                    Düzenle
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
                                <Icon style={{ fontSize: 20 }} type="save" />
                            </Text>
                            <Text className="text-google-font">Aktivi koleksiyonlarım</Text>
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

                    <Modal
                        title="Profil bilgilerinizi düzenleyin"
                        visible={this.state.editingprofile}
                        // onOk={this.handleOk}
                        // confirmLoading={confirmLoading}
                        onCancel={this.editProfileCancel}
                       
                        okText={<div><Icon type="save" /> Değişiklikleri kaydet</div>}
                    >
                       <div>
                           <Row type={"flex"}>

                            <Col span={24}>
                               {
                                   this.state.loginuserdata!==null&&(<span>{this.state.loginuserdata.nameSurname}</span>)
                                   
                               }
                                
                            </Col>
                            <Col span={24}>PROFİL RESMİ</Col>
                           </Row>
                       </div>
                    </Modal>

                </div>
            );
        }
        else if (this.state.redirect == true) {
            return <Redirect to="/login" />
        }

    }
}
export default Activity_Profile_Layout