import React, { Component } from 'react';
import ProfileCard from '../ProfileCard';
import ProfileContent from '../ProfileContent';

class Saved extends Component{
    render(){
        const{ saved, mondako_url } = this.props.User
       return <div className="containerProf">
        <ProfileCard User ={this.props.User} />
        <ProfileContent Comics = {saved} url={mondako_url} />
        </div>
    }
}

export default Saved;