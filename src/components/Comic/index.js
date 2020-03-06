import React, { Component } from 'react';
import {Col} from 'reactstrap';
import Image from 'react-bootstrap/Image'
import first from '../../utilities/first-image.png'
import './comic.css'
class Comic extends Component{
    render(){
       return <>
         <Col xs={6} md={4}>
           <Image src={first} rounded>

           </Image>
         </Col>
         </>
    }
}
export default Comic