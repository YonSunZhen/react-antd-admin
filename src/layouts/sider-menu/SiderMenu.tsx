import React from 'react';
import { Menu } from 'antd';
import { ISiderMenu } from './SiderMenu.types';
import { Link } from 'react-router-dom';

interface SiderMenuProps {
  menuList?: ISiderMenu;
};

// TODO: 暂时只支持二级菜单 后续改进
const SiderMenu: React.FC<SiderMenuProps> = (props) => {
  
  const {menuList = {}} = props;

  return (
    <Menu mode={menuList.mode} defaultSelectedKeys={['1']}>
      {menuList.data?.map((meunItem) => {
        if(meunItem.children && meunItem?.children?.length > 0) {
          return (
            <Menu.SubMenu key={meunItem.id} icon={meunItem.icon} title={meunItem.name}>
              {meunItem?.children?.map((childItem) => {
                return (
                  <Menu.Item key={childItem.id} icon={childItem.icon}>
                    <Link to={`${childItem.link}`}>{childItem.name}</Link>
                  </Menu.Item>
                )
              })}
            </Menu.SubMenu>
          )
        } else {
          return (
            <Menu.Item key={meunItem.id} icon={meunItem.icon}>
              <Link to={`${meunItem.link}`}>{meunItem.name}</Link>
            </Menu.Item>
          )}
      })}
    </Menu>
  )
  
}

export default SiderMenu;
