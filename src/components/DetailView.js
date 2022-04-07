import React, { Component } from 'react';

import { Table, Row, Col, Carousel, Divider } from 'antd';

const columns = [
    {
        title: '',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '',
        dataIndex: 'value',
        key: 'value',
    },
];

function onChange(a, b, c) {
    console.log(a, b, c);
}



class DetailView extends Component {
    constructor(props) {
        super(props);
        require('./less/DetailView.less');
    }
    render() {
        const { item } = this.props;
        return (
            <div style={{ background: 'white', padding: '16px' }}>
                <Row gutter={0} type="flex" justify="start" align="top" style={{ margin: '0px' }}>
                    <Col xs={24} lg={12}>
                        <Carousel afterChange={onChange}>
                            {item.images.map((image, index) =>
                                <div key={index}>
                                    <img src={image + '?preset=large'} style={{ width: '100%', height: 'auto' }} alt="" />
                                </div>
                            )}
                        </Carousel>
                    </Col>
                    <Col xs={24} lg={12}>
                        <br></br>
                        <h1 style={{ fontSize: '35px', lineHeight: '35px' }}>{item.title}</h1>
                        <p style={{ fontSize: '16px', lineHeight: '22px' }}>{item.description}</p>
                        <h1 className="price">{item.price} €</h1>
                        <Divider />
                        <h3>Caractéristiques techniques</h3>
                        <Table dataSource={item.features} columns={columns} size="middle" pagination={false} showHeader={false} />
                    </Col>
                </Row>
            </div>

        );
    }
}

export default DetailView;