import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Banner from '../Banner';
import './home.css';
import ComicHome from '../ComicHome/index';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  state = {
    comics: []
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/comics/popular`)
      .then(res => {
        const comics = res.data;
        this.setState({ comics });
      });
  };
  render() {
    return <Container id="home">
      <Banner />
      <Row id="comic-container">
        {
          this.state.comics.map(comic => (
            <Link key={comic.id_comic} to={{
              pathname: `/comic/${comic.id_comic}`
            }}>
              <ComicHome image_url={comic.image_url} />
            </Link>

          )
          )
        }
      </Row>
    </Container>
  };
};

export default Home;
