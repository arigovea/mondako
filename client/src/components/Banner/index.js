import React from 'react';
import {Row, Button} from 'reactstrap';
import './banner.css';

const Banner = (props) => {
    return <>
            <div className="background-container">
                <Button color="primary" size="lg">Ver más</Button>
            </div>
        <Row id="popular-group">
            <label>POPULAR</label>
            <div className = "line"/>
        </Row>
        
    </>
}

export default Banner