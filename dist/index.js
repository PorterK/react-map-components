'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _filterInvalidDomProps = require('filter-invalid-dom-props');

var _filterInvalidDomProps2 = _interopRequireDefault(_filterInvalidDomProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapComponents = function (_Component) {
  _inherits(MapComponents, _Component);

  function MapComponents() {
    _classCallCheck(this, MapComponents);

    return _possibleConstructorReturn(this, (MapComponents.__proto__ || Object.getPrototypeOf(MapComponents)).apply(this, arguments));
  }

  _createClass(MapComponents, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          propsArray = _props.for,
          Child = _props.component,
          wrapper = _props.wrapper,
          transform = _props.transform,
          wrapperProps = _objectWithoutProperties(_props, ['for', 'component', 'wrapper', 'transform']);

      return _react2.default.createElement(wrapper, transform, (0, _filterInvalidDomProps2.default)(wrapperProps), propsArray.map(function (props) {
        return _react2.default.createElement(Child, props);
      }));
    }
  }]);

  return MapComponents;
}(_react.Component);

MapComponents.propTypes = {
  for: _propTypes2.default.array.isRequired,
  component: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]).isRequired,
  wrapper: _propTypes2.default.string,
  transform: _propTypes2.default.string
};
MapComponents.defaultProps = {
  wrapper: 'div',
  transform: 'none'
};
exports.default = MapComponents;