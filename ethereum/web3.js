//Dependencias necesarias
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {

  //Se está haciendo uso del navegador Y Metamask está activo
  web3 = new Web3(window.web3.currentProvider);

}else {

  //Está siendo llamado del lado del servidor, o Metamask NO está activado
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/O9rDBBXPQ0LgMzdxly6I'
  );

  web3 = new Web3(provider);
}

export default web3;
