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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/horaciocoll/Desktop/Tesis/KickstarterWithSolidity/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: '',
      maximumContribution: '',
      maximumCont: '',
      approveRate: '',
      rejectRate: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, lastCampaing;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution, _this.state.maximumContribution, _this.state.maximumCont, _this.state.approveRate, _this.state.rejectRate).send({
                  from: accounts[0]
                });

              case 8:
                _context.next = 10;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 10:
                lastCampaing = _context.sent;

                fetch('http://192.168.2.9:8000/campaign', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    campaignManager: accounts[0],
                    campaignAddress: lastCampaing[lastCampaing.length - 1],
                    minimumContribution: _this.state.minimumContribution,
                    maximumContribution: _this.state.maximumContribution,
                    maximumCont: _this.state.maximumCont
                  })
                });

                _routes.Router.pushRoute('/');

                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: ['Asegúrese de ingresar un número válido de ether o wei (Sin letras)', 'En caso de ser una lista, no deje elementos en blanco', 'Verifique estar usando su plug-in Metamask', 'Verifique su lista de transacciones pendientes'] });

              case 18:

                _this.setState({ loading: false });

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 15]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, ' Crear una campa\xF1a '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, ' Contribuci\xF3n m\xEDnima '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Cantidad m\xEDnima de wei con la que se puede contribuir a la campa\xF1a',
        labelPosition: 'right',
        label: 'wei',
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, ' Contribuci\xF3n m\xE1xima '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Cantidad m\xE1xima de wei con la que se puede contribuir a la campa\xF1a, coloque 0 si no desea establecer un l\xEDmite m\xE1ximo',
        labelPosition: 'right',
        label: 'wei',
        value: this.state.maximumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ maximumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, ' N\xFAmero m\xE1ximo de contribuyentes '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Cantidad maxima de cotribuyentes que desea en su campa\xF1a, coloque 0 si no desea establecer un l\xEDmite de contribuyentes',
        value: this.state.maximumCont,
        onChange: function onChange(event) {
          return _this3.setState({ maximumCont: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, ' Tasa de aprobaci\xF3n '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Porcentaje de votos de aprobaci\xF3n necesarios para aprobar una solicitud, debe ser un n\xFAmero entre 1 y 99',
        value: this.state.approveRate,
        onChange: function onChange(event) {
          return _this3.setState({ approveRate: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, ' Tasa de rechazo '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Porcentaje de votos de rechazo necesarios para rechazar una solicitud, debe ser un n\xFAmero entre 1 y 100',
        value: this.state.rejectRate,
        onChange: function onChange(event) {
          return _this3.setState({ rejectRate: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Hubo un error, tome en cuenta las siguientes consideraciones', list: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, '\xA1Crear!')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIm1heGltdW1Db250cmlidXRpb24iLCJtYXhpbXVtQ29udCIsImFwcHJvdmVSYXRlIiwicmVqZWN0UmF0ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImxhc3RDYW1wYWluZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJjYW1wYWlnbk1hbmFnZXIiLCJjYW1wYWlnbkFkZHJlc3MiLCJsZW5ndGgiLCJwdXNoUm91dGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFhOzs7Ozs7O0lBRWhCLEE7Ozs7Ozs7Ozs7Ozs7OztzTkFFSixBOzJCQUFRLEFBQ2UsQUFDckI7MkJBRk0sQUFFZSxBQUNyQjttQkFITSxBQUdNLEFBQ1o7bUJBSk0sQUFJTSxBQUNaO2tCQUxNLEFBS0ssQUFDWDtvQkFOTSxBQU1RLEFBQ2Q7ZSxBQVBNLEFBT0c7QUFQSCxBQUNOLGEsQUFTRjsyRkFBVyxpQkFBQSxBQUFP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QUFjLEFBQW9DO0FBTHZFOztvQkFBQTtzQkFkSixBQVlFLEFBRUUsQUFTRjtBQVRFO0FBQ0UsMkJBUUgsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNERBQUEsQUFBQztxQkFBRCxBQUNjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BQTVDLEFBQVMsQUFBYyxBQUE0QjtBQUgvRDs7b0JBQUE7c0JBekJKLEFBdUJFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUgsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNENBQUEsQUFBQztxQkFBRCxBQUNjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BQTVDLEFBQVMsQUFBYyxBQUE0QjtBQUgvRDs7b0JBQUE7c0JBbENKLEFBZ0NFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUgsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esc0NBQUEsQUFBQztxQkFBRCxBQUNjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFlBQVksTUFBQSxBQUFNLE9BQTNDLEFBQVMsQUFBYyxBQUEyQjtBQUg5RDs7b0JBQUE7c0JBM0NKLEFBeUNFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixnRUFBK0QsTUFBTSxLQUFBLEFBQUssTUFBaEcsQUFBc0c7b0JBQXRHO3NCQWxERixBQWtERSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDO29CQUFBO3NCQUFBO0FBQUE7U0F2RE4sQUFDRSxBQUdFLEFBbURFLEFBSVA7Ozs7O0FBbEh1QixBLEFBc0gxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hvcmFjaW9jb2xsL0Rlc2t0b3AvVGVzaXMvS2lja3N0YXJ0ZXJXaXRoU29saWRpdHkifQ==