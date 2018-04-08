'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../routes');

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

      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, ' ', id, ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, ' ', request.description, ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, ' ', _web2.default.utils.fromWei(request.value, 'ether'), ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, ' ', request.recipient, ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, ' ', request.approvalCount, '/', approversCount, ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'Aprobar')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, 'Finalizar')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiTWVzc2FnZSIsIndlYjMiLCJDYW1wYWluZyIsIlJvdXRlciIsIlJlcXVlc3RSb3ciLCJzdGF0ZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiYXBwcm92ZXJBZGRyZXNzIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJjYW1wYWlnbk1hbmFnZXIiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPLEFBQVE7O0FBQ3hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7Ozs7OztvTixBQUVKO2VBQVEsQUFDRyxBQUNUO29CLEFBRk0sQUFFUTtBQUZSLEFBQ04sYSxBQUlGLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUVKO0FBRkkseUJBRVEsd0JBQVMsTUFBQSxBQUFLLE1BRnRCLEFBRVEsQUFBb0IsQUFFdEM7O29CQUFBLEFB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QUFERjtPQUFBLGtCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFRLEtBQVIsSUFERixBQUNFLEFBQ0Esc0JBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVEsYUFBUixBQUFnQixhQUZsQixBQUVFLEFBQ0Esc0JBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVEsbUJBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQUFuQyxBQUFRLEFBQWtDLFVBSDVDLEFBR0UsQUFDQSxzQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBUSxhQUFSLEFBQWdCLFdBSmxCLEFBSUUsQUFDQSxzQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBUSxhQUFSLEFBQWdCLGVBQWdCLEtBQWhDLGdCQUxGLEFBS0UsQUFDQSxzQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFDRyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2hCLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsT0FBdEIsTUFBNEIsU0FBUyxLQUFyQyxBQUEwQyxXQUFXLFNBQVMsS0FBQSxBQUFLLE1BQW5FLEFBQXlFO29CQUF6RTtzQkFBQTtBQUFBO09BQUEsRUFSUixBQU1FLEFBRU0sQUFNTiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNDO0FBREQ7QUFBQSxpQkFDQyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2hCLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsU0FBUyxLQUFwQyxBQUF5QyxZQUFZLFNBQVMsS0FBQSxBQUFLLE1BQW5FLEFBQXlFO29CQUF6RTtzQkFBQTtBQUFBO09BQUEsRUFqQlIsQUFDRSxBQWNFLEFBRUksQUFTVDs7Ozs7QUE3R3NCLEEsQUFpSHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvY2FybG9zZHBkL0Rlc2t0b3Ava2lja3N0YXJ0In0=