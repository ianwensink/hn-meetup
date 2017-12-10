import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BaseComponent extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <main className='main-wrapper'>
        {this.props.children}
      </main>
    );
  }
}

export default BaseComponent;
