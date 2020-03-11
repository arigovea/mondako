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


class Comic extends Component{
    constructor(props){
        super(props)

        this.state = {
            favorite: false,
            saved: false,
            comment: false
        }
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

    addComment = () => {
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
                   <button onClick={() => this.addComment()}>
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
           <CommentLeft User={User} Flag={Flag} />
           <CommentRight User={User} Flag={Flag} />
        </Col>
    }
}
export default Comic;