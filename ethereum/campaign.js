//Dependencias necesarias
import web3 from './web3';
import Campaign from './build/Campaign.json';

//Código utilizado para referirnos a una campaña en específico, dado una dirección que es recibida como parámetro
export default (address) => {

  //Devuelve una instancia de contrato
  return new web3.eth.Contract(
    JSON.parse(Campaign.interface),
    address
  );
};
