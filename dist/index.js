"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
require("./index.less");
var _react = require("react");
var _excluded = ["text", "color", "type", "iconPrefix"];
/*
 * @CreatDate: 2021-03-31 17:10:51
 * @Describe: 状态组件
 */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = function _default(props) {
  var text = props.text,
    _props$color = props.color,
    color = _props$color === void 0 ? '#5D7092' : _props$color,
    _props$type = props.type,
    type = _props$type === void 0 ? 'dot' : _props$type,
    iconPrefix = props.iconPrefix,
    style = (0, _objectWithoutProperties2.default)(props, _excluded);
  var dom;
  if (type === "dot") {
    //点
    dom = /*#__PURE__*/React.createElement("span", {
      className: "lb-status",
      style: _objectSpread({
        color: color
      }, style)
    }, iconPrefix ? iconPrefix : /*#__PURE__*/React.createElement("b", {
      style: {
        background: color
      }
    }), text);
  }
  if (type === 'ring') {
    // 环
    dom = /*#__PURE__*/React.createElement("span", {
      className: "lb-status2"
    }, /*#__PURE__*/React.createElement("span", {
      style: _objectSpread({
        borderColor: color
      }, style)
    }, iconPrefix ? iconPrefix : /*#__PURE__*/React.createElement("i", {
      style: {
        background: color
      }
    })), text);
  }
  return text ? /*#__PURE__*/React.createElement("div", null, dom) : '--';
};
exports.default = _default;