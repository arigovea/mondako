import React, {Component} from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comic from './components/ComicPage';
import Explore from './components/Explore';
import Home  from './components/Home';
import Menu from './components/Menu';
import NearYou from './components/NearYou';
import Forum from './components/Forum';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Favorites from './components/Favorites';
import Saved from './components/Saved';
import Settings from './components/Settings';
import Donations from './components/Donations';
import CountryPage from './components/CountryPage';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
        user: {}
      }
  }
componentDidMount(){
  let userLogin = "sarahigovea";
    axios.get(`http://localhost:9000/users/${userLogin}`).then(res => {
      let user=res.data[0]
        this.setState({ user });
      });
  };

  render(){
    return <Router>
      <Menu user={this.state.user} />
      <Container id = "general-container">
      <Row>
        <Col md='12'>
        <Switch>
          <Route path='/explore'>
            <Explore />
          </Route>
            <Route 
            path='/country/:country_name'
            render={(props) => <CountryPage {...props} />} />
          <Route path='/messages'>
            <Messages />
          </Route>
          <Route 
             path='/users/:mondako_url'
             render={(props) => <Profile {...props} />} /> 
          <Route path='/settings'>
            <Settings />
          </Route>
          <Route path='/donations'>
            <Donations />
          </Route>
          <Route 
            path='/favorites/:mondako_url'
            render={(props) => <Favorites {...props} />} />
          <Route 
            path='/saved/:mondako_url'
            render={(props) => <Saved {...props} />} />
          <Route path='/forum'>
            <Forum />
          </Route>
          <Route path='/nearyou'>
            <NearYou />
          </Route>
          <Route
              path='/comic/:id'
              render={(props) => <Comic {...props} user={this.state.user} />} />
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
