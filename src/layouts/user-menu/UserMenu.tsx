import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { IUserMenu } from './UserMenu.types';

interface DropDownMenuProps {
  userInfo?: IUserMenu;
  onLogoutChange?: () => void;
}

export const UserMenu: React.FC<DropDownMenuProps> = (props) => {

  const { userInfo = {}, onLogoutChange } = props;

  const onLogout = () => {
    onLogoutChange && onLogoutChange();
  };
 
  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={onLogout}>
          注销
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a onClick={e => e.preventDefault()}>
        <Avatar src={userInfo.avatar} />
      </a>
    </Dropdown>
  );
}