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

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

var _ip = require('../ip.js');

var _ip2 = _interopRequireDefault(_ip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/carlosdpd/Desktop/kickstart/components/ContributeForm.js';
//Dependencias de interface, rutas y elementos útiles del contrato


//Componente principal que renderiza el formulation para contribuir a una campaña

var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                //Eliminar el comportamiento por defecto de la función
                event.preventDefault();

                //Se obtiene una instancia de la campaña actual mediante el pase de parámetros ocurrido en 'show.js'
                campaign = (0, _campaign2.default)(_this.props.address);

                //Se activa el atributo 'Loading' del botón mientras que se procesa la transacción en la red

                _this.setState({ loading: true, errorMessage: '' });

                //Se obtiene la cuenta actual de Metamask
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.prev = 6;
                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:

                //Se realiza la solicitud al servidor donde se encuentra la base de datos MongoDB para que guarde la información de la contribución realizada
                fetch('http://' + _ip2.default + ':8000/contribution', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    campaignAddress: _this.props.address,
                    value: _web2.default.utils.toWei(_this.state.value, 'ether'),
                    fromAddress: accounts[0]
                  })
                });

                //Una vez realizada la contribución, se actualiza la página actual para que el usuario pueda verale
                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](6);

                //En caso de que ocurra un error, se crear el mensaje de error que se mostrará al usuario
                _this.setState({ errorMessage: ['Asegúrese de ingresar un número válido de ether o wei(Sin letras)', 'En caso de ser una lista, no deje elementos en blanco', 'Verifique estar usando su plug-in Metamask', 'Verifique su lista de transacciones pendientes'] });

              case 16:

                //Finalmente, termina el proceso de 'Loading' del botón
                _this.setState({ loading: false, value: '' });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[6, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  //Variable 'state' que guardará los datos desde el formulario


  //Función llamada al hacer click en el botón 'Contribuir'


  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, ' Monto de contribuci\xF3n '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Cantidad de ether con la que desea contribuir',
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'ether',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Hubo un error, tome en cuenta las siguientes consideraciones', list: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, '\xA1Contribuir!'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

;

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiY3VycmVudElQIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiY2FtcGFpZ25BZGRyZXNzIiwiZnJvbUFkZHJlc3MiLCJyZXBsYWNlUm91dGUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFPLEFBQVM7O0FBQy9CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOztBQUN2QixBQUFPLEFBQWU7Ozs7Ozs7QUFOdEI7OztBQVFBOztJLEFBQ007Ozs7Ozs7Ozs7Ozs7Ozs0TixBQUdKO2FBQVEsQUFDQSxBQUNOO29CQUZNLEFBRU8sQUFDYjtlLEFBSE0sQUFHRztBQUhILEFBQ04sYUFNRixBOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFFVDs7QUFDQTtzQkFBQSxBQUFNLEFBRU47O0FBQ007QUFORywyQkFNUSx3QkFBUyxNQUFBLEFBQUssTUFOdEIsQUFNUSxBQUFvQixBQUVyQzs7QUFDQTs7c0JBQUEsQUFBSyxTQUFVLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FBL0IsQUFBZSxBQUE2QixBQUU1Qzs7QUFYUztnQ0FBQTt1QkFZYyxjQUFBLEFBQUssSUFabkIsQUFZYyxBQUFTOzttQkFBMUI7QUFaRyxvQ0FBQTtnQ0FBQTtnQ0FBQTtnQ0FpQkQsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCO3dCQUM3QixTQURrQyxBQUNsQyxBQUFTLEFBQ2Q7eUJBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQW5COUIsQUFpQkQsQUFBbUMsQUFFaEMsQUFBbUM7QUFGSCxBQUN2QyxpQkFESTs7bUJBS047O0FBQ0E7c0JBQU0sQUFBWSwyQkFBbEIsQUFBOEI7MEJBQXNCLEFBQzFDLEFBQ1I7OzhCQUFTLEFBQ0csQUFDVjtvQ0FKZ0QsQUFFekMsQUFFUyxBQUVsQjtBQUpTLEFBQ1A7O3FDQUlpQixNQUFBLEFBQUssTUFESCxBQUNTLEFBQzVCOzJCQUFPLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FGaEIsQUFFWixBQUFtQyxBQUMxQztpQ0FBYSxTQVRqQixBQUFvRCxBQU01QyxBQUFlLEFBR04sQUFBUyxBQUkxQjtBQVB1QixBQUNuQixtQkFESTtBQU40QyxBQUNsRDs7QUFhRjsrQkFBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFyQ2hDLEFBcUNQLEFBQTZDO2dDQXJDdEM7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBd0NQOztBQUNBO3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsQ0FBQSxBQUFDLHFFQUFELEFBQXNFLHlEQUF0RSxBQUErSCw4Q0F6Q3RKLEFBeUNQLEFBQWMsQUFBZ0IsQUFBNks7O21CQUk3TTs7QUFDQTtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsT0FBTyxPQTlDdEIsQUE4Q1QsQUFBYyxBQUF1Qjs7bUJBOUM1QjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7QUFSWDs7QUFPQTs7Ozs7Ozs7NkJBa0RRO21CQUNOOzs2QkFHRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUdBLCtDQUFBLEFBQUM7cUJBQUQsQUFDYyxBQUNaO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7a0JBQVcseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFNLE1BQUEsQUFBTSxPQUFyQyxBQUFTLEFBQWMsQUFBcUI7QUFIekQsQUFJRTtlQUpGLEFBSVEsQUFDTjt1QkFMRixBQUtnQjs7b0JBTGhCO3NCQUxKLEFBQ0UsQUFJRSxBQVVGO0FBVkU7QUFDRSwyQkFTSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLGdFQUErRCxNQUFNLEtBQUEsQUFBSyxNQUFoRyxBQUFzRztvQkFBdEc7c0JBZkYsQUFlRSxBQUdBO0FBSEE7MEJBR0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO29CQUFwQztzQkFBQTtBQUFBO1NBckJKLEFBR0UsQUFrQkUsQUFPTDs7Ozs7QSxBQXhGMEI7O0FBMEY1QixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2Nhcmxvc2RwZC9EZXNrdG9wL2tpY2tzdGFydCJ9