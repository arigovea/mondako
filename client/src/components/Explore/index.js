import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Country from '../Country/index.js';
import './explore.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Explore extends Component {
    state = {
        america: [],
        europe: [],
        asia: []
    };

    componentDidMount() {
        axios.get(`http://localhost:9000/country/continent`)
            .then(res => {
                let america = res.data.filter(country => country.continent === "America");
                let asia = res.data.filter(country => country.continent === "Asia");
                let europe = res.data.filter(country => country.continent === "Europe");
                this.setState({ america, asia, europe });
            });
    };

    render() {
        return <>
            <div className='continent-container'>
                <Col className="continent-label">
                    <h1 value="America">América</h1>
                </Col>
                <Row className='flagContainer'>
                    {
                        this.state.america.map(country => (
                            <Link to={{
                                pathname: `/country/${country.country_name}`,
                            }}>
                                <Country name={country.country_name} url={country.country_url} />
                            </Link>
                        )
                        )
                    }
                </Row>
            </div>
            <div className='continent-container'>
                <Col className="continent-label">
                    <h1 value="Asia">Asia</h1>
                </Col>
                <Row className='flagContainer'>
                    {
                        this.state.asia.map(country => (
                            <Link to={{
                                pathname: `/country/${country.country_name}`,
                            }}>
                                <Country name={country.country_name} url={country.country_url} />
                            </Link>
                        )
                        )
                    }
                </Row>
            </div>
            <div className='continent-container'>
                <Col className="continent-label">
                    <h1 value="Europe">Europa</h1>
                </Col>
                <Row className='flagContainer'>
                    {
                        this.state.europe.map(country => (
                            <Link to={{
                                pathname: `/country/${country.country_name}`,
                            }}>
                                <Country name={country.country_name} url={country.country_url} />
                            </Link>
                        )
                        )
                    }
                </Row>
            </div>
        </>
    };
};

export default Explore;