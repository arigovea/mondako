import React, { Component } from 'react';
import ProfileCard from '../ProfileCard'
import ProfileContent from '../ProfileContent';

class Profile extends Component{
    constructor(props){
        super(props)
    }    
    render(){
       return <>
        <ProfileCard User ={this.props.User} />
        <ProfileContent />
        </>
    }
}
export default Profile;