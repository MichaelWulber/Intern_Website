import React, { Component } from 'react';
import "./Gallery.css"

class GalleryManager extends Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    nextPicure = () => {
        console.log("hello")
    }
    render() { 

        return (
            <div className="gallery-container">
                <img 
                src="dining.jpg" 
                alt="campus"
                onClick={this.nextPicure.bind(this)}></img>
            </div>
         );
    }
}

export default GalleryManager;