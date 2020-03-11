import React from 'react';
import Image from 'react-bootstrap/Image';
import {Col} from 'reactstrap';
import './country.css';

function Country(props) {
   const {image_url, spanish_title} = props.dataCountry;
    return <Col className='country-container'>
           <Image src={image_url} />  
           <h5>{spanish_title}</h5>
           </Col>
    }
  export default Country;