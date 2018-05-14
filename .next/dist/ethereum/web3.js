'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; //Dependencias necesarias


if (typeof window !== 'undefined' && window.web3 !== 'undefined') {

  //Se está haciendo uso del navegador Y Metamask está activo
  web3 = new _web2.default(window.web3.currentProvider);
} else {

  //Está siendo llamado del lado del servidor, o Metamask NO está activado
  var provider = new _web2.default.providers.HttpProvider(

  //Nodo Infura al que se conectará  nuestra instancia de Metamask para interactuar con la red Rinkeby de Ethereum
  'https://rinkeby.infura.io/O9rDBBXPQ0LgMzdxly6I');

  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTzs7Ozs7O0FBRVAsSUFBSSxZQUFKLEdBSEE7OztBQUtBLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFBLEFBQU8sU0FBNUMsQUFBcUQsYUFBYSxBQUVoRTs7QUFDQTtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFFN0I7QUFMRCxPQUtNLEFBRUo7O0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsQUFFbEM7O0FBQ0E7QUFIRixBQUFpQixBQU1qQjs7U0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNqQjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvY2FybG9zZHBkL0Rlc2t0b3Ava2lja3N0YXJ0In0=