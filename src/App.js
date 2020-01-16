import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainRouter } from "./router";
import { Layout, Row, Col } from 'antd';

const { Header, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme(theme) {
    this.setState({
      theme
    })
  }

  render() {
    return (
      <Layout>
        <Header className="App-header center">
          <img src={logo} className="App-logo" alt="logo" />
        </Header>
        <Content className="content">
          <Row type="flex" justify="center">
            <Col className="gutter-row" span={18}>
              <MainRouter/>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default App;
