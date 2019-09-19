import React, { Component } from 'react'
import { Card, Icon,Mentions, Col, Row, Avatar, Button } from 'antd'

class Activity_Stream_Content extends Component {
    render() {
        return (
            <div>

                <div>
                    <Card
                        style={{ marginTop: 16 }}
                        type="inner"
                        title={
                            <div>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <span className="fw-bold text-google-font ml-most">Ali Zorlu</span>
                            </div>
                        }
                        extra={<a href="#">More</a>}>
                        <span>
                            Sizi,

                        </span>
                     </Card>


                </div>
            </div>
        )
    }
}
export default Activity_Stream_Content;