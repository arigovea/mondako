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


class Comic extends Component{
    constructor(props){
        super(props)

        this.state = {
            favorite: false,
            saved: false,
            comment: false,
            value: "",
            commentsArray: []
        }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }    

    addlike = () => {
        if (this.state.favorite){
            this.setState({
                favorite: false
              });
        }
        else{

            this.setState({
                favorite: true
              });
        }
    };

    addSaved = () => {
        if (this.state.saved){
            this.setState({
                saved: false
              });
        }
        else{
            this.setState({
                saved: true
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

    deleteComment = (value) => {
        let copyComments = [...this.state.commentsArray];
        let findComment = copyComments.findIndex(comment => comment === value);
        copyComments.splice(findComment, 1);
        this.setState({commentsArray: copyComments});
    };


    handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value}, 
        ()=> {console.log(this.state.value);});
      }

  handleSubmit() {
      if(this.state.value !== null){
        let copyComments = [...this.state.commentsArray];
        copyComments.push(this.state.value);
        this.setState({commentsArray: copyComments}, this.addTextComment());
      }
  };

    render(){
        const { 
            title, 
            description, 
            created_by, 
            image_country,
            image_author, 
            image_url,
            } = this.props.location.state.comicToUse;
            const User = this.props.UserName;
            const Flag = this.props.UserCountry;
            console.log(this.props)

       return <Col md="6" id="comic-page">
           <Row id="image-comic">
               <Image src = {image_url} />
           </Row>
           <Row id="comments">
               <Col md="2" id="comments-profile">
                    <Image roundedCircle src = {image_author}></Image>
               </Col>
               <Col md="7" id="comments-data">
                    <h5>{title}</h5>
                    <span>
                    <label><strong>Por: </strong> {created_by}</label>
                    <Image src={image_country} />
                    </span>
                    <h6>{description}</h6>
               </Col>
               <Col md="3" id="icon-group">
                   <button onClick={() => this.addlike()}>
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
                   <button onClick={() => this.addSaved()}>
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
                        <CommentLeft value={c} User={User} Flag={Flag} deleteComment={this.deleteComment} /> :
                        <CommentRight value={c} User={User} Flag={Flag} deleteComment={this.deleteComment} />
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