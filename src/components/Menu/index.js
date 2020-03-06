import React, { useState } from 'react';
import './menu.css'
import logo from "../../utilities/logo.png";
import search from "../../utilities/search.png";
import Sarahi from "../../utilities/Sarahi.jpg";
import nearyou from "../../utilities/nearyou.png";
import forum from "../../utilities/forum.png";
import explore from "../../utilities/explore.png"
import Image from "react-bootstrap/Image";
import {
   Navbar,
   NavbarToggler,
   NavbarBrand,
   FormGroup,
   Input,
   Dropdown, 
   DropdownItem, 
   DropdownToggle, 
   DropdownMenu,} from 'reactstrap';

const Menu = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div id="menu-bar">
      <Navbar light>
        <NavbarBrand className="mr-auto" >
        <a class="mr-auto navbar-brand" href="/">
        <img id="brand-image" alt="logo" src={logo} />
        </a>
          </NavbarBrand>
        <FormGroup id = "search-group">
        <img alt="logo" src={search} />
        <Input
          type="search"
          name="search"
          placeholder="Busca"
        />
      </FormGroup>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
          <NavbarToggler id="burger"/>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/explore/">
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
        <Image src={Sarahi} roundedCircle />
      </Navbar>
    </div>
  );
}

export default Menu;

