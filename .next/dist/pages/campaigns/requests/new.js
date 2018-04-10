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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/horaciocoll/Desktop/Tesis/KickstarterWithSolidity/pages/campaigns/requests/new.js?entry';


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
                event.preventDefault();

                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

              case 10:

                fetch('http://192.168.2.9:8000/request', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    campaignManager: accounts[0],
                    toAddress: recipient,
                    value: _web2.default.utils.toWei(value, 'ether'),
                    description: description
                  })
                });

                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: ['Asegúrese de ingresar un número válido de ether o wei (Sin letras)', 'En caso de ser una lista, no deje elementos en blanco', 'Verifique estar usando su plug-in Metamask', 'Verifique su lista de transacciones pendientes'] });

              case 17:

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

  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Atras')), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, ' Crear una nueva solicitud '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, ' Descripci\xF3n '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Descripci\xF3n de su solicitud',
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, ' Monto en ether'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Monto que desea retirar de la campa\xF1a',
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, ' Destino '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Direcci\xF3n destino a la que ir\xE1n los fondos de su solicitud',
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Hubo un error, tome en cuenta las siguientes consideraciones', list: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, '\xA1Crear!')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
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
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJjYW1wYWlnbk1hbmFnZXIiLCJ0b0FkZHJlc3MiLCJwdXNoUm91dGUiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBUzs7QUFDaEMsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBZTs7QUFDOUIsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7Ozs7Ozs7b05BRUosQTthQUFRLEFBQ0UsQUFDTjttQkFGSSxBQUVRLEFBQ1o7aUJBSEksQUFHTSxBQUNWO2VBSkksQUFJSyxBQUNUO29CQUxJLEEsQUFLVTtBQUxWLEFBQ0osYUFlSixBOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtrRUFBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUVBOztBQUhHLDJCQUdRLHdCQUFTLE1BQUEsQUFBSyxN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QUFORTtBQUNFLDJCQUtILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhCQUFBLEFBQUM7cUJBQUQsQUFDYyxBQUNaO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLE1BQUEsQUFBTSxPQUExQyxBQUFTLEFBQWMsQUFBMEI7QUFIN0Q7O29CQUFBO3NCQW5CSixBQWlCRSxBQUVFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsZ0VBQStELE1BQU0sS0FBQSxBQUFLLE1BQWhHLEFBQXNHO29CQUF0RztzQkExQkYsQUEwQkUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBQUE7QUFBQTtTQXJDTixBQUNFLEFBU0UsQUEyQkUsQUFNUDs7Ozs7NkdBMUY0QixBOzs7OzttQkFFbkI7QSwwQkFBWSxNQUFNLEEsTUFBbEIsQTtrREFFRCxFQUFFLFNBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWRjLEEsQUF3R3pCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaG9yYWNpb2NvbGwvRGVza3RvcC9UZXNpcy9LaWNrc3RhcnRlcldpdGhTb2xpZGl0eSJ9