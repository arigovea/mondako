import React from 'react';
import Image from 'react-bootstrap/Image'
import './comicHome.css';

function ComicHome(props) {
    const { image_url } = props;
    return <Image src={image_url} rounded />
};

export default ComicHome;