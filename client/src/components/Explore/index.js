import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Country from '../Country/index.js';
import America  from '../../services/America.json';
import Europe from '../../services/Europe.json';
import Asia from '../../services/Asia.json';
import './explore.css';
import {Link} from 'react-router-dom';

class Explore extends Component{
    render(){
       return <>
       <div className = 'continent-container'>
        <Col className ="continent-label">
        <h1>América</h1>
        </Col>
        <Row className ='flagContainer'>
               { 
                   America.map(country => (
                   <Link to={{
                        pathname: `/${country.spanish_title}`,
                    }}>
                       <Country dataCountry = {country} />
                    </Link>
                   )
                )
               }
         </Row>
         </div>
         <div className = 'continent-container'>
        <Col className ="continent-label">
            <h1>Asia</h1>
        </Col>
        <Row className ='flagContainer'>
               { 
                   Asia.map(country => (
                    <Link to={{
                        pathname: `/${country.spanish_title}`,
                    }}>
                       <Country dataCountry = {country} />
                    </Link>
                   )
                )
               }
        </Row>
        </div>
        <div className = 'continent-container'>
        <Col className ="continent-label">
            <h1>Europa</h1>
        </Col>
        <Row className ='flagContainer'>
               { 
                   Europe.map(country => (
                    <Link to={{
                        pathname: `/${country.spanish_title}`,
                    }}>
                       <Country dataCountry = {country} />
                    </Link>
                   )
                )
               }
        </Row>
        </div>
       </>
    }
}

export default Explore;