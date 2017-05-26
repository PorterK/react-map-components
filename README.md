# React Map Components
A componentized utility for idiomatically rendering desired components based on an array of objects.

## Example Implementation

```js
  // MainComponent.js

  import React, { Component } from 'react';
  import MapComponents from 'react-map-components';

  import CustomComponent from './CustomComponent';

  export default class MainComponent extends Component {
    render() {
      // NOTE: Generally this data is pulled from the redux store or
      // component state.
      const data = [
        {
          id: 'first',
          name: 'First Data',
          data: 12038123812
        },
        {
          id: 'second',
          name: 'Second Data',
          data: 123123128921
        }
      ];

      return (
        <MapComponents component={CustomComponent} for={data} />
      );
    }
  }

```

```js
// CustomComponent.js

import React, { Component } from 'react';

export default class CustomComponent extends Component {
  render() {
    const { id, name, data } = this.props;

    return (
      <div id={id}>
        <h1>{name}</h1>
        <p>{data}</p>
      </div>
    );
  }
}

```


## Example Migration

Old code

```js
// in render
  const componentsData = [...someData];
  const otherComponentData = [...someOtherData]

  // This example is for a static number of components, we expect the use case
  // will be for a dynamic number of components.

  // Notice that this way of doing things is very bug prone.
  return (
    <div>
      <Component { ...componentsData[0] } />
      <Component { ...componentsData[1] } />
      <Component { ...componentsData[2] } />
    </div>

    <span>
      <OtherComponent { ...otherComponentsData[1] } />
      <OtherComponent { ...otherComponentsData[4] } />
      <OtherComponent { ...otherComponentsData[3] } />
    </span>
  );
```

New code

```js
// before class declaration

import MapComponents from 'react-map-components';

// in render

  // Each array contains multiple objects, each object is a set of props
  // or data to be sent directly to the child components.
  const componentsData = [...someData];
  const otherComponentsData = [...someOtherData];

  // If the wrapper prop is not specified, it defaults to div.
  return (
    <MapComponents component={Component} for={componentsData} />

    <MapComponents
      component={OtherComponent}
      for={otherComponentsData}
      wrapper='span' />
  );
```
