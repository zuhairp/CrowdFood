import React from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { loginFacebook, logoutFacebook, facebookInit } from 'actions/facebook';
import { selectLoggedInUser } from 'reducers/users';

import 'styles/core.scss';

import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem, CollapsibleNav } from 'react-bootstrap';

import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const actionCreators = {
  loginToFacebook: loginFacebook,
  initializeFacebookSDK: facebookInit,
  logoutFacebook: logoutFacebook,
};
const mapStateToProps = (state) => {
  return {
    loggedInUser : selectLoggedInUser(state),
  }
};
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element,
    loggedInUser: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  constructor () {
    super();
  }

  componentDidMount () {
    this.props.actions.initializeFacebookSDK();
  }

  renderUserStatus () {
    const { loggedInUser } = this.props;
    if (loggedInUser === undefined) {
      return (
        <NavItem eventKey={3} onClick={this.props.actions.loginToFacebook}>Log In</NavItem>
      );
    }

    const { fetching } = loggedInUser;
    if (fetching) {
      return (
        <NavItem eventKey={3}>Logging In...</NavItem>
      );
    }

    return (
        <NavDropdown eventKey={5} title={ loggedInUser.name } id='collapsible-navbar-dropdown'>
          <MenuItem eventKey='1'>Account Settings</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='2' onClick={this.props.actions.logoutFacebook}>Sign Out</MenuItem>
        </NavDropdown>
    );
  }

  render () {
    return (
      <div className='page-container'>
        <Navbar inverse toggleNavKey={0}>
          <NavBrand><Link to='/'>CrowdFood</Link></NavBrand>
          <CollapsibleNav eventKey={0}>
            <Nav navbar>
              <NavItem eventKey={1} href='#'>Buy</NavItem>
              <LinkContainer to='/food/sell'>
                <NavItem eventKey={2}>Sell</NavItem>
              </LinkContainer>
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
