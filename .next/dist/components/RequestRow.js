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

var _ip = require('../ip.js');

var _ip2 = _interopRequireDefault(_ip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/carlosdpd/Desktop/kickstart/components/RequestRow.js';
//Dependencias de interface, rutas y elementos útiles del contrato


//Componente principal que renderiza la fila que contiene información de cada solicitud

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

              //Se obtiene la instancia del contrato actual dada la dirección desde la ruta
              campaign = (0, _campaign2.default)(_this.props.address);

              //Se activa el atributo 'Loading' del botón mientras que se procesa la transacción en la red

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

              //Se realiza la solicitud al servidor donde se encuentra la base de datos MongoDB para que guarde la información de la aprobación realizada
              fetch('http://' + _ip2.default + ':8000/approved', {
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

              //Finalizada la transacción, se recarga la página para que el usuario vea su aprobación o rechazo renderizado
              _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](2);

              //En caso de que ocurra un error, se crear el mensaje de error que se mostrará al usuario
              _this.setState({ errorMessage: _context.t0.message });

            case 15:

              //Finalmente, termina el proceso de 'Loading' del botón
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

              //Se obtiene la instancia del contrato actual dada la dirección desde la ruta
              campaign = (0, _campaign2.default)(_this.props.address);

              //Se activa el atributo 'Loading' del botón mientras que se procesa la transacción en la red

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

              //Se realiza la solicitud al servidor donde se encuentra la base de datos MongoDB para que guarde la información del rechazo realizado
              fetch('http://' + _ip2.default + ':8000/rejected', {
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

              //Finalizada la transacción, se recarga la página para que el usuario vea su aprobación o rechazo renderizado
              _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2['catch'](2);

              //En caso de que ocurra un error, se crear el mensaje de error que se mostrará al usuario
              _this.setState({ errorMessage: _context2.t0.message });

            case 15:

              //Finalmente, termina el proceso de 'Loading' del botón
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

              //Se obtiene la instancia del contrato actual dada la dirección desde la ruta
              campaign = (0, _campaign2.default)(_this.props.address);

              //Se activa el atributo 'Loading' del botón mientras que se procesa la transacción en la red

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

              //Se realiza la solicitud al servidor donde se encuentra la base de datos MongoDB para que guarde la información de la finalización realizada
              fetch('http://' + _ip2.default + ':8000/finalized', {
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

              //Finalizada la transacción, se recarga la página para que el usuario vea su aprobación o rechazo renderizado
              _routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');

              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3['catch'](2);

              //En caso de que ocurra un error, se crear el mensaje de error que se mostrará al usuario
              _this.setState({ errorMessage: _context3.t0.message });

            case 15:

              //Finalmente, termina el proceso de 'Loading' del botón
              _this.setState({ loading: false, errorMessage: '' });

            case 16:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2, [[2, 12]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  //Variable 'state' que guarda los datos de 'loading' y mensaje de erroe cuando se haga click en 'Aprobar','Rechazar' o 'Finalizar'


  (0, _createClass3.default)(RequestRow, [{
    key: 'epochToDate',

    //Función que convierte una fecha en Epoch en formato standard
    value: function epochToDate(epoch) {
      var date = new Date(epoch * 1000);
      var formattedDate = date.getUTCDate() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCFullYear();
      return formattedDate;
    }

    //Función llamada al hacer click en el botón "Aprobar"


    //Función llamada al hacer click en el botón "Rechazar"

  }, {
    key: 'render',
    value: function render() {

      //En el método render, asignamos varibales de importancia que darán información al usuario con respecto a cada solicitud
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount,
          approvalRate = _props.approvalRate,
          rejectedRate = _props.rejectedRate;

      //Validación sobre si la solicitud está lista para ser aprobada, se mostrará de color verde si este valor es 'true'

      var readyToApprove = request.approvalCount > approversCount * approvalRate / 100;

      //Validación sobre si la solicitud está lista para ser rechazada, se mostrará en color naranja si este valor es 'true'
      var readyToReject = request.rejectsCount > approversCount * rejectedRate / 100;

      //Se obtiene la fecha actual, y se verifica si la solicitud está expirada, en caso afirmativo, la solicitud se mostrará en color rojo
      var currentTime = Math.floor(new Date().getTime() / 1000);
      var expired = request.created - currentTime + 604800 < 0;
      console.log(expired);

      return _react2.default.createElement(Row, { positive: readyToApprove && !request.complete, negative: expired, warning: readyToReject && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, ' ', id, ' '), _react2.default.createElement(Cell, { disabled: request.complete, collapsing: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, ' ', this.epochToDate(request.created), ' '), _react2.default.createElement(Cell, { disabled: request.complete, collapsing: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, ' ', this.epochToDate(parseFloat(request.created) + 604800), ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, ' ', request.description, ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, ' ', _web2.default.utils.fromWei(request.value, 'ether'), ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, ' ', _react2.default.createElement(_routes.Link, { route: 'https://rinkeby.etherscan.io/address/' + request.recipient, __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, _react2.default.createElement('a', { target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, request.recipient))), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, ' ', request.approvalCount, '/', approversCount, ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, ' ', request.rejectsCount, '/', approversCount, ' '), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, onClick: this.onReject, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, 'Rechazar')), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, 'Aprobar')), _react2.default.createElement(Cell, { disabled: request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, 'Finalizar')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiTWVzc2FnZSIsIndlYjMiLCJDYW1wYWluZyIsIlJvdXRlciIsIkxpbmsiLCJjdXJyZW50SVAiLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25BcHByb3ZlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImFwcHJvdmVyQWRkcmVzcyIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJvblJlamVjdCIsInJlamVjdFJlcXVlc3QiLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiY2FtcGFpZ25NYW5hZ2VyIiwiZXBvY2giLCJkYXRlIiwiRGF0ZSIsImZvcm1hdHRlZERhdGUiLCJnZXRVVENEYXRlIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENGdWxsWWVhciIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJhcHByb3ZhbFJhdGUiLCJyZWplY3RlZFJhdGUiLCJyZWFkeVRvQXBwcm92ZSIsImFwcHJvdmFsQ291bnQiLCJyZWFkeVRvUmVqZWN0IiwicmVqZWN0c0NvdW50IiwiY3VycmVudFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJnZXRUaW1lIiwiZXhwaXJlZCIsImNyZWF0ZWQiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGUiLCJlcG9jaFRvRGF0ZSIsInBhcnNlRmxvYXQiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE7QUFBQTtTQUFvQyxhQUFwQyxBQUE0QyxjQUFlLEtBQTNELGdCQWRGLEFBY0UsQUFDQSxzQkFBQyxjQUFELFFBQU0sVUFBVSxRQUFoQixBQUF3QjtvQkFBeEI7c0JBQUEsQUFDRztBQURIO2lCQUNHLEFBQVEsV0FBUixBQUFtQix1QkFDaEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsT0FBTSxPQUFwQixNQUEwQixTQUFTLEtBQW5DLEFBQXdDLFVBQVUsU0FBUyxLQUFBLEFBQUssTUFBaEUsQUFBc0U7b0JBQXRFO3NCQUFBO0FBQUE7T0FBQSxFQWpCUixBQWVFLEFBRU0sQUFNTiw4QkFBQyxjQUFELFFBQU0sVUFBVSxRQUFoQixBQUF3QjtvQkFBeEI7c0JBQUEsQUFDRztBQURIO2lCQUNHLEFBQVEsV0FBUixBQUFtQix1QkFDaEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDLFdBQVcsU0FBUyxLQUFBLEFBQUssTUFBbkUsQUFBeUU7b0JBQXpFO3NCQUFBO0FBQUE7T0FBQSxFQXpCUixBQXVCRSxBQUVNLEFBTU4sNkJBQUMsY0FBRCxRQUFNLFVBQVUsUUFBaEIsQUFBd0I7b0JBQXhCO3NCQUFBLEFBQ0M7QUFERDtpQkFDQyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2hCLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsU0FBUyxLQUFwQyxBQUF5QyxZQUFZLFNBQVMsS0FBQSxBQUFLLE1BQW5FLEFBQXlFO29CQUF6RTtzQkFBQTtBQUFBO09BQUEsRUFsQ1IsQUFDRSxBQStCRSxBQUVJLEFBVVQ7Ozs7O0FBdk5zQixBLEFBMk56Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2Nhcmxvc2RwZC9EZXNrdG9wL2tpY2tzdGFydCJ9