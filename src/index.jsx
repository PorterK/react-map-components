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
  }

  static defaultProps = {
    wrapper: 'div',
  }

  render() {
    const { for: propsArray, component: Child, wrapper, ...wrapperProps } = this.props;

    return React.createElement(
      wrapper,
      filterInvalidDOMProps(wrapperProps),
      propsArray.map(props => <Child {...props} />));
  }
}
