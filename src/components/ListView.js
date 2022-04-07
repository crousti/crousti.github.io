import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Tag, Button, Icon, Divider, InputNumber, Spin } from 'antd';
import Img from 'react-image';

class ListView extends Component {
    constructor(props) {
        super(props);
        require('./less/ListView.less');
    }
    render() {
        // console.log("render grid", this.state)
        return (
            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', background: '#dadada' }}>
                {this.props.items.map(item => (
                    <div key={item.id} style={{ marginBottom: '1px', background: 'white', padding: '10px 0' }}>
                        <Row gutter={24} style={{ margin: '0px' }}>
                            <Col xs={9} lg={7}>
                                <Img
                                    src={[item.images[0] + '?preset=large']}
                                    style={{ width: '100%', height: 'auto' }}
                                    loader={<div style={{ textAlign: 'center', marginTop: '50px' }}><Spin /><br></br>Chargement...</div>}
                                />
                            </Col>
                            <Col xs={15} lg={17}>
                                <h2>{item.title}</h2>
                                <h3 className="price">{item.price} €</h3>
                                <h4 style={{ color: "#757575" }}>EAN : {item.ean}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Réf : {item.reference}</h4>
                                <p>{item.description}</p>
                                <div style={{ marginBottom: '18px' }}>
                                    <Tag color="#108ee9">A+++ -20%</Tag>
                                    <Tag color="#108ee9">Led</Tag>
                                    <Tag color="#108ee9">NoFrost</Tag>
                                </div>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} lg={12}>
                                        <Button>Ajouter à la liste <Icon type="down" /></Button>
                                    </Col>
                                    <Col xs={24} lg={12}>
                                        <InputNumber min={1} defaultValue={1} style={{ width: '66px' }} />
                                        <Button style={{ marginLeft: '5px' }}><Icon type="cart" /> Ajouter au panier</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        );
    }
}

export default ListView;