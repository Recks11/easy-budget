import React, { Component } from 'react';
import { AppContext } from '../context/AppContext';
import Button from './Button';

class Header extends Component {
  static contextType = AppContext

  render () {
    const { name } = this.context
    return (
      <div>
        <h2> { name } </h2>
      </div>
    );
  }
}

export default Header;
