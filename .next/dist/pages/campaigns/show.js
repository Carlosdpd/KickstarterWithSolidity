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

var _jsxFileName = '/Users/horaciocoll/Desktop/Tesis/KickstarterWithSolidity/pages/campaigns/show.js?entry';


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
          approversCount = _props.approversCount,
          approvalRate = _props.approvalRate,
          rejectedRate = _props.rejectedRate;

      var items = [{
        header: manager,
        meta: 'Dirección del gerente',
        description: 'Gerente que creó la campaña, puede crear solicitudes y enviar dinero de la campaña.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Contribución mínima (wei)',
        description: 'Para convertirse en contribuyente debe aportar al menos esta cantidad de wei.'
      }, {
        header: maximumContribution,
        meta: 'Contribución máxima (wei)',
        description: 'Para convertirse en contribuyente puede aportar como máximo esta cantidad de wei.'
      }, {
        header: maximumContributors,
        meta: 'Cantidad máxima de contribuyentes',
        description: 'Número máximo de contribuyentes que pueden aportar a esta campaña.'
      }, {
        header: requestCount,
        meta: 'Número de solicitudes',
        description: 'Una solicitud envía fondos de la campaña actual. Las solicitudes deben ser aprobadas por los contribuyentes.'
      }, {
        header: approversCount,
        meta: 'Número de contribuyentes',
        description: 'Cantidad de personas que han contribuido a esta campaña.'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Balance de la campaña (ether)',
        description: 'El balance de la campaña es cuanto dinero tiene esta campaña para gastar.'
      }, {
        header: approvalRate + "%",
        meta: 'Tasa de aprobación',
        description: 'Tasa de votos de aprobación para aprobar una solicitud.'
      }, {
        header: rejectedRate + "%",
        meta: 'Tasa de rechazo',
        description: 'Tasa de votos de rechazo para rechazar una solicitud.'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, ' Informaci\xF3n de la campa\xF1a '), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, 'Ver solicitudes')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary, accounts;
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
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  maximumContribution: summary[1],
                  maximumContributors: summary[2],
                  balance: summary[3],
                  requestCount: summary[4],
                  approversCount: summary[5],
                  approvalRate: summary[6],
                  rejectedRate: summary[7],
                  manager: summary[8]
                });

              case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIm1heGltdW1Db250cmlidXRpb24iLCJtYXhpbXVtQ29udHJpYnV0b3JzIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJhcHByb3ZhbFJhdGUiLCJyZWplY3RlZFJhdGUiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7O2tDQWdDVTttQkFZUixLQVpRLEFBWUg7VUFaRyxBQUdWLGlCQUhVLEFBR1Y7VUFIVSxBQUlWLGlCQUpVLEFBSVY7VUFKVSxBQUtWLDZCQUxVLEFBS1Y7VUFMVSxBQU1WLDZCQU5VLEFBTVY7VUFOVSxBQU9WLDZCQVBVLEFBT1Y7VUFQVSxBQVFWLHNCQVJVLEFBUVY7VUFSVSxBQVNWLHdCQVRVLEFBU1Y7VUFUVSxBQVVWLHNCQVZVLEFBVVY7VUFWVSxBQVdWLHNCQVhVLEFBV1YsQUFHRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBQyxjQUxFLEFBQ1osQUFJUyxBQUFlO0FBSnhCLEFBQ0UsT0FGVTtnQkFPWixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBVlUsQUFPWixBQUdlO0FBSGYsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBZlUsQUFZWixBQUdlO0FBSGYsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBcEJVLEFBaUJaLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkF6QlUsQUFzQlosQUFHZTtBQUhmLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQTlCVSxBQTJCWixBQUdlO0FBSGYsQUFDRTtnQkFLUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEN0IsQUFDVSxBQUE0QixBQUNwQztjQUZGLEFBRVEsQUFDTjtxQkFuQ1UsQUFnQ1osQUFHZTtBQUhmLEFBQ0U7Z0JBS1EsZUFEVixBQUN5QixBQUN2QjtjQUZGLEFBRVEsQUFDTjtxQkF4Q1UsQUFxQ1osQUFHZTtBQUhmLEFBQ0U7Z0JBS1EsZUFEVixBQUN5QixBQUN2QjtjQUZGLEFBRVEsQUFDTjtxQkE3Q0osQUFBYyxBQTBDWixBQUdlLEFBSWpCO0FBUEUsQUFDRTs7MkNBTUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHRCxBQUNOOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHNEQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRztBQURIO2NBREYsQUFDRSxBQUNHLEFBQUssQUFHUixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBUE4sQUFDRSxBQUtFLEFBQ0UsQUFJSjtBQUpJOzRCQUlILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBbEJaLEFBQ0UsQUFFRSxBQVdFLEFBQ0UsQUFDQSxBQUNFLEFBQ0UsQUFXYjs7Ozs7MkcsQUE5SDRCOzs7OzttQkFFckI7QSwyQkFBVyx3QkFBUyxNQUFBLEFBQU0sTUFBZixBLEFBQXFCOzt1QkFFaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7bUJBQTlDO0EsbUNBRU47O29CQUFJLFFBQUEsQUFBUSxNQUFaLEFBQWtCLEtBQUssQUFDckI7MEJBQUEsQUFBUSxLQUFSLEFBQWEsQUFDZDtBQUVEOztvQkFBSSxRQUFBLEFBQVEsTUFBWixBQUFrQixLQUFLLEFBQ3JCOzBCQUFBLEFBQVEsS0FBUixBQUFhLEFBQ2Q7Ozs7dUJBRXNCLGNBQUEsQUFBSyxJQUFMLEEsQUFBUzs7bUJBQTFCO0E7OzJCQUdLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO3VDQUFxQixRQUZoQixBQUVnQixBQUFRLEFBQzdCO3VDQUFxQixRQUhoQixBQUdnQixBQUFRLEFBQzdCO3VDQUFxQixRQUpoQixBQUlnQixBQUFRLEFBQzdCOzJCQUFTLFFBTEosQUFLSSxBQUFRLEFBQ2pCO2dDQUFjLFFBTlQsQUFNUyxBQUFRLEFBQ3RCO2tDQUFnQixRQVBYLEFBT1csQUFBUSxBQUN4QjtnQ0FBYyxRQVJULEFBUVMsQUFBUSxBQUN0QjtnQ0FBYyxRQVRULEFBU1MsQUFBUSxBQUN0QjsyQkFBUyxRQVZKLEFBVUksQUFBUSxBO0FBVlosQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW5CcUIsQSxBQW1JM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaG9yYWNpb2NvbGwvRGVza3RvcC9UZXNpcy9LaWNrc3RhcnRlcldpdGhTb2xpZGl0eSJ9