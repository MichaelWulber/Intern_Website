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
      <div key={item.title}>
        <Path
          title={item.title}
          type={item.cssClass}
          description={item.description}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="pathsSection">
        {this.renderPaths()}
      </div>
    );
  }
}

export default PathsSection;
