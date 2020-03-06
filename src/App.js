import React, {Component} from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comic from './components/Comic';
import Explore from './components/Explore';
import Home  from './components/Home';
import Menu from './components/Menu';
import NearYou from './components/NearYou';
import Forum from './components/Forum'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      comics: []
    }
  }

  render(){
    return <Router>
      <Menu/>
      <Container id = "general-container">
      <Row>
        <Col md='12'>
        <Switch>
          <Route path='/explore'>
            <Explore />
          </Route>
          <Route path='/forum'>
            <Forum />
          </Route>
          <Route path='/nearyou'>
            <NearYou />
          </Route>
          <Route path = '/comic'/>
          <Route path = "/">
            <Home />
            </Route>
          </Switch>
        </Col>
      </Row>
      </Container>
    </Router>
  }
}

export default App;
