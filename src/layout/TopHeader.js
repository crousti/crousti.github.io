import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MenuDrawer from './MenuDrawer';
import SearchDrawer from './SearchDrawer';
import CartDrawer from './CartDrawer';
import FilterDrawer from './FilterDrawer';

class TopHeader extends Component {
    constructor(props) {
        super(props);
        require('./less/TopHeader.less');
    }
    render() {
        return (
            <div style={{ width: '100%', clear: 'both' }}>
                <div style={{ float: 'left' }}>
                    <MenuDrawer categories={this.props.categories} countItems={this.props.countItems} history={this.props.history} />
                    <img src="logo.jpg" style={{ marginLeft: '20px', marginTop: '-6px' }} alt="" />
                </div>
                <div style={{ float: 'right' }}>
                    <FilterDrawer history={this.props.history} />
                    <SearchDrawer />
                    {/* <CartDrawer /> */}
                </div>
            </div>
        );
    }
}

export default TopHeader;