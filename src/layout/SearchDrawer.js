import React, { Component } from 'react';
import { Drawer, Icon } from 'antd';

class SearchDrawer extends Component {
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
                <h2 style={{ display: 'inline', cursor: 'pointer' }} onClick={this.showDrawer}><Icon type="search" /></h2>
                <Drawer
                    title="Search"
                    placement="top"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Search...</p>
                </Drawer>
            </React.Fragment>
        );
    }
}

export default SearchDrawer;