'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var P = function (_React$Component) {
    _inherits(P, _React$Component);

    function P(props) {
        _classCallCheck(this, P);

        var _this = _possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, props));

        _this.pStyle = {

            fontSize: '1.2rem',
            lineHeight: '1.71',
            display: 'block',
            marginBottom: '10px'
        };
        if (_this.props.align) {
            _this.pStyle = Object.assign(_this.pStyle, { textAlign: _this.props.align });
        }
        if (_this.props.fntSz) {
            _this.pStyle = Object.assign(_this.pStyle, { fontSize: _this.props.fntSz });
        }
        if (_this.props.fntWt) {
            _this.pStyle = Object.assign(_this.pStyle, { fontWeight: _this.props.fntWt });
        }
        if (_this.props.color) {
            _this.pStyle = Object.assign(_this.pStyle, { color: _this.props.color });
        }
        return _this;
    }

    _createClass(P, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'p',
                { style: this.pStyle },
                this.props.children
            );
        }
    }]);

    return P;
}(_react2.default.Component);

P.propTypes = {};

exports.default = P;