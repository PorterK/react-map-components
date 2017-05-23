import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReactMap extends Component {
  static propTypes = {
    for: PropTypes.array,
    component: PropTypes.element
  }
  render() {
    const { for: propsArray, component: Child } = this.props;
    return (
      <div>
      {
        propsArray.map(props => <Child { ...props } />)
      }
      </div>
    );
  }
}
