import React, { Component } from 'react';
import ProfileCard from '../ProfileCard';
import ProfileContent from '../ProfileContent';

class Favorites extends Component{  
    render(){
        const{ favorites, mondako_url } = this.props.User
       return <div className="containerProf">
        <ProfileCard User ={this.props.User} />
        <ProfileContent Comics = {favorites} url={mondako_url} />
        </div>
    }
}

export default Favorites;