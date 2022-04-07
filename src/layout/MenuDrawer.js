import React, { Component } from 'react';
import { Drawer, Icon, Menu } from 'antd';
import { Link } from "react-router-dom";

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const categoryA = a[1].toUpperCase();
    const categoryB = b[1].toUpperCase();

    let comparison = 0;
    if (categoryA > categoryB) {
        comparison = 1;
    } else if (categoryA < categoryB) {
        comparison = -1;
    }
    return comparison;
}

class MenuDrawer extends Component {
    state = { visible: false };

    // Drawer
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
    // Menu
    handleClick = e => {
        this.props.history.push(this.props.history.location.pathname + '?category=' + e.key);
        this.onClose();
    };
    render() {
        return (
            <React.Fragment>
                <h2 style={{ display: 'inline', cursor: 'pointer' }} onClick={this.showDrawer}><Icon type="menu" /></h2>
                <Drawer
                    title="Catégories"
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ padding: '16px 0' }}
                >
                    <Menu
                        onClick={this.handleClick}
                        style={{ width: 256 }}
                        defaultSelectedKeys={['all_categories']}
                        defaultOpenKeys={[]}
                        mode="inline"
                    >
                        <Menu.Item key={0}>Tous les produits ({this.props.countItems})</Menu.Item>
                        {this.props.categories.sort(compare).map(category => (
                            <Menu.Item key={category[0]}>{category[1]} ({category.count})</Menu.Item>
                        ))}
                    </Menu>

                </Drawer>
            </React.Fragment>
        );
    }
}

export default MenuDrawer;