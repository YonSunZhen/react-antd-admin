import React from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UploadOutlined,
  GithubOutlined,
  BankOutlined
} from '@ant-design/icons';
import { Route, Switch } from 'react-router-dom';
import { ISiderMenu, ESiderMenuMode, UserMenu, IUserMenu, SiderMenu, ESiderMenuTheme } from './layouts';
import { Test1, Test2, PlatformProject } from './pages';
import './App.scss';

const { Header, Sider, Content, Footer } = Layout;

interface AppProps{

}

interface AppState {
  collapsed?: boolean,
  menuList?: ISiderMenu,
  userInfo?: IUserMenu
}
class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
  }

  state: AppState = {
    collapsed: false,
    menuList: {
      mode: ESiderMenuMode.Inline,
      theme: ESiderMenuTheme.Dark,
      data: [
        {
          id: '1',
          name: '全部文件',
          link: '',
          icon: <BankOutlined />,
          open: true,
          children: [
            {id: '2', link: '/test1', name: '所有文件1', icon:  <UserOutlined />},
            {id: '22', link: '', name: '所有文件2' }
          ]
        },
        {
          id: '3',
          name: '回收站',
          icon: <UploadOutlined />,
          link: '/test2'
        },
        {
          id: '4',
          name: 'Platform Project',
          icon: <GithubOutlined />,
          link: '/platform-project'
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
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <SiderMenu menuList={this.state.menuList}></SiderMenu>
        </Sider>
        <Layout className="site-layout">
          <Header className="header">
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.onToggle,
            })}
            <UserMenu userInfo={this.state.userInfo} onLogoutChange={this.onLogoutChange}></UserMenu>
          </Header>
          <Content id="content">
            <Switch>
              <Route path={'/test1'} component={Test1}></Route>
              <Route path={'/test2'} component={Test2}></Route>
              <Route path={'/platform-project'} component={PlatformProject}></Route>
            </Switch>
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
