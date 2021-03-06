import React, { Component } from 'react';
import ProfileCard from '../ProfileCard'
import ProfileContent from '../ProfileContent';
import axios from 'axios';

class Profile extends Component {
    state = {
        user: {},
        comics: []
    }

    componentDidMount() {
        const profile = this.props.match.params.mondako_url;
        axios.get(`http://localhost:9000/comics/user/${profile}`)
            .then(res => {
                let user = res.data.user[0]
                let comics = [...res.data.comics];
                this.setState({ user, comics });
            });
    }
    
    render() {
        return <div className="containerProf">
            <ProfileCard User={this.state.user} />
            <ProfileContent Comics={this.state.comics} url={this.state.user.mondako_url} />
        </div>
    };
};

export default Profile;