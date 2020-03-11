import React from 'react';
import Image from 'react-bootstrap/Image';
import {Row} from 'reactstrap';
import './comment.css';
import ProfilePhoto from '../../utilities/Sarahi.jpg'

function CommentLeft(props) {
    const { User, Flag } = props
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
                            <p>Hola</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Row>
    </>
    }
  export default CommentLeft;