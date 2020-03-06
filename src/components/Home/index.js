import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import Banner from '../Banner';
import Comic from '../Comic';
import './home.css';

class Home extends Component{
    render(){
       return <Container id="home">
           <Banner/>
           <Row id="comic-container">
               <Comic />
               <Comic />
               <Comic />
           </Row>
       </Container>
    }
}
export default Home