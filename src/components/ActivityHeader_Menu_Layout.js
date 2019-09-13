
import React, { Component } from 'react'
import { Menu, Badge, Icon } from 'antd'
import '../App.css';

class ActivityHeader_Menu_Layout extends Component {
    render() {
        return (
            <div  style={{flexDirection:"column",display:"row",justifyContent:'center',alignItems:'center',verticalAlign:'middle',marginTop:10}}>
                <Menu
                    mode="horizontal"
                   className="border-none"
                    >
                    <Menu.Item key="home" color="#F5F5F5">
                        <Icon type="home" />
                        <span className="text-google-font">
                        Ana Sayfa
                        </span>
                    </Menu.Item>
                    <Menu.Item key="fire">
                        <Icon type="fire" />
                        <span className="text-google-font">
                        Akış
                        </span>
                    </Menu.Item>
                    <Menu.Item key="user-add">
                        <Icon type="search" />
                        <span className="text-google-font">
                        Etkinliğe Katıl
                        </span>
                    </Menu.Item>
                    <Menu.Item key="trends">
                        <Icon type="heart" />
                        <span className="text-google-font">
                        Trendler
                        </span>
                    </Menu.Item>
                    <Menu.Item key="contacts">
                        <Icon type="contacts" />
                        <span className="text-google-font">
                            Takvim
                            </span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default ActivityHeader_Menu_Layout;
