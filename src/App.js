import React, { Component } from 'react';
import history from './utils/history';
import {
  Router,
  Switch,
  Route,
  Redirect,
  matchPath
} from "react-router-dom";
import './App.css'; import { Layout, Spin } from 'antd';
import TopHeader from './layout/TopHeader';
import GridView from './components/GridView';
import DetailView from './components/DetailView';
import ListView from './components/ListView';
import CompareView from './components/CompareView';

const { Header, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbLoaded: false,
    };
    this.items = [];
    this.categories = [];
    this.attributes = [];
    this.countItems = 0;
  }

  itemDBtoItemApp(itemDB) {
    let fts = [];
    if (itemDB[7]) {
      for (let [key, value] of Object.entries(itemDB[7])) {
        fts.push({ key: key, name: this.attributes.filter(attribute => attribute[0] === parseInt(key))[0][1], value: value })
      }
    }
    return {
      id: itemDB[0],
      ean: itemDB[0],
      reference: itemDB[1],
      classification: itemDB[2],
      title: itemDB[3],
      description: itemDB[4],
      price: itemDB[5],
      images: itemDB[6],
      features: fts
    }
  }

  componentDidMount() {
    if (!this.state.dbLoaded) {
      fetch('/data.json')
        .then(response => response.json())
        .then(data => {
          this.items = data.items;
          this.categories = data.categories.map(category => ({
            ...category,
            count: this.items.filter(item => item[2] === category[0]).length
          }));
          this.countItems = data.items.length;
          this.attributes = data.attributes;
          this.setState({ dbLoaded: true });
        });
    }
  }

  getFilteredItems() {
    let params = new URLSearchParams(history.location.search);
    let category = params.get('category');
    if (category && category !== "" && category !== "0") {
      let categoryId = parseInt(category); // The category is stored as an int
      return this.items.filter(item => item[2] === categoryId).slice(0, 24).map(itemDB => this.itemDBtoItemApp(itemDB));
    } else {
      // By default
      return this.items.slice(0, 25).map(itemDB => this.itemDBtoItemApp(itemDB));
    }
  }
  getItem() {
    let match = matchPath(history.location.pathname, {
      path: "/detailView/:id"
    });
    let itemId;
    if (match && match.params.id) {
      itemId = match.params.id;
      return this.itemDBtoItemApp(this.items.filter(item => item[0] === itemId)[0]);
    }
  }

  render() {
    const { dbLoaded } = this.state;
    if (!dbLoaded) {
      return <div style={{ textAlign: 'center', paddingTop: '40vh' }}><Spin size="large" /><br></br><br></br>Loading...</div>
    }
    return (
      <Router history={history}>
        <div className="App">
          <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '55px', lineHeight: '55px', backgroundColor: 'white', padding: '0 24px', borderBottom: '1px solid #dadada' }}>
              <TopHeader title={'Eberhardt'} categories={this.categories} countItems={this.countItems} history={history} />
            </Header>
            <Content style={{ paddingTop: '54px' }}>
              <Switch>
                <Route exact path='/' render={(props) => <Redirect to='/gridView' />} />
                <Route path="/gridView" component={() => <GridView items={this.getFilteredItems()} />} />
                <Route path="/listView" component={() => <ListView items={this.getFilteredItems()} />} />
                <Route path="/compareView" component={() => <CompareView items={this.getFilteredItems()} />} />
                <Route path="/detailView/:id" component={() => <DetailView item={this.getItem()} />} />
              </Switch>
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }

};

export default App;