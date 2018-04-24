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

var _jsxFileName = '/Users/horaciocoll/Desktop/Tesis/KickstarterWithSolidity/pages/campaigns/requests/index.js?entry';
//Dependencias de interface, rutas y elementos útiles del contrato


//Componente principal que renderiza la tabla que contiene la lista de solicitudes

var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRows',

    //Función encargada de renderizar una fila de la tabla en un componente separado, junto a la lista de atributos necesarios por fila
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
            lineNumber: 55
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {

      //Se obtienen los atributos necesarios del elemento 'Table' (Provisto por Semantic-UI)
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, ' Solicitudes '), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, ' Balance de la campa\xF1a: ', this.props.balanceToEther, ' Ether '), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, disabled: this.props.campaignManager != this.props.currentAccount, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Crear solicitud'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, ' ID '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, ' Fecha creaci\xF3n '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, ' Expiraci\xF3n '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, ' Descripci\xF3n '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, ' Monto (ether) '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, ' Destino '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, ' Cuenta de aprobados '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, ' Cuenta de rechazados '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, ' Rechazar '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, ' Aprobar '), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, ' Finalizar '))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, this.renderRows())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, ' Encontradas ', this.props.requestCount, ' solicitudes. '));
    }
  }], [{
    key: 'getInitialProps',

    //Función que obtiene los parámetros iniciales del componente
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, accounts, currentAccount, campaignManager, requestCount, approversCount, approvalRate, rejectedRate, currentBalance, balanceToEther, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                //Se obtiene la dirección de la campaña actual
                address = props.query.address;

                //Se obtiene la instancia de la campaña, dada su dirección

                campaign = (0, _campaign2.default)(address);

                //Se obtienen la lista de cuentas de Metamask

                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;

                //Cuenta actual utilizada
                currentAccount = accounts[0];

                //Lista de atributos que se obtienen de la campaña

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJCdXR0b24iLCJUYWJsZSIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIndlYjMiLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwiYXBwcm92YWxSYXRlIiwicmVqZWN0ZWRSYXRlIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJiYWxhbmNlVG9FdGhlciIsIm1hcmdpbkJvdHRvbSIsImNhbXBhaWduTWFuYWdlciIsImN1cnJlbnRBY2NvdW50IiwicmVuZGVyUm93cyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsIm1hbmFnZXIiLCJjYWxsIiwiZ2V0UmVxdWVzdENvdW50IiwiZ2V0QmFsYW5jZSIsImN1cnJlbnRCYWxhbmNlIiwidXRpbHMiLCJmcm9tV2VpIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFTLEFBQVE7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVTs7Ozs7OztBQVBqQjs7O0FBU0E7O0ksQUFDTTs7Ozs7Ozs7OztTQXlDSjs7O2lDQUNhO21CQUNYOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUFPLEFBQUM7ZUFB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QSxBQUFTOzttQkFBMUI7QSxvQ0FFTjs7QUFDTTtBLGlDQUFpQixTQUFBLEFBRXZCLEEsQUFGZ0M7Ozs7O3VCQUdGLFNBQUEsQUFBUyxRQUFULEFBQWlCLFVBQWpCLEEsQUFBMkI7O21CQUFuRDtBOzt1QkFDcUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsa0JBQWpCLEFBQW1DLEE7O21CQUF4RDtBOzt1QkFDdUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUJBQWpCLEFBQWtDLEE7O21CQUF6RDtBOzt1QkFDcUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsZSxBQUFqQixBQUFnQzs7bUJBQXJEO0E7O3VCQUNxQixTQUFBLEFBQVMsUUFBVCxBQUFpQixlQUFqQixBQUFnQyxBOzttQkFBckQ7QTs7dUJBR3VCLGNBQUEsQUFBSyxJQUFMLEFBQVMsV0FBVCxBQUFvQixBOzttQkFBM0M7QTs7dUJBR3VCLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixnQixBQUFuQixBQUFtQzs7bUJBQTFEO0E7O3lDQUdpQixBQUFRLFVBQ3ZCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFBOEIsT0FBOUIsQUFBcUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDM0Q7eUJBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN6QztBLEFBSG9CLEFBQ3JCLGlCQUFBLENBRHFCOzttQkFBakI7QTtpREFPQyxFQUFFLFNBQUYsU0FBVyxVQUFYLFVBQW9CLGNBQXBCLGNBQWtDLGdCQUFsQyxnQkFBa0QsaUJBQWxELGlCQUFtRSxnQkFBbkUsZ0JBQW1GLGNBQW5GLGNBQWlHLGNBQWpHLGNBQStHLGdCQUEvRyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdENnQixBLEFBK0czQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaG9yYWNpb2NvbGwvRGVza3RvcC9UZXNpcy9LaWNrc3RhcnRlcldpdGhTb2xpZGl0eSJ9