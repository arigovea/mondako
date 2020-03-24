import React, { useState } from 'react';
import './menu.css'
import logo from "../../utilities/logo.png";
import search from "../../utilities/search.png";
import nearyou from "../../utilities/nearyou.png";
import forum from "../../utilities/forum.png";
import explore from "../../utilities/explore.png"
import ProfileMenu from "../DropDownUser";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  FormGroup,
  Input,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

const Menu = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return <div id="menu-bar">
    <Navbar light>
      <NavbarBrand className="mr-auto" href="/" >
        <img id="brand-image" alt="logo" src={logo} />
      </NavbarBrand>
      <FormGroup id="search-group">
        <img alt="logo" src={search} />
        <Input
          type="search"
          name="search"
          placeholder="Busca" />
      </FormGroup>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          <NavbarToggler id="burger" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="/explore">
            <img className="icon" alt="Explore" src={explore} />
              Explora</DropdownItem>
          <DropdownItem divider />
          <DropdownItem id="nearyou-menu" href="/nearyou">
            <img className="icon" alt="Near You" src={forum} />
              Cerca de ti</DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="/forum">
            <img className="icon" alt="Forum" src={nearyou} />
              Foro</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <ProfileMenu user={props.user} />
    </Navbar>
  </div>
};

export default Menu;

