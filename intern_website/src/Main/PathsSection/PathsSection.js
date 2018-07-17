import React, { Component } from 'react';
import './PathsSection.css';
import Path from './Path';

class PathsSection extends Component {
  state = {
    paths: this.props.paths,
  };

  renderPaths = () => {
    return this.state.paths.map(item =>
      <Path
        title={item.title}
        type={item.css_class}
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
