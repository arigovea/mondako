import React from 'react';
import {Row, Button} from 'reactstrap';
import './banner.css';
import {Link} from 'react-router-dom';

const Banner = (props) => {
    return <>
            <div className="background-container">
                <Link to="/suupergirl">
                    <Button color="primary" size="lg">
                        Ver más
                    </Button>
                </Link> 
            </div>
        <Row id="popular-group">
            <label>POPULAR</label>
            <div className = "line"/>
        </Row>
        
    </>
}

export default Banner