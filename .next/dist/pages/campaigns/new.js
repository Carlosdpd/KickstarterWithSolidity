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

var _jsxFileName = '/home/carlosdpd/Desktop/kickstart/pages/campaigns/new.js?entry';


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
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution, _this.state.maximumContribution, _this.state.maximumCont).send({
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
          lineNumber: 59
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, ' Crear una campa\xF1a '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
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
          lineNumber: 65
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
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
          lineNumber: 76
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, ' N\xFAmero m\xE1ximo de contribuyentes '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Cantidad maxima de cotribuyentes que desea en su campa\xF1a, coloque 0 si no desea establecer un l\xEDmite de contribuyentes',
        value: this.state.maximumCont,
        onChange: function onChange(event) {
          return _this3.setState({ maximumCont: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Hubo un error, tome en cuenta las siguientes consideraciones', list: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, '\xA1Crear!')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIm1heGltdW1Db250cmlidXRpb24iLCJtYXhpbXVtQ29udCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImxhc3RDYW1wYWluZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJjYW1wYWlnbk1hbmFnZXIiLCJjYW1wYWlnbkFkZHJlc3MiLCJsZW5ndGgiLCJwdXNoUm91dGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFhOzs7Ozs7O0lBRWhCLEE7Ozs7Ozs7Ozs7Ozs7OztzTkFFSixBOzJCQUFRLEFBQ2UsQUFDckI7MkJBRk0sQUFFZSxBQUNyQjttQkFITSxBQUdNLEFBQ1o7b0JBSk0sQUFJUSxBQUNkO2VBTE0sQUFLRyxBO0FBTEgsQUFDTixhLEFBT0Y7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFFTjs7c0JBQUEs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eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDREQUFBLEFBQUM7cUJBQUQsQUFDYyxBQUNaO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLE1BQUEsQUFBTSxPQUE1QyxBQUFTLEFBQWMsQUFBNEI7QUFIL0Q7O29CQUFBO3NCQXpCSixBQXVCRSxBQUVFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsZ0VBQStELE1BQU0sS0FBQSxBQUFLLE1BQWhHLEFBQXNHO29CQUF0RztzQkFoQ0YsQUFnQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBckNOLEFBQ0UsQUFHRSxBQWlDRSxBQUlQOzs7OztBQTNGdUIsQSxBQStGMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2Nhcmxvc2RwZC9EZXNrdG9wL2tpY2tzdGFydCJ9