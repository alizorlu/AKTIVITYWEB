import React, { Component } from 'react'
import { Row, Layout, Col, Tooltip, Form, Icon, Input, Button, Checkbox, Affix, Divider, Result, Spin } from 'antd'
import "../App.css";
import { Redirect } from 'react-router-dom';
import { AuthUser } from './services/AuthUser';
import { message } from 'antd';
import { GetAuthenticatedUser } from './services/GetAuthenticatedUser';

const { Header, Footer, Content } = Layout;
class Activity_Login extends Component {

   constructor(props){
       super(props);
       this.state={
           username:'',
           password:'',
           redirect:false,
           sendlogin:false,
       }
       this.login=this.login.bind(this);
       this.onChange=this.onChange.bind(this);
   }
   
   errorMessage(){
       message.error("Lütfen kullanıcı adınızı ve şifrenizi kimlik tanımamız için giriniz.")
   }
   errorSetMessage(param){
       message.error(<h4>Bir şeyler yanlış gitti.Galiba yanlış bir kimlik bilgisi girdin...<strong>Hata mesajın:<u>{param}</u></strong></h4>);
     
    }
   
   onChange(e){
       this.setState({[e.target.name]:e.target.value});
    // console.log(e.target.value);
   }
   login(){
    //    console.log('user:'+this.state.username+'\npass:'+this.state.password)
   if(this.state.username.length>3&&this.state.password.length>3)
   {
    this.setState({sendlogin:true});  
    AuthUser("auth/login",this.state)
    .then((result)=>{

      
        let responseJson=result;
        // console.log("YANIT:"+result);
        // GetAuthenticatedUser(result);
        if (result!=""&&result!="Not identitified user") {
            sessionStorage.setItem('userdata',result);
            GetAuthenticatedUser(sessionStorage.getItem('userdata'))
            .then((data)=>{
                if(data.value)
                {
                    sessionStorage.setItem('userprofile',JSON.stringify(data.value));
                }
                // console.log(data.value);
                
            })
            .catch((error)=>{
                console.log(error);
                
            });
            this.setState({redirect:true});
        }
        else{
            this.setState({sendlogin:false});
            this.errorSetMessage(result);
        }
    });
   }
   else{
       this.errorMessage();
   }
    
}
    render() {
        if (this.state.redirect) {
            return <Redirect to='/'></Redirect>
        }
        return (
            <div>
                <Row type="flex">

                    <Col span={12}>

                        <Col span={24} className="page-login-logo-col" style={{ paddingRight: 50, paddingLeft: 50 }}>

                            <img style={{ width: 35, height: 35 }} src="https://image.flaticon.com/icons/svg/414/414246.svg" />
                            <span className="logo-text" >AKTIVITY</span>
                            <Divider style={{ width: 100 }} />

                           <Spin spinning={this.state.sendlogin}>
                           <div className="page-login-screen">
                                <Icon type="safety-certificate" />
                                <span className="ml-2 text-google-font">

                                    Kimlik doğrulama işlemi yapalım.
                                </span>
                                <Divider style={{ width: 100 }} />
                                <Form layout="vertical">
                                    <Form.Item label="Kullanıcı adı/Email/Telefon">
                                        <Input
                                            onChange={this.onChange}
                                           name="username"
                                            placeholder="Kullanıcı adı/email ya da telefon no"
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            suffix={
                                                <Tooltip title="Giriş seçenecekleriniz">
                                                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                                </Tooltip>
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item label="Şifrenizi giriniz">
                                        <Input.Password 
                                            name="password"
                                            onChange={this.onChange}
                                            placeholder="Şifrenizi giriniz"
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            suffix={
                                                <Tooltip title="Extra information">
                                                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                                </Tooltip>
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            type="link" style={{ float: "left" }}>
                                            Fast login'i deneyin!
                                        </Button>
                                        <Button block
                                            onClick={this.login}
                                            type="primary">
                                            Giriş yapınız
                                        </Button>

                                    </Form.Item>
                                </Form>


                            </div>

                          
                           </Spin>
                          
                        </Col>
                        <Col span={24} style={{bottom:0,position:"absolute"}}>
                            <Footer style={{backgroundColor:"white"}}>
                                <div>
                                    <a target="_blank" href="/information/aboutus" className="ml-1">Hakkında</a>
                                     <Divider type="vertical" />
                                    <a target="_blank" href="/information/privacy">Gizlilik politikası</a>
                                     <Divider type="vertical" />
                                    <a target="_blank" href="/information/cookies">Çerezler</a>
                                     <Divider type="vertical" />
                                    <a target="_blank" href="/information/advertisement">Reklam ve işletme</a>
                                     <Divider type="vertical" />
                                   <a target="_blank" href="/information/contact">İletişim</a>
                                    <Divider type="vertical" />
                                   <a target="_blank" href="/information/tos" className="ml-1">Hizmet şartları</a>
                                    
                                </div>
                                <Divider/>
                                <div>
                                    2019 @ PreTechLab  
                                    <img
                                    style={{float:"right",width:140,height:55}}
                                    src="https://play.google.com/intl/en_us/badges/images/generic/tr_badge_web_generic.png"
                                    />
                                </div>
                            </Footer>
                        </Col>


                    </Col>
                    <Col span={12}>
                        <div className="page-login-thumbnail-text text-google-font">
                                            Balıklıgöl'ün, balıklarıyla gezelim;Şanlıurfa'yı.
                        </div>
                        <img className="page-login-image" src="https://www.sanliurfa.bel.tr/upload/22288-64258.jpg" />
                    </Col>

                </Row>
            </div>
        )
    }
}
export default Activity_Login;