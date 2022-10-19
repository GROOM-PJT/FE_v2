import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu title={<span>Recommend</span>}>
        <MenuItemGroup title="강북">
          <Menu.Item key="setting:1">미아동</Menu.Item>
          <Menu.Item key="setting:2">삼각동</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="강남">
          <Menu.Item key="setting:3">도곡동</Menu.Item>
          <Menu.Item key="setting:4">역삼동</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
