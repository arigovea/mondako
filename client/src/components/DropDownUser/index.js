import React, { useState } from 'react';
import profile from "../../utilities/profile.png";
import messages from "../../utilities/messages.png";
import favorites from "../../utilities/favorites.png";
import saved from "../../utilities/saved.png";
import settings from "../../utilities/settings.png";
import donations from "../../utilities/donations.png";
import Image from "react-bootstrap/Image";
import {
   Dropdown, 
   DropdownItem, 
   DropdownToggle, 
   DropdownMenu,} from 'reactstrap';

const ProfileMenu = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    const {user_img, mondako_url} = props.user;
    return ( <>
<Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
          <Image src={user_img} roundedCircle />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem href={`/users${mondako_url}`}>
            <img className="icon" alt="Profile" src={profile} />
              Perfil</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/messages">
            <img className="icon" alt="Messages" src={messages} />
              Mensajes</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href={`/favorites${mondako_url}`}>
            <img className="icon" alt="Favorites" src={favorites} />
              Favoritos</DropdownItem>
              <DropdownItem divider />
            <DropdownItem href={`/saved${mondako_url}`}>
            <img className="icon" alt="Saved" src={saved} />
             Guardados</DropdownItem>
             <DropdownItem divider />
            <DropdownItem href="/donations">
            <img className="icon" alt="Donations" src={donations} />
            Donaciones</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/settings">
            <img className="icon" alt="Settings" src={settings} />
            Ajustes</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </>
    )
};

export default ProfileMenu;
