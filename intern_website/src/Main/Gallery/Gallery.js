import React from 'react';
import "./Gallery.css";
import GalleryManager from './GalleryManager';

const Gallery = () => {
    return ( 
        <div className="gallery-section">
            <h2>Gallery</h2>
            <GalleryManager />
        </div>
    );
}   
 
export default Gallery;