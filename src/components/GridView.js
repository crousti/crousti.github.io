import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import GridItem from './GridItem';

class GridView extends Component {
    render() {
        // console.log("render grid", this.state)
        return (
            <div style={{ background: '#dadada' }}>
                <Row gutter={[1, 1]} type="flex" style={{ margin: '0px' }}  >
                    {this.props.items.map(item => (
                        <Col key={item.id} xs={12} lg={6} style={{ height: '100%' }}>
                            <div style={{ height: '100%', background: 'white' }}>
                                <Link to={'/detailView/' + item.id}>
                                    <GridItem item={item} />
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default GridView;