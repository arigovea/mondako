import React from 'react';
import Image from 'react-bootstrap/Image';
import { Col } from 'reactstrap';
import './country.css';

function Country(props) {
       const { name, url } = props;
       return <Col className='country-container'>
              <Image src={url} />
              <h5>{name}</h5>
       </Col>
};

export default Country;