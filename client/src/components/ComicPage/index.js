import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import "./comicPage.css";
import Image from 'react-bootstrap/Image';
import savedGray from '../../utilities/savedGray.png';
import share from "../../utilities/share.png";
import favorites from "../../utilities/favoritesGray.png";
import favoritesYellow from "../../utilities/favoritesYellow.png";
import comments from "../../utilities/comments.png";
import saved from "../../utilities/saved.png";
import commentsGray from '../../utilities/commentsGray.png';
import CommentLeft from '../CommentLeft';
import CommentRight from '../CommentRight';
import CommentText from '../CommentText';
import axios from 'axios';


class Comic extends Component{
    constructor(props){
        super(props)

        this.state = {
            favorite: false,
            saved: false,
            comment: false,
            value: "",
            commentsArray: [{}],
            comic: {}
        }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }   

    componentDidMount(){
        let id = parseInt(this.props.match.params.id);
        axios.get(`http://localhost:9000/comics/${id}`).
        then(res => {
            this.setState({ comic: res.data.info, 
                favorite: res.data.liked,
                saved: res.data.saved,
                commentsArray: res.data.comments
                });
          });
    };
    updateLike = () => {
        let id = parseInt(this.props.match.params.id);
        if (this.state.favorite){
            axios.delete(`http://localhost:9000/comics/deleteliked?comic=${id}`).
            then(res => {
                console.log(res.data);
                this.setState({
                    favorite: false
                  });
            });
        }
        else{
            axios.put(`http://localhost:9000/comics/addliked?comic=${id}`).
            then(res => {
                console.log(res.data);
                this.setState({
                    favorite: true,
                  });
            });
        }
    };

    updateSaved = () => {
        let id = parseInt(this.props.match.params.id);
        if (this.state.saved){
            axios.delete(`http://localhost:9000/comics/deletesaved?comic=${id}`).
            then(res => {
                console.log(res.data);
                this.setState({
                    saved: false
                  });
            });
        }
        else{
            axios.put(`http://localhost:9000/comics/addsaved?comic=${id}`).
            then(res => {
                console.log(res.data);
                this.setState({
                    saved: true
                  });
            });
        }
    };

    addTextComment = () => {
        if(this.state.comment){
            this.setState({
                comment: false
            });
        }
        else{
            this.setState({
                comment: true
            });
        }
    };

    deleteComment = (id_comment) => {
        let id_comic = parseInt(this.props.match.params.id);
        console.log(id_comment, id_comic)
        axios.put(`http://localhost:9000/comments/delete?comment=${id_comment}&comic=${id_comic}`)
        .then(res => {
            let copyComments = [...res.data];
            this.setState({commentsArray: copyComments});
    });
}

    handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value}, 
        ()=> {console.log(this.state.value);});
      }

  handleSubmit() {
    let id_comic = parseInt(this.props.match.params.id);
    let comment = this.state.value;
    let id_user = this.props.user.id_user;
      if(this.state.value !== null){
        axios.post(`http://localhost:9000/comments/add?comic=${id_comic}&user=${id_user}&comment=${comment}`)
        .then(res => {
            let copyComments = [...res.data];
            this.setState({commentsArray: copyComments}, this.addTextComment());
        });
      }
  };

    render(){
        const { 
            title, 
            description, 
            name, 
            country_url,
            user_img, 
            image_url,
            } = this.state.comic;

       return <Col md="6" id="comic-page">
           <Row id="image-comic">
               <Image src = {image_url} />
           </Row>
           <Row id="comments">
               <Col md="2" id="comments-profile">
                    <Image roundedCircle src = {user_img}></Image>
               </Col>
               <Col md="7" id="comments-data">
                    <h5>{title}</h5>
                    <span>
                    <label><strong>Por: </strong> {name}</label>
                    <Image src={country_url} />
                    </span>
                    <h6>{description}</h6>
               </Col>
               <Col md="3" id="icon-group">
                   <button onClick={() => this.updateLike()}>
                       {
                        this.state.favorite ?
                        <img className="icon" alt="Favorites" src= {favoritesYellow} /> :
                        <img className="icon" alt="Favorites" src= {favorites} />
                       }
                   </button>
                   <button onClick={() => this.addTextComment()}>
                      {
                        this.state.comment ?
                        <img className="icon" alt="Comment" src={comments} /> :
                        <img className="icon" alt="Comment" src={commentsGray} />
                       }
                   </button>
                   <button onClick={() => this.updateSaved()}>
                       {
                        this.state.saved ?
                        <><img className="icon" alt="Saved" src={saved} /> </> :
                        <img className="icon" alt="Saved" src={savedGray} />
                       }
                        
                   </button>
                   <button>
                        <img className="icon" alt="Share" src={share} />
                   </button>
               </Col>
           </Row>
           { 
                this.state.commentsArray.map(c => (
                    this.state.commentsArray.indexOf(c) % 2 === 0 ? 
                        <CommentLeft value={c} deleteComment={this.deleteComment} user={this.props.user} /> :
                        <CommentRight value={c} deleteComment={this.deleteComment} user={this.props.user} />
                ))
            }
           {
               this.state.comment ? <CommentText 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit} /> : null
           }
        </Col>
    }
}
export default Comic;