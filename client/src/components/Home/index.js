import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import Banner from '../Banner';
import './home.css';
import ComicsData from '../../services/comics-home.json';
import ComicHome from '../ComicHome/index';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        
       return <Container id="home">
           <Banner/>
           <Row id="comic-container">
               { 
                   ComicsData.map(comic => (
                    <Link to={{
                        pathname: `/comic/${comic.id}`,
                        state: {comicToUse: comic}
                }}>
                        <ComicHome comicToUse={comic}/>
                    </Link>
                       
                   )
                )
               }
           </Row>
       </Container>
    }
}

export default Home;

//src = {comic.image_url} url = {comic.next_page}