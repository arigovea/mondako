import React from 'react';
import Image from 'react-bootstrap/Image';
import {Row} from 'reactstrap';
import '../CommentLeft/comment.css';
import ProfilePhoto from '../../utilities/Sarahi.jpg';
import Delete from '../../utilities/delete.png'; 

function CommentRight(props) {
    const { User, Flag, value} = props
    return <>
    <Row className="commentIcon">
        <div className="commentBox">
            <div className="dialogbox">
                    <div class="body">
                        <button onClick={() => props.deleteComment(value)}>
                            <img className="icon" id = "delete-left" alt="Delete" src= {Delete} />
                        </button>
                        <span className="tip tip-right"></span>
                    <div className="message-right">
                        <span className="right">
                            <label>{User}</label>
                            <img src={Flag} />
                        </span>
                        <span className="right">
                            <p>{value}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="PhotoComment-right">
            <Image src={ProfilePhoto} roundedCircle/> 
        </div>
    </Row>
    </>
    }
  export default CommentRight;