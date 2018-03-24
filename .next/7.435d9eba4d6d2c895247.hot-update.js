webpackHotUpdate(7,{

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(469);

var _web = __webpack_require__(971);

var _web2 = _interopRequireDefault(_web);

var _campaign = __webpack_require__(1159);

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/carlosdpd/Desktop/kickstart/components/RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      var readyToFinalize = request.approvalCount > approversCount / 2;

      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, ' ', id, ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, ' ', request.description, ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, ' ', _web2.default.utils.fromWei(request.value, 'ether'), ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, ' ', request.recipient, ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, ' ', request.approvalCount, '/', approversCount, ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaW5nIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFFSixxRkFBWSxtQkFBQTtvQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFFSjtBQUZJLHlCQUVRLHdCQUFTLE1BQUEsQUFBSyxNQUZ0QixBQUVRLEFBQW9COzhCQUY1QjtxQkFJYSxjQUFBLEFBQUssSUFKbEIsQUFJYSxBQUFTOztpQkFBMUI7QUFKSSxrQ0FBQTs4QkFBQTs4QkFLSixBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0JBQzdDLFNBTkUsQUFLSixBQUFvRCxBQUNsRCxBQUFTO0FBRHlDLEFBQ3hELGVBREk7O2lCQUxJO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0EsZSxBQVVaLHNGQUFhLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUVMO0FBRksseUJBRU8sd0JBQVMsTUFBQSxBQUFLLE1BRnJCLEFBRU8sQUFBb0I7K0JBRjNCO3FCQUlZLGNBQUEsQUFBSyxJQUpqQixBQUlZLEFBQVM7O2lCQUExQjtBQUpLLG1DQUFBOytCQUFBOzhCQUtMLEFBQVMsUUFBVCxBQUFpQixnQkFBZ0IsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLElBQTVDLEFBQWdEO3NCQUM5QyxTQU5HLEFBS0wsQUFBcUQsQUFDbkQsQUFBUztBQUQwQyxBQUN6RCxlQURJOztpQkFMSztpQkFBQTsrQkFBQTs7QUFBQTttQkFBQTtBOzs7Ozs2QkFVTDtVQUFBLEFBRUUsTUFGRixBQUVnQix1QkFGaEIsQUFFRTtVQUZGLEFBRU8sT0FGUCxBQUVnQix1QkFGaEIsQUFFTzttQkFDeUIsS0FIaEMsQUFHcUM7VUFIckMsQUFHQyxZQUhELEFBR0M7VUFIRCxBQUdLLGlCQUhMLEFBR0s7VUFITCxBQUdjLHdCQUhkLEFBR2MsQUFDcEI7O1VBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQStELEFBRS9EOzs2QkFDRyxjQUFELE9BQUssVUFBVSxRQUFmLEFBQXVCLFVBQVUsVUFBVSxtQkFBbUIsQ0FBQyxRQUEvRCxBQUF1RTtvQkFBdkU7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVEsS0FBUixJQURGLEFBQ0UsQUFDQSxzQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBUSxhQUFSLEFBQWdCLGFBRmxCLEFBRUUsQUFDQSxzQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBUSxtQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BQW5DLEFBQVEsQUFBa0MsVUFINUMsQUFHRSxBQUNBLHNCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFRLGFBQVIsQUFBZ0IsV0FKbEIsQUFJRSxBQUNBLHNCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFRLGFBQVIsQUFBZ0IsZUFBZ0IsS0FBaEMsZ0JBTEYsQUFLRSxBQUNBLHNCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGlCQUNHLEFBQVEsV0FBUixBQUFtQix1QkFDaEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDO29CQUExQztzQkFBQTtBQUFBO09BQUEsRUFSUixBQU1FLEFBRU0sQUFNTiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNDO0FBREQ7QUFBQSxpQkFDQyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2hCLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsU0FBUyxLQUFwQyxBQUF5QztvQkFBekM7c0JBQUE7QUFBQTtPQUFBLEVBakJSLEFBQ0UsQUFjRSxBQUVJLEFBU1Q7Ozs7O0FBdERzQixBLEFBMER6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2Nhcmxvc2RwZC9EZXNrdG9wL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/carlosdpd/Desktop/kickstart/components/RequestRow.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/carlosdpd/Desktop/kickstart/components/RequestRow.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy40MzVkOWViYTRkNmQyYzg5NTI0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzPzRhN2Q1ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSAgJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IENhbXBhaW5nIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcblxuY2xhc3MgUmVxdWVzdFJvdyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgb25BcHByb3ZlID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgY29uc3QgY2FtcGFpZ24gPSAgQ2FtcGFpbmcodGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xuICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICB9KVxuICB9O1xuXG4gIG9uRmluYWxpemUgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBjb25zdCBjYW1wYWlnbiA9ICBDYW1wYWluZyh0aGlzLnByb3BzLmFkZHJlc3MpO1xuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZmluYWxpemVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xuICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICB9KVxuICB9O1xuXG4gIHJlbmRlcigpe1xuXG4gICAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xuICAgIGNvbnN0IHtpZCwgcmVxdWVzdCwgYXBwcm92ZXJzQ291bnR9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCByZWFkeVRvRmluYWxpemUgPSByZXF1ZXN0LmFwcHJvdmFsQ291bnQgPiBhcHByb3ZlcnNDb3VudC8yO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPFJvdyBkaXNhYmxlZD17cmVxdWVzdC5jb21wbGV0ZX0gcG9zaXRpdmU9e3JlYWR5VG9GaW5hbGl6ZSAmJiAhcmVxdWVzdC5jb21wbGV0ZX0+XG4gICAgICAgIDxDZWxsPiB7aWR9IDwvQ2VsbD5cbiAgICAgICAgPENlbGw+IHtyZXF1ZXN0LmRlc2NyaXB0aW9ufSA8L0NlbGw+XG4gICAgICAgIDxDZWxsPiB7d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsICdldGhlcicpfSA8L0NlbGw+XG4gICAgICAgIDxDZWxsPiB7cmVxdWVzdC5yZWNpcGllbnR9IDwvQ2VsbD5cbiAgICAgICAgPENlbGw+IHtyZXF1ZXN0LmFwcHJvdmFsQ291bnR9L3thcHByb3ZlcnNDb3VudH0gPC9DZWxsPlxuICAgICAgICA8Q2VsbD5cbiAgICAgICAgICB7cmVxdWVzdC5jb21wbGV0ZSA/IG51bGw6IChcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nZ3JlZW4nIGJhc2ljIG9uQ2xpY2s9e3RoaXMub25BcHByb3ZlfT5cbiAgICAgICAgICAgICAgICAgIEFwcHJvdmVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L0NlbGw+XG4gICAgICAgIDxDZWxsPlxuICAgICAgICB7cmVxdWVzdC5jb21wbGV0ZSA/IG51bGw6IChcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3RlYWwnIGJhc2ljIG9uQ2xpY2s9e3RoaXMub25GaW5hbGl6ZX0+XG4gICAgICAgICAgICAgIEZpbmFsaXplXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApXG5cbiAgICAgICAgfVxuICAgICAgICA8L0NlbGw+XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvd1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQVBBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQVBBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7QUFVQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBYUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==