'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/carlosdpd/Desktop/kickstart/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          maximumContribution = _props.maximumContribution,
          maximumContributors = _props.maximumContributors,
          requestCount = _props.requestCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'Direccion del gerente',
        description: 'Gerente que creo la campaña, puede crear solicitudes y enviar dinero de la campaña.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Contribucion minima (wei)',
        description: 'Para convertirse en contribuyente debe aportar al menos esta cantidad de wei.'
      }, {
        header: maximumContribution,
        meta: 'Contribucion maxima (wei)',
        description: 'Para convertirse en contribuyente debe aportar como maximo esta cantidad de wei.'
      }, {
        header: maximumContributors,
        meta: 'Cantidad maxima de contribuyentes',
        description: 'Numero maximo de contribuyentes que pueden aportar a esta campaña.'
      }, {
        header: requestCount,
        meta: 'Numero de solicitudes',
        description: 'Una solicitud envia fondos de la campaña acual. Las solicitudes deben ser aprobadas por los contribuyentes.'
      }, {
        header: approversCount,
        meta: 'Numero de contribuyentes',
        description: 'Cantidad de personas que han contribuido a esta campaña.'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Balance de la campaña (ether)',
        description: 'El balance de la campaña es cuanto dinero tiene esta campaña para gastar.'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, ' Informacion de la campa\xF1a '), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, alreadyContributed: this.props.contributed, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, 'Ver solicitudes')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary, accounts, alreadyContributed;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;

                if (summary[1] == '0') {
                  summary[1] = '-';
                }

                if (summary[2] == '0') {
                  summary[2] = '-';
                }

                _context.next = 8;
                return _web2.default.eth.getAccounts();

              case 8:
                accounts = _context.sent;
                _context.next = 11;
                return campaign.methods.approvers(accounts[0]).call();

              case 11:
                alreadyContributed = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  maximumContribution: summary[1],
                  maximumContributors: summary[2],
                  balance: summary[3],
                  requestCount: summary[4],
                  approversCount: summary[5],
                  manager: summary[6],
                  contributed: alreadyContributed
                });

              case 13:
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

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIm1heGltdW1Db250cmlidXRpb24iLCJtYXhpbXVtQ29udHJpYnV0b3JzIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwiY29udHJpYnV0ZWQiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJhcHByb3ZlcnMiLCJhbHJlYWR5Q29udHJpYnV0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7a0NBaUNVO21CQVVSLEtBVlEsQUFVSDtVQVZHLEFBR1YsaUJBSFUsQUFHVjtVQUhVLEFBSVYsaUJBSlUsQUFJVjtVQUpVLEFBS1YsNkJBTFUsQUFLVjtVQUxVLEFBTVYsNkJBTlUsQUFNVjtVQU5VLEFBT1YsNkJBUFUsQUFPVjtVQVBVLEFBUVYsc0JBUlUsQUFRVjtVQVJVLEFBU1Ysd0JBVFUsQUFTVixBQUdGOztVQUFNO2dCQUNKLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFDLGNBTEUsQUFDWixBQUlTLEFBQWU7QUFKeEIsQUFDRSxPQUZVO2dCQU9aLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFWVSxBQU9aLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFmVSxBQVlaLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFwQlUsQUFpQlosQUFHZTtBQUhmLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQXpCVSxBQXNCWixBQUdlO0FBSGYsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBOUJVLEFBMkJaLEFBR2U7QUFIZixBQUNFO2dCQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ3QixBQUNVLEFBQTRCLEFBQ3BDO2NBRkYsQUFFUSxBQUNOO3FCQW5DSixBQUFjLEFBZ0NaLEFBR2UsQUFJakI7QUFQRSxBQUNFOzsyQ0FNRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdELEFBQ047NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsbURBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNHO0FBREg7Y0FERixBQUNFLEFBQ0csQUFBSyxBQUdSLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DLFNBQVMsb0JBQW9CLEtBQUEsQUFBSyxNQUF0RSxBQUE0RTtvQkFBNUU7c0JBUE4sQUFDRSxBQUtFLEFBQ0UsQUFJSjtBQUpJOzRCQUlILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBbEJaLEFBQ0UsQUFFRSxBQVdFLEFBQ0UsQUFDQSxBQUNFLEFBQ0UsQUFXYjs7Ozs7MkdBbkg0QixBOzs7OzttQkFFckI7QSwyQkFBVyx3QkFBUyxNQUFBLEFBQU0sTUFBZixBQUFxQixBOzt1QkFFaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQSxBQUE4Qjs7bUJBQTlDO0EsbUNBRU47O29CQUFJLFFBQUEsQUFBUSxNQUFaLEFBQWtCLEtBQUssQUFDckI7MEJBQUEsQUFBUSxLQUFSLEFBQWEsQUFDZDtBQUVEOztvQkFBSSxRQUFBLEFBQVEsTUFBWixBQUFrQixLQUFLLEFBQ3JCOzBCQUFBLEFBQVEsS0FBUixBQUFhLEFBQ2Q7Ozs7dUJBRXNCLGNBQUEsQUFBSyxJQUFMLEEsQUFBUzs7bUJBQTFCO0E7O3VCQUUyQixTQUFBLEFBQVMsUUFBVCxBQUFpQixVQUFVLFNBQTNCLEFBQTJCLEFBQVMsSUFBcEMsQUFBd0MsQTs7bUJBQW5FO0E7OzJCQUdLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO3VDQUFxQixRQUZoQixBQUVnQixBQUFRLEFBQzdCO3VDQUFxQixRQUhoQixBQUdnQixBQUFRLEFBQzdCO3VDQUFxQixRQUpoQixBQUlnQixBQUFRLEFBQzdCOzJCQUFTLFFBTEosQUFLSSxBQUFRLEFBQ2pCO2dDQUFjLFFBTlQsQUFNUyxBQUFRLEFBQ3RCO2tDQUFnQixRQVBYLEFBT1csQUFBUSxBQUN4QjsyQkFBUyxRQVJKLEFBUUksQUFBUSxBQUNqQjsrQkFUSyxBQVNRLEE7QUFUUixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBckJxQixBLEFBd0gzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2Nhcmxvc2RwZC9EZXNrdG9wL2tpY2tzdGFydCJ9