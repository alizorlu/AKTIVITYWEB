
import React, { Component } from 'react'
import {
    Form, Typography
    , Icon, Drawer, TreeSelect, Input, Button
    , AutoComplete, PageHeader, DatePicker, Radio
} from 'antd';


const { Option } = AutoComplete;
const { SHOW_PARENT } = TreeSelect;
const { Text } = Typography;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const treeData = [
    {
        title: 'aaa',
        value: '0-0',
        key: '0-0',
        children:[
            {
                title:"etiket1",
                value:"Etiket-2",
                key:"key2"
            },
            {
                title:"etiket2",
                value:"Etiket-3",
                key:"key3"
            }
        ]
    },
    {
        title: 'Kapalı Sporlar',
        value: '0-1',
        key: '0-1'
    },
    {
        title: 'Gezi,Tur,Kamp',
        value: '0-2',
        key: '0-2'
    },
    {
        title: 'Diğer',
        value: '0-3',
        key: '0-3'
    },
];

//   const tProps = {
//     treeData,
//     value: this.state.value,
//     onChange: this.onChange,
//     treeCheckable: true,
//     showCheckedStrategy: SHOW_PARENT,
//     searchPlaceholder: 'Please select',
//     style: {
//       width: 300,
//     },
//   };



function onSelect(value) {
    console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
    return new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((item, idx) => ({
            query,
            category: `${query}${idx}`,
            count: getRandomInt(200, 100),
        }));
}

function renderOption(item) {
    return (
        <Option key={item.category} text={item.category}>
            <div className="global-search-item">
                <span className="global-search-item-desc">
                    Found {item.query} on
          <a
                        href={`https://s.taobao.com/search?q=${item.query}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.category}
                    </a>
                </span>
                <span className="global-search-item-count">{item.count} results</span>
            </div>
        </Option>
    );
}
class Activity_Content_Top_Search extends Component {


    state = {
        dataSource: [],
        visible: false,
        value: ['0-0-0']
    };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    handleSearch = value => {
        this.setState({
            dataSource: value ? searchResult(value) : [],
        });
    };
    onChange = value => {
        console.log('onChange ', value);
        this.setState({ value });
    };
    render() {
        const { dataSource } = this.state;
        return (
            <div style={{ backgroundColor: "white", paddingLeft: 20, paddingRight: 20, paddingBottom: 20, paddingTop: 20, borderRadius: 10, marginTop: 10 }}>
                <AutoComplete
                    className="global-search"
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={dataSource.map(renderOption)}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    optionLabelProp="text">
                    <Input
                        onTouchStart={20}
                        placeholder="Bungee jumping ankara,Safranbolu gezi"
                        prefix={
                            <Icon type="search" />
                        }
                        suffix={
                            <Button onClick={this.showDrawer}
                                type="link">
                                <Icon style={{ color: "#5F5F5F", fontSize: 20 }} type="filter" />
                            </Button>
                        }
                    />
                </AutoComplete>

                <Drawer
                    style={{ margin: 0, padding: 0 }}
                    title={
                        <div>
                            <Icon style={{ color: "#5F5F5F", fontSize: 20 }} type="filter" />
                            <span className="text-google-font ml-2" style={{ fontSize: 20 }}>Etkinlik arama kriterleri</span>
                            <br />
                            <small className="text-google-font ml-most ml-2" style={{ fontWeight: "lighter" }}>
                                Dilediğin kriterlerde etkinlikleri ara
                            </small>
                        </div>

                    }
                    placement="right"
                    width={720}
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Form layout="vertical">
                        <Form.Item labelAlign="right" label={<Text className="fw-bolder">Etkinlik kategoriniz</Text>}>
                            <TreeSelect

                                treeData={treeData}
                                onChange={this.onChange}
                                treeCheckable={true}
                                showCheckedStrategy='SHOW_ALL'
                                searchPlaceholder='Etkinlik kategorinizi seçiniz'

                            />
                        </Form.Item>
                        <Form.Item label={
                            <div>

                                <Icon type="clock-circle" />
                                <Text className="ml-2 mr-2 fw-bolder">Etkinliğimi belli bir</Text>
                                <Radio.Group size="small">
                                    <Radio.Button value="large">Günde</Radio.Button>
                                    <Radio.Button value="default">Haftada</Radio.Button>
                                    <Radio.Button value="small">Ayda</Radio.Button>
                                </Radio.Group>
                                <Text className="ml-2 fw-bolder"> planlıyorum</Text>
                            </div>

                        }>
                            {/* <Form layout="vertical">
                                <Form.Item>
                                    <DatePicker placeholder="Belli bir gün" />
                                </Form.Item>
                                <Form.Item label="Ayda">
                                    <MonthPicker placeholder="Select month" />
                                </Form.Item>
                                <Form.Item label="Haftada">
                                    <Button>3</Button>
                                </Form.Item>
                            </Form> */}
                        </Form.Item>
                    </Form>

                </Drawer>

            </div>
        )
    }
}
export default Activity_Content_Top_Search;
