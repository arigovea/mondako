import React, { Component } from 'react';
import { FormGroup } from 'reactstrap';
import './comment-text.css';

class CommentText extends Component{
    render(){
       return <FormGroup id="comment-group" >
       <input type="textarea" name="text" placeholder="Agrega un comentario" 
        onChange={v => this.props.onChange(v)} />
       <button id="comment-button" onClick={() => this.props.onSubmit()} >Publicar</button>
     </FormGroup>
    }
}

export default CommentText;
