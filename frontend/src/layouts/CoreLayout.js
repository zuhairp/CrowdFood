import React from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { loginFacebook, logoutFacebook, facebookInit } from 'actions/facebook';

import 'styles/core.scss';

import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem, CollapsibleNav } from 'react-bootstrap';

import { Link } from 'react-router';

const actionCreators = {
  loginToFacebook: loginFacebook,
  initializeFacebookSDK: facebookInit,
  logoutFacebook: logoutFacebook,
};
const mapStateToProps = (state) => ({
  loggedInUser : state.loggedInUser
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  constructor () {
    super();
  }

  componentDidMount() {
    this.props.actions.initializeFacebookSDK();
  }

  renderUserStatus() {
    const { loggedInUser } = this.props;
    console.log(loggedInUser);
    if(loggedInUser === ''){
      return (
        <NavItem eventKey={3} onClick={this.props.actions.loginToFacebook}>Log In</NavItem>
      );
    }
    else {
      return (
        <NavDropdown eventKey={5} title={ loggedInUser } id="collapsible-navbar-dropdown">
          <MenuItem eventKey="1">Account Settings</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="2" onClick={this.props.actions.logoutFacebook}>Sign Out</MenuItem>
        </NavDropdown>
      )
    }
  }

  render() {
    return (
      <div className='page-container'>
        <Navbar inverse toggleNavKey={0}>
          <NavBrand><Link to="/">CrowdFood</Link></NavBrand>
          <CollapsibleNav eventKey={0}>
            <Nav navbar>
              <NavItem eventKey={1} href="#">Buy</NavItem>
              <NavItem eventKey={2} href="#">Sell</NavItem>
            </Nav>
            <Nav navbar right>
              { this.renderUserStatus() }
            </Nav>
          </CollapsibleNav>
        </Navbar>
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);