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
      <div className="navbar navbar-inverse bg-inverse navbar-fixed-top">

        <div className="profile-body__container">
        <nav className="menuBar">
          <div className="logo">
            <a href="/"><strong>
                                <img className="logo" align="left" src="./DownRampAppsLogo.png" alt="react-logo"/>
                                DRA
                            </strong></a>
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
        </div>
    );
  }
}
export default Navbar;
