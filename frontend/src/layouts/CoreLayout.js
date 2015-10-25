import React from 'react';
import 'styles/core.scss';

import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem, CollapsibleNav } from 'react-bootstrap';

import { Link } from 'react-router';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  constructor () {
    super();
  }

  render () {
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
              <NavDropdown eventKey={5} title="John Smith" id="collapsible-navbar-dropdown">
                <MenuItem eventKey="1">Account Settings</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="2">Sign Out</MenuItem>
              </NavDropdown>
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
