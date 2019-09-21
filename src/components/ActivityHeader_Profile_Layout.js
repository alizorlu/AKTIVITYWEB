import React, { Component } from 'react'
import { Col, Row, Card, Button, Icon, Avatar, Skeleton, message } from 'antd'
import '../App.css';
import { Redirect } from 'react-router-dom';
import ProfileLayout from "./Activity_Profile_Layout";
import { GetAuthenticatedUser } from './services/GetAuthenticatedUser';

const { Meta } = Card;
const ButtonGroup = Button.Group;

class ActivityHeader_Profile_Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            loginuserdata: null
        }
        this.clearSessionAndLogOut = this.clearSessionAndLogOut.bind(this);

    }
    clearSessionAndLogOut() {
        // sessionStorage.removeItem("userdata");
        sessionStorage.clear();

        this.setState({ redirect: !this.state.redirect });
    }
    componentWillMount() {
        if (sessionStorage.getItem("userdata")) {
            // console.log(sessionStorage.getItem('userdata'));
            GetAuthenticatedUser(sessionStorage.getItem('userdata'))
                .then(data => {

                    var result = data;
                    console.clear();
                    console.log("Gelen data kontrol");
                    console.log(result.value);
                    
                    if(data.value==undefined)
                    {
                        message.warn("Hesabınız kapatıldı ya da yetkililer tarafından bloke edildi.")
                        this.setState({redirect:true});
                    }
                    else{
                        this.setState({ loginuserdata: data.value });
                    }
                    
                    // console.log(result.value);


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
        if (this.state.redirect == true) {
            return <Redirect to="/login" />
        }
        else if (this.state.redirect == false) {
            return (
                <Row type="flex" style={{ paddingRight: 10, backgroundColor: "white" }}>
                    <Col span={24} style={{ backgroundColor: "white" }}>
                        <img
                            className="profile-thumbnail-image"
                            src="https://gezipgordum.com/wp-content/uploads/2015/10/k%C4%B1z-kulesi-640x360.jpg" />

                    </Col>
                    <Col
                        span={10} 
                        
                        className="profile-avatar-info">
                        
                        
                        {
                            this.state.loginuserdata != null &&
                            (
                                <Avatar 
                                
                                    key="avatar-profile"
                                    className="profile-avatar"
                                    src={this.state.loginuserdata.profileImage} />
                            )
                        }
                        {
                            this.state.loginuserdata == null && (
                                <Skeleton loading active avatar={{ shape: 'circle' }} title={false} paragraph={false}>

                                 
                                </Skeleton>

                            )
                        }

                        <div>

                            <Button type="link">

                                {
                                    this.state.loginuserdata != null &&
                                    (
                                        <span
                                            style={{ fontWeight: "bold" }}
                                            className="text-google-font pb-most">
                                            <Icon type="check-circle" style={{ paddingRight: 2 }}
                                                theme="filled" />
                                            {this.state.loginuserdata.anonymousName}
                                        </span>
                                    )
                                }

                            </Button>
                        </div>
                    </Col>
                    <Col span={14} className="profile-info-column">
                        <span>
                            <Button className="ml-most" type="default" shape={"circle"} icon="plus" />
                            <Button className="ml-2" type="default" shape={"circle"} icon="message" />
                            <Button className="ml-2" type="default" shape={"circle"} icon="bell" />
                            <Button
                                onClick={this.clearSessionAndLogOut}
                                style={{ float: "right" }} type="danger" shape="circle">
                                <Icon type="poweroff" />
                            </Button>
                        </span>

                    </Col>
                    <Col span={24}>
                        <ProfileLayout />
                    </Col>
                </Row>
            );
        }

    }
}
export default ActivityHeader_Profile_Layout;