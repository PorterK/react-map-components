import React, { Component } from 'react';
import PropTypes from 'prop-types';
import filterInvalidDOMProps from 'filter-invalid-dom-props';

export default class MapComponents extends Component {
  static propTypes = {
    for: PropTypes.array.isRequired,
    component: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]).isRequired,
    wrapper: PropTypes.string,
    transform: PropTypes.string,
  }

  static defaultProps = {
    wrapper: 'div',
    transform: 'none',
  }

  render() {
    const { for: propsArray, component: Child, wrapper, transform, ...wrapperProps } = this.props;

    const domProps = filterInvalidDOMProps(wrapperProps);

    return React.createElement(
      wrapper,
      { ...domProps, transform },
      propsArray.map(props => <Child {...props} />));
  }
}
