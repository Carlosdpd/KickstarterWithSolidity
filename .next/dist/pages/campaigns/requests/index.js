'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/carlosdpd/Desktop/kickstart/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          approvalRate: _this2.props.approvalRate,
          rejectedRate: _this2.props.rejectedRate,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, ' Solicitudes '), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, ' Balance de la campa\xF1a: ', this.props.balanceToEther, ' Ether '), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, disabled: this.props.campaignManager != this.props.currentAccount, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Crear solicitud'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, ' ID '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, ' Fecha creaci\xF3n '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, ' Expiraci\xF3n '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, ' Descripci\xF3n '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, ' Monto (ether) '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, ' Destino '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, ' Cuenta de aprobados '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, ' Cuenta de rechazados '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, ' Rechazar '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, ' Aprobar '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, ' Finalizar '))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, this.renderRows())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, ' Encontradas ', this.props.requestCount, ' solicitudes. '));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, accounts, currentAccount, campaignManager, requestCount, approversCount, approvalRate, rejectedRate, currentBalance, balanceToEther, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;
                currentAccount = accounts[0];
                _context.next = 8;
                return campaign.methods.manager().call();

              case 8:
                campaignManager = _context.sent;
                _context.next = 11;
                return campaign.methods.getRequestCount().call();

              case 11:
                requestCount = _context.sent;
                _context.next = 14;
                return campaign.methods.approversCount().call();

              case 14:
                approversCount = _context.sent;
                _context.next = 17;
                return campaign.methods.approvalRate().call();

              case 17:
                approvalRate = _context.sent;
                _context.next = 20;
                return campaign.methods.rejectedRate().call();

              case 20:
                rejectedRate = _context.sent;
                _context.next = 23;
                return _web2.default.eth.getBalance(address);

              case 23:
                currentBalance = _context.sent;
                _context.next = 26;
                return _web2.default.utils.fromWei(currentBalance, 'ether');

              case 26:
                balanceToEther = _context.sent;
                _context.next = 29;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 29:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount, campaignManager: campaignManager, currentAccount: currentAccount, approvalRate: approvalRate, rejectedRate: rejectedRate, balanceToEther: balanceToEther });

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJCdXR0b24iLCJUYWJsZSIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIndlYjMiLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwiYXBwcm92YWxSYXRlIiwicmVqZWN0ZWRSYXRlIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJiYWxhbmNlVG9FdGhlciIsIm1hcmdpbkJvdHRvbSIsImNhbXBhaWduTWFuYWdlciIsImN1cnJlbnRBY2NvdW50IiwicmVuZGVyUm93cyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsIm1hbmFnZXIiLCJjYWxsIiwiZ2V0UmVxdWVzdENvdW50IiwiZ2V0QmFsYW5jZSIsImN1cnJlbnRCYWxhbmNlIiwidXRpbHMiLCJmcm9tV2VpIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFTLEFBQVE7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7aUNBMEJTO21CQUNYOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUFPLEFBQUM7ZUFBRCxBQUNBLEFBQ0w7Y0FGSyxB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UyxRQUFULEFBQWlCLFUsQUFBakIsQUFBMkI7O21CQUFuRDtBOzt1QkFDcUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsa0JBQWpCLEFBQW1DLEE7O21CQUF4RDtBOzt1QkFDdUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUJBQWpCLEFBQWtDLEE7O21CQUF6RDtBOzt1QkFDcUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsZUFBakIsQUFBZ0MsQTs7bUJBQXJEO0E7O3VCQUNxQixTQUFBLEFBQVMsUUFBVCxBQUFpQixlLEFBQWpCLEFBQWdDOzttQkFBckQ7QTs7dUJBQ3VCLGNBQUEsQUFBSyxJQUFMLEFBQVMsV0FBVCxBLEFBQW9COzttQkFBM0M7QTs7dUJBQ3VCLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixnQkFBbkIsQUFBbUMsQTs7bUJBQTFEO0E7O3lDQUVpQixBQUFRLFVBQ3ZCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFBOEIsT0FBOUIsQUFBcUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDM0Q7eUJBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN6QztBQUhvQixBQUNyQixBLGlCQUFBLENBRHFCOzttQkFBakI7QTtpREFNQyxFQUFFLFNBQUYsU0FBVyxVQUFYLFVBQW9CLGNBQXBCLGNBQWtDLGdCQUFsQyxnQkFBa0QsaUJBQWxELGlCQUFtRSxnQkFBbkUsZ0JBQW1GLGNBQW5GLGNBQWlHLGNBQWpHLGNBQStHLGdCQUEvRyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdkJnQixBLEFBcUYzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9jYXJsb3NkcGQvRGVza3RvcC9raWNrc3RhcnQifQ==