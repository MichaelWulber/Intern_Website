import React from 'react';
import './MenuBar.css';
import MenuItem from './MenuItem';

const MenuBar = () =>
  <div className="menu_bar">
    <MenuItem name="Florida Blue Interns"/>
    <MenuItem name="internships"/>
    <MenuItem name="information"/>
    <MenuItem name="apply now"/>
  </div>

export default MenuBar;
