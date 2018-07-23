import React, { Component } from 'react';
import "./Gallery.css"

class GalleryManager extends Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    
    render() { 

        return (
            <div className="gallery-container">
                <img src="campus.png" alt="campus"></img>
            </div>
         );
    }
}

export default GalleryManager;