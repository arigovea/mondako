import React, { Component } from 'react';
import './profile-content.css';
import {Row, Col} from 'reactstrap';
import Image from "react-bootstrap/Image";
import MenuProfile from '../MenuProfile';
import {Link} from 'react-router-dom';

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
                <Link to={{
                    pathname: `/comic/${comic.id_comic}`
            }}>
                    <div className="comic-profile">
                <Image className="rounded" src={comic.image_url} />
                </div>
                </Link>
            ))
               }
           </Row>
       </Col>
       </>
    }
}

export default ProfileContent;