import React, { Component } from 'react';
import './profile-content.css';
import {Row, Col} from 'reactstrap';
import Image from "react-bootstrap/Image";
import MenuProfile from '../MenuProfile';

class ProfileContent extends Component{
    
    render(){
       return <>
       <Col md='7'id="container-profile">
           <Row>
                <MenuProfile url={this.props.url}/>
           </Row>
           <Row className="box-profile">
           {
            this.props.Comics.map(comic => (
                <div className="comic-profile">
                <Image className="rounded" src={comic.image_url} />
                </div>
            ))
               }
           </Row>
       </Col>
       </>
    }
}

export default ProfileContent;