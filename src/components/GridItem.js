import React, { Component } from 'react';
import { Spin } from 'antd';
import Img from 'react-image';


class SimpleGridItem extends Component {
    constructor(props) {
        super(props);
        require('./less/SimpleGridItem.less');
    }
    render() {
        const { item } = this.props;
        return (
            <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '8px' }}>
                <Img
                    src={[item.images[0] + '?preset=large']}
                    style={{ width: '100%', height: 'auto' }}
                    loader={<div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}><Spin /><br></br>Chargement...</div>}
                />
                <h3>{item.title}</h3>
                <h3 className="price">{item.price} €</h3>
            </div>
        );
    }
}

export default SimpleGridItem;