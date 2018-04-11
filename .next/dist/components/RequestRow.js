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

var _jsxFileName = '/Users/horaciocoll/Desktop/Tesis/KickstarterWithSolidity/components/RequestRow.js';


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
    })), _this.onReject = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
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
              return campaign.methods.rejectRequest(_this.props.id).send({
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
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);

              _this.setState({ loading: true, errorMessage: '' });

              _context3.prev = 2;
              _context3.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context3.sent;
              _context3.next = 8;
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
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3['catch'](2);

              _this.setState({ errorMessage: _context3.t0.message });

            case 15:

              _this.setState({ loading: false, errorMessage: '' });

            case 16:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2, [[2, 12]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'epochToDate',
    value: function epochToDate(epoch) {
      var date = new Date(epoch * 1000);

      var formattedDate = date.getUTCDate() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCFullYear();

      return formattedDate;
    }
  }, {
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount,
          approvalRate = _props.approvalRate,
          rejectedRate = _props.rejectedRate;

      var readyToApprove = request.approvalCount > approversCount * approvalRate / 100;
      var readyToReject = request.rejectsCount > approversCount * rejectedRate / 100;

      return _react2.default.createElement(Row, { positive: readyToApprove && !request.complete, negative: readyToReject && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, ' ', id, ' '), _react2.default.createElement(Cell, { disabled: request.complete, collapsing: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, ' ', this.epochToDate(request.created), ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, ' ', request.description, ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, ' ', _web2.default.utils.fromWei(request.value, 'ether'), ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, ' ', _react2.default.createElement(_routes.Link, { route: 'https://rinkeby.etherscan.io/address/' + request.recipient, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, request.recipient))), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, ' ', request.approvalCount, '/', approversCount, ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, ' ', request.rejectsCount, '/', approversCount, ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, onClick: this.onReject, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, 'Rechazar')), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, 'Aprobar')), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, 'Finalizar')), _react2.default.createElement(Cell, { disabled: request.complete, collapsing: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, ' ', this.epochToDate(parseFloat(request.created) + 604800), ' '));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiTWVzc2FnZSIsIndlYjMiLCJDYW1wYWluZyIsIlJvdXRlciIsIkxpbmsiLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25BcHByb3ZlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImFwcHJvdmVyQWRkcmVzcyIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJvblJlamVjdCIsInJlamVjdFJlcXVlc3QiLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiY2FtcGFpZ25NYW5hZ2VyIiwiZXBvY2giLCJkYXRlIiwiRGF0ZSIsImZvcm1hdHRlZERhdGUiLCJnZXRVVENEYXRlIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENGdWxsWWVhciIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJhcHByb3ZhbFJhdGUiLCJyZWplY3RlZFJhdGUiLCJyZWFkeVRvQXBwcm92ZSIsImFwcHJvdmFsQ291bnQiLCJyZWFkeVRvUmVqZWN0IiwicmVqZWN0c0NvdW50IiwiY29tcGxldGUiLCJlcG9jaFRvRGF0ZSIsImNyZWF0ZWQiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwicGFyc2VGbG9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPLEFBQVE7O0FBQ3hCLEFBQU8sQUFBVTs7OztBQUNq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LFNBQU8scUJBQUEsQUFBQyw4QkFBSyxpREFBK0MsUUFBckQsQUFBNkQ7b0JBQTdEO3NCQUFBLEFBQ0c7QUFESDt5QkFDRyxjQUFBOztvQkFBQTtzQkFBQSxBQUNLO0FBREw7QUFBQSxpQkFOWixBQUtFLEFBQU8sQUFDRyxBQUNhLEFBSXZCLDhCQUFDLGNBQUQsUUFBTSxVQUFVLFFBQWhCLEFBQXdCO29CQUF4QjtzQkFBQTtBQUFBO1NBQW9DLGFBQXBDLEFBQTRDLGVBQWdCLEtBQTVELGdCQVhGLEFBV0UsQUFDQSxzQkFBQyxjQUFELFFBQU0sVUFBVSxRQUFoQixBQUF3QjtvQkFBeEI7c0JBQUE7QUFBQTtTQUFvQyxhQUFwQyxBQUE0QyxjQUFlLEtBQTNELGdCQVpGLEFBWUUsQUFDQSxzQkFBQyxjQUFELFFBQU0sVUFBVSxRQUFoQixBQUF3QjtvQkFBeEI7c0JBQUEsQUFDRztBQURIO2lCQUNHLEFBQVEsV0FBUixBQUFtQix1QkFDaEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsT0FBTSxPQUFwQixNQUEwQixTQUFTLEtBQW5DLEFBQXdDLFVBQVUsU0FBUyxLQUFBLEFBQUssTUFBaEUsQUFBc0U7b0JBQXRFO3NCQUFBO0FBQUE7T0FBQSxFQWZSLEFBYUUsQUFFTSxBQU1OLDhCQUFDLGNBQUQsUUFBTSxVQUFVLFFBQWhCLEFBQXdCO29CQUF4QjtzQkFBQSxBQUNHO0FBREg7aUJBQ0csQUFBUSxXQUFSLEFBQW1CLHVCQUNoQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEMsV0FBVyxTQUFTLEtBQUEsQUFBSyxNQUFuRSxBQUF5RTtvQkFBekU7c0JBQUE7QUFBQTtPQUFBLEVBdkJSLEFBcUJFLEFBRU0sQUFNTiw2QkFBQyxjQUFELFFBQU0sVUFBVSxRQUFoQixBQUF3QjtvQkFBeEI7c0JBQUEsQUFDQztBQUREO2lCQUNDLEFBQVEsV0FBUixBQUFtQix1QkFDaEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixTQUFTLEtBQXBDLEFBQXlDLFlBQVksU0FBUyxLQUFBLEFBQUssTUFBbkUsQUFBeUU7b0JBQXpFO3NCQUFBO0FBQUE7T0FBQSxFQS9CTixBQTZCRSxBQUVJLEFBT0osK0JBQUMsY0FBRCxRQUFNLFVBQVUsUUFBaEIsQUFBd0IsVUFBVSxZQUFsQyxBQUFnRDtvQkFBaEQ7c0JBQUE7QUFBQTtTQUF3RCxVQUFBLEFBQUssWUFBWSxXQUFXLFFBQVgsQUFBbUIsV0FBNUYsQUFBd0QsQUFBK0MsU0F2QzNHLEFBQ0UsQUFzQ0UsQUFHTDs7Ozs7QUExS3NCLEEsQUE4S3pCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hvcmFjaW9jb2xsL0Rlc2t0b3AvVGVzaXMvS2lja3N0YXJ0ZXJXaXRoU29saWRpdHkifQ==