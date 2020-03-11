import React, { Component } from 'react';
import Image from "react-bootstrap/Image";
import technical from "../../utilities/technical.gif"

class Forum extends Component{
    render(){
       return <>
       <span>
           <label>Próximamente</label>
           <Image className = "technical-difficulties" src={technical} />
       </span>
       </>
    }
}
export default Forum;