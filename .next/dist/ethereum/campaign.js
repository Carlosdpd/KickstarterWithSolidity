'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Este script es utilizado para referirnos a una campaña en específico, dado una dirección que es recibida como parámetro
//Dependencias necesarias
exports.default = function (address) {

  //Devuelve una instancia de contrato
  return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7O0FBRXJCLEFBQ0E7QUFMQTtrQkFLZSxVQUFBLEFBQUMsU0FBWSxBQUUxQjs7QUFDQTtTQUFPLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUNsQixLQUFBLEFBQUssTUFBTSxtQkFETixBQUNMLEFBQW9CLFlBRHRCLEFBQU8sQUFFTCxBQUVIO0FBUEQiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvY2FybG9zZHBkL0Rlc2t0b3Ava2lja3N0YXJ0In0=