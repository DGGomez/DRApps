import React, { Component } from 'react';
import { Menu } from 'antd';
//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
       <Menu.Item key="home">
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item key="product">
          <a href="/product">Products</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="/about">About</a>
        </Menu.Item>
        <Menu.Item key="contact">
          <a href="/contact">Contact Us</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;
