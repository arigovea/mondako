import React from 'react';
import Image from 'react-bootstrap/Image';
import {Row} from 'reactstrap';
import './comment.css';
import ProfilePhoto from '../../utilities/Sarahi.jpg';
import Delete from '../../utilities/delete.png';

function CommentLeft(props) {
    console.log(props.deleteComment)
    const { User, Flag, value } = props
    return <>
    <Row className="commentIcon">
        <div className="PhotoComment-left">
            <Image src={ProfilePhoto} roundedCircle/> 
        </div>
        <div className="commentBox">
            <div className="dialogbox">
                    <div class="body">
                        <span className="tip tip-left"></span>
                    <div className="message-left">
                        <span>
                            <label>{User}</label>
                            <img src={Flag} />
                        </span>
                        <span>
                            <p>{value}</p>
                        </span>
                    </div>
                    <button onClick={() => props.deleteComment(value)}>
                         <img className="icon" id = "delete-right" alt="Delete" src= {Delete} />
                    </button>
                </div>
            </div>
        </div>
    </Row>
    </>
    }
  export default CommentLeft;