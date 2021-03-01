import React, { useState } from 'react';
import "./App.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';



const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div  className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">The Beauty Garden</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Home/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact/">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About/">About</NavLink>
            </NavItem>
            <NavItem></NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Meet The team
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Name1
                </DropdownItem>
                <DropdownItem>
                  Name2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Coming soon!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;