import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import ComicHome from '../ComicHome/index';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CountryPage extends Component{
    state = {
        comics: []
      };

    componentDidMount() {
        const country = this.props.match.params.country_name;
        axios.get(`http://localhost:9000/comics/country?country=${country}`)
          .then(res => {
              let comics = [...res.data];
              this.setState({ comics });
          })
      }
    render(){
       return <Container id="home">
           <Row id="comic-container">
               {
                   this.state.comics.map(comic => (
                    <Link to={{
                        pathname: `/comic/${comic.id_comic}`,
                }}>
                        <ComicHome image_url={comic.image_url}/>
                    </Link>
                   
                    ))
                }
           </Row>
       </Container>
    }
}

export default CountryPage;
