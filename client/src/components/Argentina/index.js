import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import Argentina from '../../services/comics-argentina.json';
import ComicHome from '../ComicHome/index';
import {Link} from 'react-router-dom';

class Explore extends Component{
    render(){
        
       return <Container id="home">
           <Row id="comic-container">
               { 
                   Argentina.map(comic => (
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

export default Explore;
