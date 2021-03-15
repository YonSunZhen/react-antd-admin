import React from 'react';
import { Menu } from 'antd';
import { ISiderMenu } from './SiderMenu.types';

interface SiderMenuProps {
  menuList?: ISiderMenu
};

const { SubMenu } = Menu;

export const SiderMenu: React.FC<SiderMenuProps> = ({menuList = {}}) => {
  
  return (
    <Menu mode={menuList.mode} defaultSelectedKeys={['1']}>
      {menuList.data?.map((meunItem) => {
        if(meunItem.children && meunItem?.children?.length > 0) {
          return (
            <SubMenu key={meunItem.id} icon={meunItem.icon} title={meunItem.name}>
              {meunItem?.children?.map((childItem) => <Menu.Item key={childItem.id} icon={childItem.icon}>{childItem.name}</Menu.Item>)}
            </SubMenu>
          )
        } else {
          return <Menu.Item key={meunItem.id} icon={meunItem.icon}>{meunItem.name}</Menu.Item>
        }
      })}
    </Menu>
  )
  
}
