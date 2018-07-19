import React, { Component } from 'react';
import './PathsSection.css';
import Path from './Path';

class PathsSection extends Component {
  constructor(props) {
    super(props);
    this.state = { paths: this.props.paths };
  }
  

  renderPaths = () => {
    return this.state.paths.map(item =>
      <Path
        title={item.title}
        type={item.cssClass}
      />
    );
  }

  doThing = () => {
    return('thing');
  }

  render() {
    console.log(this.state.paths);
    return (
      <div className="pathsSection">
        {this.renderPaths()}
      </div>
    );
  }
}

export default PathsSection;
