import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import { Drawer, Button } from 'antd';
class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };
render() {
    return (
        <div>
        <div className="profile-body__container"><h1>Welcome to Down Ramp Apps</h1></div>
        <nav className="menuBar">
          <div className="logo">
            <a href="/">logo</a>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              title=""
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu />
            </Drawer>
</div>
        </nav>
        </div>
    );
  }
}
export default Navbar;
