import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';;
import './App.scss';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="app-container">
        <Header className="header-container">
          <div className="header">
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <div className="title">Magic Mirror 2.0</div>
          </div>
        </Header>
        <Layout className="content-container">
          <Content id="content">
            <div className="sidebar-box">
              <Sider id="side" trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                  <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1
                  </Menu.Item>
                  <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                  </Menu.Item>
                  <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                  </Menu.Item>
                </Menu>
              </Sider>
            </div>
            <div className="inner-content">
              666
            </div>
          </Content>
          <Layout className="footer-container">
            <Footer id="footer">粤ICP备18135123号</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
