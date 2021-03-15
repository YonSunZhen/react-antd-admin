import React from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { ISiderMenu, ESiderMenuMode, SiderMenu } from './layouts';
import './App.scss';

const { Header, Sider, Content, Footer } = Layout;

interface State {
  collapsed?: boolean,
  menuList?: ISiderMenu
}
class App extends React.Component<any, State> {

  state = {
    collapsed: false,
    menuList: {
      mode: ESiderMenuMode.Inline,
      data: [
        {
          id: '1',
          name: '全部文件',
          icon: <MenuUnfoldOutlined />,
          open: true,
          children: [
            {id: '2', link: './files/all-files', name: '所有文件', matchRouter: true, icon:  <UserOutlined />},
            {id: '22', link: './files/all-files', name: '所有文件', matchRouter: true }
          ]
        },
        {
          id: '3',
          name: '回收站',
          icon: <UploadOutlined />,
          matchRouter: true,
          link: './recycle'
        }
      ]
    }
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
            <div className="title">React Admin</div>
          </div>
        </Header>
        <Layout className="content-container">
          <Content id="content">
            <div className="sidebar-box">
              <Sider id="side" trigger={null} collapsible collapsed={this.state.collapsed}>
                <SiderMenu menuList={this.state.menuList}></SiderMenu>
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
