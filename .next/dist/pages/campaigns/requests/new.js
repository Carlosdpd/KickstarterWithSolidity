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

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _ip = require('../../../ip.js');

var _ip2 = _interopRequireDefault(_ip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/carlosdpd/Desktop/kickstart/pages/campaigns/requests/new.js?entry';
//Dependencias de interface, rutas y elementos útiles del contrato


//Componente principal que renderiza el formulario para crear una solicitud nueva

var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      description: '',
      recipient: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, _this$state, description, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                //Eliminar el comportamiento por defecto de la función
                event.preventDefault();

                //Se obtiene la instancia de la campaña con la que se está trabajando dada una dirección
                campaign = (0, _campaign2.default)(_this.props.address);

                //Se obtienen las variables desde el formulario

                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                //Se activa el atributo 'Loading' del botón mientras que se procesa la transacción en la red

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

              case 10:

                //Se realiza la solicitud al servidor donde se encuentra la base de datos MongoDB para que guarde la información de la solicitud recién creada
                fetch('http://' + _ip2.default + ':8000/request', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    campaignManager: accounts[0],
                    toAddress: recipient,
                    value: _web2.default.utils.toWei(value, 'ether'),
                    description: description,
                    createdAt: Date.now()
                  })
                });

                //Una creada la solicitud, se redirige al usuario a la lista de solicitudes
                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](4);

                //En caso de que ocurra un error, se crear el mensaje de error que se mostrará al usuario
                _this.setState({ errorMessage: ['Asegúrese de ingresar un número válido de ether o wei (Sin letras)', 'En caso de ser una lista, no deje elementos en blanco', 'Verifique estar usando su plug-in Metamask', 'Verifique su lista de transacciones pendientes'] });

              case 17:

                //Finalmente, termina el proceso de 'Loading' del botón
                _this.setState({ loading: false });

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  //Variable 'state' que guardará los datos desde el formulario


  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Atras')), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, ' Crear una nueva solicitud '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, ' Descripci\xF3n '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Descripci\xF3n de su solicitud',
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, ' Monto en ether'), _react2.default.createElement(_semanticUiReact.Input, {
        labelPosition: 'right',
        label: 'ether',
        placeholder: 'Monto que desea retirar de la campa\xF1a',
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, ' Destino '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Direcci\xF3n destino a la que ir\xE1n los fondos de su solicitud',
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Hubo un error, tome en cuenta las siguientes consideraciones', list: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, '\xA1Crear!')));
    }
  }], [{
    key: 'getInitialProps',

    //Función que obtiene los parámetros iniciales del componente
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:

                //Se obtiene la dirección actual del contrato desde la ruta
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()

    //Función llamada al hacer click en el botón "Crear"

  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsImN1cnJlbnRJUCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJjYW1wYWlnbk1hbmFnZXIiLCJ0b0FkZHJlc3MiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwicHVzaFJvdXRlIiwidGFyZ2V0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQVM7O0FBQ2hDLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQWU7O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7Ozs7QUFQdEI7OztBQVVBOztJLEFBQ007Ozs7Ozs7Ozs7Ozs7OztvTkFHSixBO2FBQVEsQUFDRSxBQUNOO21CQUZJLEFBRVEsQUFDWjtpQkFISSxBQUdNLEFBQ1Y7ZUFKSSxBQUlLLEFBQ1Q7b0JBTEksQSxBQUtVO0FBTFYsQUFDSixhQWlCSixBOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtrRUFBQTs7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RSxBQUdBLG9DQUFBLEFBQUM7dUJBQUQsQUFDZ0IsQUFDZDtlQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFKZCxBQUlvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUx6RDs7b0JBQUE7c0JBZkosQUFXRSxBQUlFLEFBUUY7QUFSRTtBQUNFLDJCQU9ILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUdBLDhCQUFBLEFBQUM7cUJBQUQsQUFDYyxBQUNaO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLE1BQUEsQUFBTSxPQUExQyxBQUFTLEFBQWMsQUFBMEI7QUFIN0Q7O29CQUFBO3NCQTNCSixBQXVCRSxBQUlFLEFBUUY7QUFSRTtBQUNFLDJCQU9KLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsZ0VBQStELE1BQU0sS0FBQSxBQUFLLE1BQWhHLEFBQXNHO29CQUF0RztzQkFuQ0YsQUFtQ0UsQUFHQTtBQUhBOzBCQUdBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBQUE7QUFBQTtTQW5ETixBQUNFLEFBWUUsQUFzQ0UsQUFNUDs7O1NBekhEOzs7OzZHQUM2QixBOzs7OzttQkFFM0I7O0FBQ1E7QSwwQkFBWSxNQUFNLEEsTUFBbEIsQTtrREFDRCxFQUFFLFNBQUYsQTs7Ozs7Ozs7Ozs7Ozs7O0FBSVQ7Ozs7Ozs7QUFwQnVCLEEsQUF3SXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9jYXJsb3NkcGQvRGVza3RvcC9raWNrc3RhcnQifQ==