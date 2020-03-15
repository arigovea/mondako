import React, { Component } from 'react';
import Donations from '../../utilities/donations.png';
import Post from '../../utilities/post.png';
import Saved from '../../utilities/saved.png';
import Messages from '../../utilities/messages.png';
import Favorites from '../../utilities/favorites.png';
import {Link} from 'react-router-dom';
import './menu-profile.css';
 

class MenuProfile extends Component{
    render(){
       return <div className="menu-profile-container">
           <button className="button-profile">
           <Link to={this.props.url}>
               <img class="icon" alt="Posts" src={Post} />
           </Link>
       </button>
       {
           this.props.url === '/sarahigovea' ? <> 
           <button className="button-profile">
                <Link to="/Messages">
                    <img class="icon" alt="Messages" src={Messages} />
                </Link>
           </button>
           <button className="button-profile">
                <Link to="/favorites">
                    <img class="icon" alt="Favorites" src={Favorites} />
                </Link>
           </button> 
           <button className="button-profile">
                <Link to="/saved">
                    <img class="icon" alt="Saved" src={Saved} />
                </Link>
           </button> </> :
           null
       }
        <button className="button-profile">
           <Link to="/donations">
               <img class="icon" alt="Donations" src={Donations} />
           </Link>
       </button>
    </div>
    }
}

export default MenuProfile;