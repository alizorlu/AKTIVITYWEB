import React, { Component } from 'react'
import { Menu,Avatar,Divider,Button , Badge, Icon } from 'antd'
import '../App.css';
 class ActivityHeader_Avatar_Layout extends Component {
    render() {
        return (
            <div style={{flexDirection:"column",display:"row",justifyContent:'center',alignItems:'center',verticalAlign:'middle',marginTop:10}}>
                
                <Divider type="vertical" />

                <Button shape="circle" color="red"  icon="search"></Button>


                 <Avatar 
                 src="https://avatars1.githubusercontent.com/u/24724027?s=400&v=4" />
            </div>
        );
    }
}
export default ActivityHeader_Avatar_Layout;