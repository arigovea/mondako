import React from 'react';
import Image from 'react-bootstrap/Image';
import { Row } from 'reactstrap';
import '../CommentLeft/comment.css';
import Delete from '../../utilities/delete.png';

function CommentRight(props) {
    const { comment, id_comment, name, country_url, user_img } = props.value;
    return <Row className="commentIcon">
        <div className="commentBox">
            <div className="dialogbox">
                <div className="body">
                    {props.user.name === name ?
                        <button onClick={() => props.deleteComment(id_comment)}>
                            <img className="icon" id="delete-left" alt="Delete" src={Delete} />
                        </button> : null
                    }
                    <span className="tip tip-right"></span>
                    <div className="message-right">
                        <span className="right">
                            <label>{name}</label>
                            <img alt="Country" src={country_url} />
                        </span>
                        <span className="right">
                            <p>{comment}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="PhotoComment-right">
            <Image src={user_img} roundedCircle />
        </div>
    </Row>
};

export default CommentRight;