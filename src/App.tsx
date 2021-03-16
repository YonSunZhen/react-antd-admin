import React from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { ISiderMenu, ESiderMenuMode, SiderMenu, UserMenu, IUserMenu } from './layouts';
import './App.scss';

const { Header, Sider, Content, Footer } = Layout;

interface AppState {
  collapsed?: boolean,
  menuList?: ISiderMenu,
  userInfo?: IUserMenu
}
class App extends React.Component<any, AppState> {

  state: AppState = {
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
    },
    userInfo: {
      name: 'SYZ',
      avatar: 'http://qiniu.yonsunzhen.cn/%E5%A4%B4%E5%83%8F.jpg'
    }
  };

  onLogoutChange = () => {

  }

  onToggle = () => {
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
              onClick: this.onToggle,
            })}
            <div className="title">React Admin</div>
            <UserMenu userInfo={this.state.userInfo} onLogoutChange={this.onLogoutChange}></UserMenu>
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
