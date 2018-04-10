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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiTWVzc2FnZSIsIndlYjMiLCJDYW1wYWluZyIsIlJvdXRlciIsIkxpbmsiLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25BcHByb3ZlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImFwcHJvdmVyQWRkcmVzcyIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiY2FtcGFpZ25NYW5hZ2VyIiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTyxBQUFROztBQUN4QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBUSxBQUFZOzs7Ozs7O0ksQUFFdkI7Ozs7Ozs7Ozs7Ozs7OztvTkFFSixBO2VBQVEsQUFDRyxBQUNUO29CQUZNLEFBRVEsQTtBQUZSLEFBQ04sYUFJRixBLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUVKO0FBRkkseUJBRVEsd0JBQVMsTUFBQSxBQUFLLE1BRnRCLEFBRVEsQUFBb0IsQUFF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QXdCO29CQUF4QjtzQkFBQSxBQUNHO0FBREg7aUJBQ0csQUFBUSxXQUFSLEFBQW1CLHVCQUNoQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEMsV0FBVyxTQUFTLEtBQUEsQUFBSyxNQUFuRSxBQUF5RTtvQkFBekU7c0JBQUE7QUFBQTtPQUFBLEVBdEJSLEFBb0JFLEFBRU0sQUFNTiw2QkFBQyxjQUFELFFBQU0sVUFBVSxRQUFoQixBQUF3QjtvQkFBeEI7c0JBQUEsQUFDQztBQUREO2lCQUNDLEFBQVEsV0FBUixBQUFtQix1QkFDaEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixTQUFTLEtBQXBDLEFBQXlDLFlBQVksU0FBUyxLQUFBLEFBQUssTUFBbkUsQUFBeUU7b0JBQXpFO3NCQUFBO0FBQUE7T0FBQSxFQS9CUixBQUNFLEFBNEJFLEFBRUksQUFTVDs7Ozs7QUEzSHNCLEEsQUErSHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hvcmFjaW9jb2xsL0Rlc2t0b3AvVGVzaXMvS2lja3N0YXJ0ZXJXaXRoU29saWRpdHkifQ==