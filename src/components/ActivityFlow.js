import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';
import '../App.css';
const { Meta } = Card;



class ActivityFlow extends Component {
    render() {
        return (
            <React.Fragment>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>   
                 </React.Fragment>
        );
    }

}

export default ActivityFlow;
