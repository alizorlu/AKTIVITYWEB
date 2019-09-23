import React, { Component } from 'react'
import {
    Row, Col
} from 'antd'
import Activity_Content_Top_Search from "./Activity_Content_Top_Search";
import Activity_Content_Partial from "./Activity_Content_Partial";
import "../../App.css";
import { Redirect } from 'react-router-dom';
import { Last100Activity } from '../services/Last100Activity';


function setLastActivity(props){
    
    
    return(<span>{props.id}</span>);
}

class Activity_Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false,
          last100activity:[]
        }
        this.getLastActivity=this.getLastActivity.bind(this);
      }
    getLastActivity(){
       
        return this.state.last100activity.map(item=>{
            let data=(setLastActivity(item));            
    });
        
    }
    
    componentWillMount() {
        if(sessionStorage.getItem("userdata"))
        {
          // console.log(sessionStorage.getItem('userdata'));
          Last100Activity(sessionStorage.getItem('userdata'))
          .then((data)=>{
            let result=data;
            if(data!="Error")
            {
                this.setState({last100activity:data});
                this.getLastActivity()
            }
            
          
            
            
          })
          .catch((error)=>{});
          
        }
        else{
          this.setState({redirect:true});
        }
      }
    render() {

        if (this.state.redirect==false) {
            return (
                <div style={{ marginBottom: 100 }}>
                    <Row type={"flex"}>
                        <Col span={24}>
                            <Activity_Content_Top_Search />
                        </Col>
                        <Col span={24}>
                           {
                               this.state.last100activity!=null&&(
                                this.state.last100activity.map(item=>{
                                    //   return (setLastActivity(item))
                                    return( <Activity_Content_Partial/>)
                                   }))
                               
                           }
                           {
                               this.state.last100activity===null&&(
                               <span>Admin-moderatör yetkisi olduğu için içerikler listelenmiyor olabilir.</span>
                               
                               )
                           }
                                                       
                        </Col>
                    </Row>
                </div>
            )
        }
        else if(this.state.redirect==true)
        {
            return <Redirect to="/login"/>
        }
      
    }
}
export default Activity_Content;
