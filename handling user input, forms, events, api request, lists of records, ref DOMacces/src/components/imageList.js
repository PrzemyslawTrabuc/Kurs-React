import React from 'react';
import './imageList_style.css'
import ImageCard from "./imageCard";

const ImageList = (props) => {

    const images = props.images.map((image) => {
        return (<ImageCard key={image.id} image={image}/>)
    });
    return(
        <div className="images_list">
            {images}
        </div>
    )
}

export default ImageList;