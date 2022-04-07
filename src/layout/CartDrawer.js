import React, { Component } from 'react';
import { Drawer, Icon } from 'antd';

class CartDrawer extends Component {
    state = { visible: false };

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
    render() {
        return (
            <React.Fragment>
                <h2 style={{ display: 'inline', cursor: 'pointer' }} onClick={this.showDrawer}><Icon type="shopping-cart" /></h2>
                <Drawer
                    title="Cart"
                    placement="top"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Cart...</p>
                </Drawer>
            </React.Fragment>
        );
    }
}

export default CartDrawer;