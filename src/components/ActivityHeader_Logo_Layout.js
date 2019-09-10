
import React, { Component } from 'react';
import { Badge, Skeleton,Spin } from 'antd';
import '../App.css';






class ActivityHeader_Logo_Layout extends Component {

    state = {
        loading: false,
    };

    showSkeleton = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    };

    componentDidMount() {
        this.showSkeleton();
    }
    render() {
        return (

            <div>
                {this.state.loading == true ? (
                    // <Skeleton 
                    // width={10120}
                    // active={true}
                    // loading={this.state.loading} 
                    // paragraph={{ rows:1 }}></Skeleton>
                    <Spin />
                ) : (

                        <div>
                            <img style={{ width: 40, height: 40 }} src="https://image.flaticon.com/icons/svg/414/414246.svg" />
                            <span className="logo-text" >AKTIVITY
                    <Badge count={1.01} title="Aktivity version">
                                    {/* <span className="top-example" /> */}
                                    TR
                                </Badge>
                            </span></div>
                    )}


            </div>
        );
    }
}
export default ActivityHeader_Logo_Layout