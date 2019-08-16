import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainRouter } from "./router";
import { Layout, Row, Col } from 'antd';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="center">
        <img src={logo} className="App-logo" alt="logo" />
      </Header>
      <Content className="content">
        <Row type="flex" justify="center">
          <Col className="gutter-row" span={12}>
            <MainRouter/>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
