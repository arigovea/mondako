import React from 'react';
import Image from 'react-bootstrap/Image';
import {Row} from 'reactstrap';
import './comment.css';
import Delete from '../../utilities/delete.png';

function CommentLeft(props) {
    const { comment, id_comment } = props.value;
    const { name, country_url, user_img } = props.user;
    return <>
    <Row className="commentIcon">
        <div className="PhotoComment-left">
            <Image src={user_img} roundedCircle/> 
        </div>
        <div className="commentBox">
            <div className="dialogbox">
                    <div class="body">
                        <span className="tip tip-left"></span>
                    <div className="message-left">
                        <span>
                            <label>{name}</label>
                            <img src={country_url} />
                        </span>
                        <span>
                            <p>{comment}</p>
                        </span>
                    </div>
                    <button onClick={() => props.deleteComment(id_comment)}>
                         <img className="icon" id = "delete-right" alt="Delete" src= {Delete} />
                    </button>
                </div>
            </div>
        </div>
    </Row>
    </>
    }
  export default CommentLeft;