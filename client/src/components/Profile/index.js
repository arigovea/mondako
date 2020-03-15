import React, { Component } from 'react';
import ProfileCard from '../ProfileCard'
import ProfileContent from '../ProfileContent';

class Profile extends Component{
    render(){
        const{ comics, mondako_url } = this.props.User
       return <div className="containerProf">
        <ProfileCard User ={this.props.User} />
        <ProfileContent Comics = {comics} url={mondako_url} />
        </div>
    }
}
export default Profile;