import 'babel-polyfill';
import React, { Component } from 'react';
import ReactTestRenderer from 'react-test-renderer';
import expect from 'expect';

import MapComponents from '../src';

const data = [
  {
    id: 0,
    className: 'firstClass',
    data: 300,
    key: 0
  },
  {
    id: 1,
    className: 'secondClass',
    data: 500,
    key:1
  },
  {
    id: 2,
    className: 'thirdClass',
    data: 700,
    key: 2
  }
];

class WrappedComponent extends Component {
  render() {
    const { id, className, data } = this.props;
    return (
      <p id={id} className={className}>{data}</p>
    );
  }
}

class TestComponent extends Component {
  render() {

    return (
      <MapComponents for={data} component={WrappedComponent} />
    );
  }
}

describe('MapComponent', () => {

  let wrapper;
  let output;
  beforeEach(() => {
    wrapper = ReactTestRenderer.create(<TestComponent />);
    output = wrapper.toJSON();
  });

  it('maps the correct number of components', () => {
    expect(output.children.length).toEqual(3);
  });

  it('maps the correct props', () => {
    output.children.map((child, index) => {
      expect(child.props.id).toEqual(data[index].id);
    })
  });

});
