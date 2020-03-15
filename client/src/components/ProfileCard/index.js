import React from 'react';
import Image from 'react-bootstrap/Image';
import {Row, Col} from 'reactstrap';
import './profile-card.css';
import emailIcon from '../../utilities/email.png';
import facebookIcon from '../../utilities/facebook.png';
import instagramIcon from '../../utilities/instagram.png';
import settings from '../../utilities/settings.png';
import share from '../../utilities/share.png';

function ProfileCard(props) {
    const { 
        name, 
        description, 
        country_img, 
        email, 
        facebook, 
        instagram,
        user_img,
        } = props.User
     return <>
     <Col  md='3' id='card-container'>
                <Row >
                    <Image roundedCircle src={user_img}/>
                    <span>
                        <h4>{name}</h4>
                        <Image id="flag" src={country_img}/>
                    </span>
                    <p>{description}</p>
                </Row>
                <Row id="social-network">
                    <span>
                        <img className="icon" alt="Email" src= {emailIcon} />
                        <a href={email}>{email}</a>
                    </span>
                    <span>
                        <img className="icon" alt="Facebook" src= {facebookIcon} />
                        <a href={`https://www.facebook.com/${facebook}`}>{facebook}</a>
                    </span>
                    <span>
                        <img className="icon" alt="Instagram" src= {instagramIcon} />
                        <a href={`https://www.instagram.com/${instagram}`}>{instagram}</a>
                    </span>
                </Row>
                <Row className="bottom">
                    <img className="icon last" alt="Settings" src= {settings} />
                    <img className="icon last" alt="Share" src= {share} />
                </Row>
            </Col>
            </>
     }

   export default ProfileCard;