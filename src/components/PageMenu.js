import React from 'react'

import { Menu, Icon, Row, Col, Popover, Avatar, Carousel, Card, Calendar, Tabs, Drawer, Button, Skeleton } from 'antd';

const { SubMenu } = Menu;
const { TabPane } = Tabs;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class PageMenu extends React.Component {
  state = {
    current: 'mail',
    visible: false
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  callback = (key) => {
    console.log(key);
  }

  onPanelChange = (value, mode) => {
    console.log(value, mode);
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  componentDidMount() {
    console.log(this.props.location.pathname)
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={22}>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="menu-demo">
            <Menu.Item key="mail">
              <Icon type="mail" />
              Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <Icon type="appstore" />
              Navigation Two
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="setting" />
                  Navigation Three - Submenu
                </span>
              }
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
          </Col>
          <Col span={2}>
            {
              this.state.visible?
              <div className="right qr-code">
                <Popover placement="bottom" content={content}>
                  <Avatar icon="qrcode" />
                </Popover>
              </div>: null
            }
          </Col>
        </Row> 
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Tab 1" key="1">
            <Card title="Default size card" style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
              <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
            </div>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <Button type="primary" onClick={this.showDrawer}>
              Open
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </TabPane>
        </Tabs>
        <Skeleton active />
      </div>
    );
  }
}

export default PageMenu;