import React from 'react';
import './MenuItem.css';

const MenuItem = (props) =>
  <div className="menu_item">
    <p>{props.name}</p>
  </div>

export default MenuItem;
