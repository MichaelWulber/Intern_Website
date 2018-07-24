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
            <div className={"gallery-container"}>
                <a className="next">&#10094;</a>
                <img 
                src="dining.jpg" 
                alt="campus"
                onClick={this.nextPicure.bind(this)}></img>
                <a className="prev">&#10095;</a>
            </div>
         );
    }
}

export default GalleryManager;