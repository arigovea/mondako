import React from 'react';
import Image from 'react-bootstrap/Image';
import {Row} from 'reactstrap';
import '../CommentLeft/comment.css';
import ProfilePhoto from '../../utilities/Sarahi.jpg'

function CommentRight(props) {
    const { User, Flag } = props
    return <>
    <Row className="commentIcon">
        <div className="commentBox">
            <div className="dialogbox">
                    <div class="body">
                        <span className="tip tip-right"></span>
                    <div className="message-right">
                        <span className="right">
                            <label>{User}</label>
                            <img src={Flag} />
                        </span>
                        <span className="right">
                            <p>Hola</p>
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