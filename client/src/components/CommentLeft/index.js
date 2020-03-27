import React from 'react';
import Image from 'react-bootstrap/Image';
import { Row } from 'reactstrap';
import './comment.css';
import Delete from '../../utilities/delete.png';

function CommentLeft(props) {
    const { comment, id_comment, name, country_url, user_img } = props.value;
    return <Row className="commentIcon">
        <div className="PhotoComment-left">
            <Image src={user_img} roundedCircle />
        </div>
        <div className="commentBox">
            <div className="dialogbox">
                <div className="body">
                    <span className="tip tip-left"></span>
                    <div className="message-left">
                        <span>
                            <label>{name}</label>
                            <img alt="Country" src={country_url} />
                        </span>
                        <span>
                            <p>{comment}</p>
                        </span>
                    </div>
                    {props.user.name === name ?
                        <button onClick={() => props.deleteComment(id_comment)}>
                            <img className="icon" id="delete-right" alt="Delete" src={Delete} />
                        </button> : null
                    }
                </div>
            </div>
        </div>
    </Row>
};

export default CommentLeft;