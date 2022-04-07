import React, { Component } from 'react';
import { Drawer, Icon, Radio } from 'antd';

class FilterDrawer extends Component {
    constructor(props) {
        super(props);
        let display = "grid";
        if (props.history.location.pathname === '/listView') {
            display = "list"
        } else if (props.history.location.pathname === '/compareView') {
            display = "compare"
        }
        this.state = { visible: false, display: display, sort: "new" };
    }

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

    handleDisplayChange = e => {
        this.setState({
            display: e.target.value
        });
        if (e.target.value === 'grid') {
            this.props.history.push('/gridView' + this.props.history.location.search);
        } else if (e.target.value === 'list') {
            this.props.history.push('/listView' + this.props.history.location.search);
        } else if (e.target.value === 'compare') {
            this.props.history.push('/compareView' + this.props.history.location.search);
        }

    }

    handleSortChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <React.Fragment>
                <h2 style={{ display: 'inline', marginRight: '20px', cursor: 'pointer' }} onClick={this.showDrawer}><Icon type="control" /></h2>
                <Drawer
                    title="Réglages"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={275}
                >
                    <h3>Affichage</h3>
                    <Radio.Group onChange={this.handleDisplayChange} value={this.state.display} >
                        <Radio.Button value="grid">Grille</Radio.Button>
                        <Radio.Button value="list">Liste</Radio.Button>
                        <Radio.Button value="compare">Comparer</Radio.Button>
                    </Radio.Group>
                    <br></br>
                    <br></br>

                    {/* <h3>Filtres</h3>
                    <br></br>
                    <br></br> */}

                    <h3>Trier par</h3>
                    <Radio.Group onChange={this.handleSortChange} value={this.state.sort}>
                        <Radio style={radioStyle} value={'new'}>
                            Nouveautés
                        </Radio>
                        <Radio style={radioStyle} value={'price_asc'}>
                            Prix : ordre croissant
                        </Radio>
                        <Radio style={radioStyle} value={'price_dsc'}>
                            Prix order décroissant
                        </Radio>
                    </Radio.Group>
                    <br></br>
                    <br></br>

                </Drawer>
            </React.Fragment>
        );
    }
}

export default FilterDrawer;