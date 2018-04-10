webpackHotUpdate(5,{

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(663);

var _stringify2 = _interopRequireDefault(_stringify);

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

var _semanticUiReact = __webpack_require__(438);

var _web = __webpack_require__(515);

var _web2 = _interopRequireDefault(_web);

var _campaign = __webpack_require__(668);

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = __webpack_require__(514);

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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      errorMessage: ''
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);

              _this.setState({ loading: true, errorMessage: '' });

              _context.prev = 2;
              _context.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:

              fetch('http://192.168.2.9:8000/approved', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: (0, _stringify2.default)({
                  campaign: _this.props.address,
                  approverAddress: accounts[0],
                  id: _this.props.id
                })
              });

              _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](2);

              _this.setState({ errorMessage: _context.t0.message });

            case 15:

              _this.setState({ loading: false, errorMessage: '' });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[2, 12]]);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);

              _this.setState({ loading: true, errorMessage: '' });

              _context2.prev = 2;
              _context2.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context2.sent;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:

              fetch('http://192.168.2.9:8000/finalized', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: (0, _stringify2.default)({
                  campaign: _this.props.address,
                  campaignManager: accounts[0],
                  id: _this.props.id
                })
              });

              _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2['catch'](2);

              _this.setState({ errorMessage: _context2.t0.message });

            case 15:

              _this.setState({ loading: false, errorMessage: '' });

            case 16:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[2, 12]]);
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

      return _react2.default.createElement(Row, { positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, ' ', id, ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, ' ', request.description, ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, ' ', _web2.default.utils.fromWei(request.value, 'ether'), ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, ' ', _react2.default.createElement(_routes.Link, { route: 'https://rinkeby.etherscan.io/address/' + request.recipient, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, request.recipient))), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, ' ', request.approvalCount, '/', approversCount, ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, ' ', request.approvalCount, '/', approversCount, ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, onClick: this.onApprove, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, 'Rechazar')), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, 'Aprobar')), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, 'Finalizar')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiTWVzc2FnZSIsIndlYjMiLCJDYW1wYWluZyIsIlJvdXRlciIsIkxpbmsiLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25BcHByb3ZlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImFwcHJvdmVyQWRkcmVzcyIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiY2FtcGFpZ25NYW5hZ2VyIiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTyxBQUFROztBQUN4QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBUSxBQUFZOzs7Ozs7O0ksQUFFdkI7Ozs7Ozs7Ozs7Ozs7OztvTkFFSixBO2VBQVEsQUFDRyxBQUNUO29CQUZNLEFBRVEsQTtBQUZSLEFBQ04sYUFJRixBLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUVKO0FBRkkseUJBRVEsd0JBQVMsTUFBQSxBQUFLLE1BRnRCLEFBRVEsQUFBb0IsQUFF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QXdCO29CQUF4QjtzQkFBQSxBQUNHO0FBREg7aUJBQ0csQUFBUSxXQUFSLEFBQW1CLHVCQUNoQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEMsV0FBVyxTQUFTLEtBQUEsQUFBSyxNQUFuRSxBQUF5RTtvQkFBekU7c0JBQUE7QUFBQTtPQUFBLEVBdEJSLEFBb0JFLEFBRU0sQUFNTiw2QkFBQyxjQUFELFFBQU0sVUFBVSxRQUFoQixBQUF3QjtvQkFBeEI7c0JBQUEsQUFDQztBQUREO2lCQUNDLEFBQVEsV0FBUixBQUFtQix1QkFDaEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixTQUFTLEtBQXBDLEFBQXlDLFlBQVksU0FBUyxLQUFBLEFBQUssTUFBbkUsQUFBeUU7b0JBQXpFO3NCQUFBO0FBQUE7T0FBQSxFQS9CUixBQUNFLEFBNEJFLEFBRUksQUFTVDs7Ozs7QUEzSHNCLEEsQUErSHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvY2FybG9zZHBkL0Rlc2t0b3Ava2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/carlosdpd/Desktop/kickstart/components/RequestRow.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/carlosdpd/Desktop/kickstart/components/RequestRow.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lMjBiZDNhMTdiYmRhMWVlNjQ5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzPzdhNjk0NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uLCBNZXNzYWdlIH0gZnJvbSAgJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IENhbXBhaW5nIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB7IFJvdXRlciwgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbmNsYXNzIFJlcXVlc3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGVycm9yTWVzc2FnZTogJydcbiAgfVxuXG4gIG9uQXBwcm92ZSA9IGFzeW5jICgpID0+IHtcblxuICAgIGNvbnN0IGNhbXBhaWduID0gIENhbXBhaW5nKHRoaXMucHJvcHMuYWRkcmVzcyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XG4gICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICB9KTtcblxuICAgICAgZmV0Y2goJ2h0dHA6Ly8xOTIuMTY4LjIuOTo4MDAwL2FwcHJvdmVkJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGNhbXBhaWduOiB0aGlzLnByb3BzLmFkZHJlc3MsXG4gICAgICAgICAgYXBwcm92ZXJBZGRyZXNzOiBhY2NvdW50c1swXSxcbiAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZFxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoIHtlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlfSApO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3JNZXNzYWdlOiAnJyB9KVxuXG5cbiAgfTtcblxuICBvbkZpbmFsaXplID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgY29uc3QgY2FtcGFpZ24gPSAgQ2FtcGFpbmcodGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XG4gICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICB9KTtcblxuICAgICAgZmV0Y2goJ2h0dHA6Ly8xOTIuMTY4LjIuOTo4MDAwL2ZpbmFsaXplZCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBjYW1wYWlnbjogdGhpcy5wcm9wcy5hZGRyZXNzLFxuICAgICAgICAgIGNhbXBhaWduTWFuYWdlcjogYWNjb3VudHNbMF0sXG4gICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWRcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKCB7ZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZX0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvck1lc3NhZ2U6ICcnIH0pXG5cblxuICB9O1xuXG4gIHJlbmRlcigpe1xuXG4gICAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xuICAgIGNvbnN0IHtpZCwgcmVxdWVzdCwgYXBwcm92ZXJzQ291bnR9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCByZWFkeVRvRmluYWxpemUgPSByZXF1ZXN0LmFwcHJvdmFsQ291bnQgPiBhcHByb3ZlcnNDb3VudC8yO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPFJvdyAgcG9zaXRpdmU9e3JlYWR5VG9GaW5hbGl6ZSAmJiAhcmVxdWVzdC5jb21wbGV0ZX0+XG4gICAgICAgIDxDZWxsIGRpc2FibGVkPXtyZXF1ZXN0LmNvbXBsZXRlfT4ge2lkfSA8L0NlbGw+XG4gICAgICAgIDxDZWxsIGRpc2FibGVkPXtyZXF1ZXN0LmNvbXBsZXRlfT4ge3JlcXVlc3QuZGVzY3JpcHRpb259IDwvQ2VsbD5cbiAgICAgICAgPENlbGwgZGlzYWJsZWQ9e3JlcXVlc3QuY29tcGxldGV9PiB7d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsICdldGhlcicpfSA8L0NlbGw+XG4gICAgICAgIDxDZWxsPiA8TGluayByb3V0ZT17YGh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vYWRkcmVzcy8ke3JlcXVlc3QucmVjaXBpZW50fWB9PlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAge3JlcXVlc3QucmVjaXBpZW50fVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9DZWxsPlxuICAgICAgICA8Q2VsbCBkaXNhYmxlZD17cmVxdWVzdC5jb21wbGV0ZX0+IHtyZXF1ZXN0LmFwcHJvdmFsQ291bnR9L3thcHByb3ZlcnNDb3VudH0gPC9DZWxsPlxuICAgICAgICA8Q2VsbCBkaXNhYmxlZD17cmVxdWVzdC5jb21wbGV0ZX0+IHtyZXF1ZXN0LmFwcHJvdmFsQ291bnR9L3thcHByb3ZlcnNDb3VudH0gPC9DZWxsPlxuICAgICAgICA8Q2VsbCBkaXNhYmxlZD17cmVxdWVzdC5jb21wbGV0ZX0+XG4gICAgICAgICAge3JlcXVlc3QuY29tcGxldGUgPyBudWxsOiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3JlZCcgYmFzaWMgb25DbGljaz17dGhpcy5vbkFwcHJvdmV9IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICBSZWNoYXphclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvQ2VsbD5cbiAgICAgICAgPENlbGwgZGlzYWJsZWQ9e3JlcXVlc3QuY29tcGxldGV9PlxuICAgICAgICAgIHtyZXF1ZXN0LmNvbXBsZXRlID8gbnVsbDogKFxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdncmVlbicgYmFzaWMgb25DbGljaz17dGhpcy5vbkFwcHJvdmV9IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICBBcHJvYmFyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9DZWxsPlxuICAgICAgICA8Q2VsbCBkaXNhYmxlZD17cmVxdWVzdC5jb21wbGV0ZX0+XG4gICAgICAgIHtyZXF1ZXN0LmNvbXBsZXRlID8gbnVsbDogKFxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0ndGVhbCcgYmFzaWMgb25DbGljaz17dGhpcy5vbkZpbmFsaXplfSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxuICAgICAgICAgICAgICBGaW5hbGl6YXJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIClcblxuICAgICAgICB9XG4gICAgICAgIDwvQ2VsbD5cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Um93XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUFBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTs7QUFFQTtBQUVBO0FBSEE7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQUNBO0FBV0E7QUF6QkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQTJCQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBbUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBQUE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBOztBQUVBO0FBRUE7QUFIQTs7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBQ0E7QUFXQTtBQXpCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBMkJBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUEvQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7OztBQW1DQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFhQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9