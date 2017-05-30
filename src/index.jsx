import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MapComponents extends Component {
  static propTypes = {
    for: PropTypes.array.isRequired,
    component: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]).isRequired,
    wrapper: PropTypes.string,
  }

  static defaultProps = {
    wrapper: 'div',
  }

  render() {
    const { for: propsArray, component: Child, wrapper } = this.props;

    return React.createElement(
      wrapper,
      this.props,
      propsArray.map(props => <Child {...props} />));
  }
}
