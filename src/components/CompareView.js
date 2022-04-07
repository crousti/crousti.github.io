import React, { Component } from 'react';

class CompareView extends Component {
    constructor(props) {
        super(props);
        require('./less/CompareView.less');
    }
    render() {
        const { items } = this.props;
        return (
            <div className="compare-view">
                <div className="container">
                    <table>
                        <tbody>
                            <tr>
                                <th className="headcol"></th>
                                {items.map((item, index) => (
                                    <td key={index}>
                                        <div style={{ width: '200px', textAlign: 'center' }}>
                                            <img src={item.images[0] + '?preset=large'} style={{ width: '100%', height: 'auto' }} alt="" />
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <th className="headcol">Titre</th>
                                {items.map((item, index) => (
                                    <td key={index}><h3>{item.title}</h3></td>
                                ))}
                            </tr>
                            <tr>
                                <th className="headcol">Prix</th>
                                {items.map((item, index) => (
                                    <td key={index}><h3 className="price">{item.price} €</h3></td>
                                ))}
                            </tr>
                            <tr>
                                <th className="headcol">Réf</th>
                                {items.map((item, index) => (
                                    <td key={index}><p>{item.reference}</p></td>
                                ))}
                            </tr>
                            <tr>
                                <th className="headcol">EAN</th>
                                {items.map((item, index) => (
                                    <td key={index}><p>{item.ean}</p></td>
                                ))}
                            </tr>
                            <tr>
                                <th className="headcol">Description</th>
                                {items.map((item, index) => (
                                    <td key={index}><p>{item.description}</p></td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CompareView;