import React, { Component, DOM } from 'react';
import PropTypes from 'prop-types';

export default class ReactMap extends Component {
  static propTypes = {
    for: PropTypes.array,
    component: PropTypes.element,
    wrapper: PropTypes.string
  }
  render() {
    const { for: propsArray, component: Child, wrapper } = this.props;

    const Component = React.DOM[wrapper];

    return (
      <Component>
      {
        propsArray.map(props => <Child { ...props } />)
      }
      </Component>
    );
  }
}
