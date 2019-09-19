import React, { Component } from 'react'
import { Select, Icon, Divider, Avatar } from 'antd';
const { Option,OptGroup } = Select;

function handleChange(value,key) {
    console.log(`selected ${value} ve key ${key}`);
    console.log(key.key);
  }
class Activity_Favorite_Top extends Component {
    render() {
        return (
            <div className="box" style={{ backgroundColor: "white", paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10, marginTop: 10 }}>
                <strong>Etkinlik listelerinizi buradan yönetebilir,yeni liste oluşturabilirsiniz.</strong>
                <Select
                    size={"large"}
                    defaultValue="lucy"
                    className="mt-most"
                    style={{ width: "100%" }}
                    dropdownRender={menu => (
                        <div>
                            {menu}
                            <Divider style={{ margin: '10px 10px' }} />
                            <div style={{ padding: '10px', cursor: 'pointer' }}>
                                <Icon type="plus" /> Yeni bir etkinlik listesi oluşturun
                         </div>
                        </div>
                    )}
                    onChange={handleChange}
                >
                    <OptGroup label="Aktivinin liste önerisi">
                        <Option value="jack" key="1">Jack</Option>
                        <Option value="lucy" key="2">Lucy</Option>
                    </OptGroup>
                    <OptGroup label="Sizin listeleriniz">
                        <Option value="Yiminghe" key="3">yiminghe</Option>
                    </OptGroup>
                </Select>

            </div>
        )
    }
}
export default Activity_Favorite_Top;