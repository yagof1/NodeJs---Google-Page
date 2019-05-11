import React from 'react';
import './Image.css'

const Image = ({source,className}) => (
    <div className={className === undefined ? "image-container" : className + " image-container"}>
        <img src={require(`../../assets/img/${source}`)}/>
    </div>
);

export default Image;